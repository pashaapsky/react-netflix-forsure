import React, {Fragment} from 'react';
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'
import Header from "../components/header";
import Profiles from "../components/profiles";

function SelectProfileContainer({user, setProfile}) {
    return (
        <Fragment>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} alt="NETFLIX" src={logo}/>
                </Header.Frame>
            </Header>

            <Profiles>
                <Profiles.Title>Кто здесь?</Profiles.Title>

                <Profiles.List>
                    <Profiles.Item
                        onClick={() => setProfile({
                            displayName: user.displayName,
                            photoURL: user.photoURL
                        })}
                    >
                        <Profiles.Picture src={user.photoURL}/>
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.Item>
                </Profiles.List>
            </Profiles>
        </Fragment>
    );
}

export default SelectProfileContainer;