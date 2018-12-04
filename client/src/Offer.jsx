import React, { Component } from 'react';
import { Box } from 'grommet';

const Offer = () => (
    <Box direction='column' align="center">
        <h1>Great, your picks are on the way</h1>
        <a href="#" className="href">Click on our fanpicks affiliate link to help us out.</a>
        <p>Page 3/3</p>
    </Box> 
);

// class Offer extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Great, your picks are on the way</h1>
//                 <a href="#" className="href">Click on our fanpicks affiliate link to help us out.</a>
//                 <p>Page 3/3</p>
//             </div>  
//         );
//     };
// };

export default Offer;