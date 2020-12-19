import React, {useContext, useState, useEffect, Fragment} from 'react';
import SelectProfileContainer from "./profile";
import {FirebaseContext} from "../context/firebase";
import Loading from "../components/loading";
import Header from "../components/header";
import Card from "../components/card";
import * as ROUTES from '../constants/routes'
import logo from "../logo.svg"
import FooterContainer from "./footer";
import Player from "../components/player";
import Fuse from "fuse.js";

function BrowseContainer({slides}) {
    const [category, setCategory] = useState('films');
    const [slideRows, setSlideRows] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);

    const {firebase} = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    // загрузка профиля
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [profile.displayName]);

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [category, slides]);

    // поиск видео
    useEffect(() => {
        const fuse = new Fuse(slideRows, {
            keys: ['data.description', 'data.title', 'data.genre'],
        });

        const results = fuse.search(searchTerm).map(({item}) => item);

        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }
    }, [searchTerm]);

    return profile.displayName ? (
        <Fragment>
            {loading ? <Loading src={user.photoURL}/> : <Loading.ReleaseBody/>}

            <Header src="ghost-six" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"/>

                        <Header.TextLink
                            active={category === 'series' ? 'true' : 'false'}
                            onClick={() => setCategory('series')}
                        >
                            Сериалы
                        </Header.TextLink>

                        <Header.TextLink
                            active={category === 'films' ? 'true' : 'false'}
                            onClick={() => setCategory('films')}
                        >
                            Фильмы
                        </Header.TextLink>
                    </Header.Group>

                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

                        <Header.Profile>
                            <Header.Picture src={user.photoURL}/>

                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL}/>
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>

                                <Header.Group>
                                    <Header.TextLink onClick={() => {
                                        firebase.auth().signOut();
                                    }}
                                    >
                                        Выйти из Netflix
                                    </Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>

                <Header.Feature>
                    <Header.FeatureCallOut>
                        <img
                            src="https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABV0MdfLW5o-O4BXQT1DEOjtfDFZa-EHhOXaqEZh_ZANZSEgmf_XwYjyaWHyObROIbgzRfNu6f-C3wh2ysk3TsJp3d-Ptt7f15jDecy47a4MRoJfxMiMb73TUbbnfsY7T6rAIXuzPCMd4-5c5cxjyIclJI6hGq3aimCZE5HCI8_qong.webp?r=6d9"
                            alt="Призрачная шестерка"
                        />
                    </Header.FeatureCallOut>

                    <Header.Text>
                        Шесть человек. Одна миссия. Никаких границ. Мир считает, что они мертвы, и они могут планомерно
                        избавить его от злодеев.
                    </Header.Text>


                    <Header.PlayButton>
                        Смотреть
                    </Header.PlayButton>
                </Header.Feature>
            </Header>

            <Card.Group>
                {slideRows.map(item => (
                    <Card key={`${category}-${item.title.toLowerCase()}`}>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Entities>
                            {item.data.map(item => (
                                <Card.Item key={item.docId} item={item}>
                                    <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}/>

                                    <Card.Meta>
                                        <Card.SubTitle>{item.title}</Card.SubTitle>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>

                        <Card.Feature category={category}>
                            <Player>
                                <Player.Button/>
                                <Player.Video/>
                            </Player>
                        </Card.Feature>
                    </Card>
                ))}
            </Card.Group>

            <FooterContainer/>

        </Fragment>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile}/>
    );
}

export default BrowseContainer;