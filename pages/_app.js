import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Header from "../components/layout/Header";
const _app = ({ Component })=>{
    const [windowSize,setWindowSize]=useState(0);

    const handleResize = () =>{
        setWindowSize(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener('resize',handleResize);
        handleResize();
    },[windowSize])
    return (
        <>
            <Header></Header>
            <Component/>
        </>
    );
};

_app.prototype = {
    Component: PropTypes.elementType.isRequired,
}

export default _app;

