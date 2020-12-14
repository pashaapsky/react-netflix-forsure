import React, {useState, useContext, createContext} from 'react';
import ReactDom from 'react-dom'
import {Container, Button, Overlay, Inner, Close} from './styles/player'
import CallForm from "../call-form";

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

Player.Video = function PlayerVideo({src, ...restProps}) {
    const {showPlayer, setShowPlayer} = useContext(VideoPlayerContext);

    return showPlayer ? ReactDom.createPortal(
        <Overlay {...restProps} onClick={() => setShowPlayer(false)}>
            <Inner>
                <video id="netflix-player" controls>
                    <source src={src} type="video/mp4"/>
                </video>

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