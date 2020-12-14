import React from 'react';
import {Container, Item, Inner, Pane, Title, SubTitle, Image, Player} from "./styles/multiwatch";

function MultiWatch({children, direction = 'row', ...restProps}) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>
    );
}

MultiWatch.Container = function MultiWatchContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
};

MultiWatch.Pane = function MultiWatchPane({children, ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
};

/**
 * @return {null}
 */
MultiWatch.Video = function MultiWatchVideo({src, ...restProps}) {
    return src ? (
        <Player {...restProps}>
            <video loop muted autoPlay>
                <source src={src} type="video/mp4"/>
            </video>
        </Player>
    ) : null
};

MultiWatch.Title = function MultiWatchTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
};

MultiWatch.SubTitle = function MultiWatchSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
};

MultiWatch.Image = function MultiWatchImage({...restProps}) {
    return <Image {...restProps} />
};

export default MultiWatch;