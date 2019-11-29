import React from 'react';
import './scss/App.css';
import OptionsList from './components/OptionsList';
import CitiesList from './components/CitiesList';

const App = () => {
    return(
        <div className="App">
            <OptionsList/>
            <CitiesList/>
        </div>
    )
};

export default App;