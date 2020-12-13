import React from 'react';
import selectionFilter from "../helpers/selection-filter";
import BrowseContainer from "../containers/browse";
import useMovies from "../hooks/movies.hook";

function Browse(props) {
    const {series} = useMovies('series');
    const {films} = useMovies('films');
    const slides = selectionFilter({series, films});

    console.log(slides);

    return (
        <BrowseContainer slides={slides}/>
    );
}

export default Browse;