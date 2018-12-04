import React, { Component } from 'react';
import { Box } from 'grommet';

function clickHandler() {
    window.location.assign("/#signup");
}

const Splash = () => (
    <Box direction='column' align="center" background="brand">
        <h1>Welcome To Fan Picks</h1>
        <button onClick={clickHandler}>Click to Get Started</button>
        <p>Page 1/4</p>
    </Box>
);

export default Splash;