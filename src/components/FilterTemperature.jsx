import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../store/actions';

class FilterTemperature extends React.Component {
    constructor(props) {
        super(props);
        this.tempRef = React.createRef();
    }

    moveTempValue(inputWidth, percentage) {
        let step = inputWidth / 100;
        let span = this.tempRef.current;
        let spanWidth = getComputedStyle(span).width.split('px')[0];
        this.tempRef.current.style.left = `${(Math.floor(percentage) * step) - (spanWidth / 2 - 5)}px`;
    }

    componentDidMount() {
        let input = document.getElementById('warmer-than');
        let width = getComputedStyle(input).width.split('px')[0];
        this.moveTempValue(width, 100 / 30 * input.value);
    }

    handleFilterChange(event) {
        let value = event.currentTarget.value;
        let max = event.currentTarget.getAttribute('max');
        let percentage = 100 / max * value;
        let gradient = `linear-gradient(to right, #aaa ${percentage}%, #555 ${percentage}%)`;

        event.currentTarget.style.background = gradient;
        const inputWidth = getComputedStyle(event.currentTarget).width.split('px')[0];

        let sign = (value > 0) ? '+' : '';
        this.tempRef.current.innerHTML = sign + value + ' &#8451;';
        this.moveTempValue(inputWidth, percentage);

        this.props.setFilter({ temperature: parseInt(value) });
    }

    render() {
        return(
            <div>
                <label htmlFor="warmer-than">
                    Где сейчас теплее, чем<br/>
                    <input id="warmer-than" type="range" min={0} max={30} defaultValue={5} onChange={(e) => this.handleFilterChange(e)}/>
                    <span ref={this.tempRef}>+5 &#8451;</span>
                </label>
            </div>
        );
    }
}

export default connect(
    null, { setFilter }
)(FilterTemperature);