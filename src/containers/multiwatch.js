import React from 'react';
import watchData from '../data/multiwatch'
import MultiWatch from "../components/multiwatch/";

function MultiWatchContainer () {
    return (
        <MultiWatch.Container >
            {watchData.map(item => (
                <MultiWatch key={item.id} direction={item.direction}>
                    <MultiWatch.Pane>
                        <MultiWatch.Title>{item.title}</MultiWatch.Title>
                        <MultiWatch.SubTitle>{item.subTitle}</MultiWatch.SubTitle>
                    </MultiWatch.Pane>

                    <MultiWatch.Pane>
                        <MultiWatch.Image src={item.image} alt={item.alt} />
                        <MultiWatch.Video videoMark={item.videoMark} src={item.video} />
                    </MultiWatch.Pane>
                </MultiWatch>
            ))}
        </MultiWatch.Container>
    );
}

export default MultiWatchContainer;