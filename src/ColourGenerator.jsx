import { useState } from 'react';

const ColourGenerator = () => {
    
    const [colours, setColour] = useState([]);
    
    const generateColours = () => {
        setColour(current => [Math.random().toString(16).substr(-6), ...current]);
    };
    
    return {colours, generateColours};
    
};

export default ColourGenerator;