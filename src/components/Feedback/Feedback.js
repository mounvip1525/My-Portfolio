import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';


export default class Feedback extends Component {
    render() {
        return (
            <div className="feedback">
                <h5>How would you rate this portfolio ? </h5>
                <p>Very appreciable if you can select one</p>
                <Slider defaultValue={0} step={1} marks min={0} max={5} />
            </div>
        )
    }
}
