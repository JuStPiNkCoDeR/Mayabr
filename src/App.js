import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getCities } from './store/selectors';
import './scss/App.css';
import OptionsList from './components/OptionsList';
import CitiesList from './components/CitiesList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <OptionsList/>
                <CitiesList/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    trackedCities: getCities(state)
});

export default connect(
    mapStateToProps
)(App);
