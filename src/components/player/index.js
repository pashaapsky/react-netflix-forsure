import React, {useState, useContext, createContext, useEffect} from 'react';
import ReactDom from 'react-dom'
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer'
import {Container, Button, Overlay, Inner, Close} from './styles/player'
import {FeatureContext} from "../card";

export const VideoPlayerContext = createContext();

function Player({children, ...restProps}) {
    const [showPlayer, setShowPlayer] = useState(false);

    return (
        <VideoPlayerContext.Provider value={{
            showPlayer, setShowPlayer
        }}>
            <Container {...restProps}>
                {children}
            </Container>
        </VideoPlayerContext.Provider>
    )
}

Player.Video = function PlayerVideo({...restProps}) {
    const {showPlayer, setShowPlayer} = useContext(VideoPlayerContext);
    const {itemFeature} = useContext(FeatureContext);

    const [videoId, setVideoId] = useState('');

    useEffect(() => {
        if (itemFeature) {
            movieTrailer(itemFeature.slug, {id: true, multi: false})
                .then(res => setVideoId(res))
                .catch(e => console.error(e.message))
        }

    }, [itemFeature]);

    return showPlayer ? ReactDom.createPortal(
        <Overlay {...restProps} onClick={() => setShowPlayer(false)}>
            <Inner>
                <YouTube videoId={videoId} containerClassName="youtube-player" opts={{
                    height: "100%",
                    width: "100%",
                    playerVars: {
                        autoplay: 1,
                    }
                }}/>

                <Close/>
            </Inner>
        </Overlay>,
        document.body
    ) : null
};

Player.Button = function PlayerButton({children, ...restProps}) {
    const {showPlayer, setShowPlayer} = useContext(VideoPlayerContext);

    return <Button type="button" onClick={() => setShowPlayer(!showPlayer)}>Смотреть</Button>
};


export default Player;