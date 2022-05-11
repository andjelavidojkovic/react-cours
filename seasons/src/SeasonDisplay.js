import './SeasonDisplay.css'
import React from "react";
//import Spinner from './Spinner.js'

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Brr, it is chilly',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'; // ako  je lat>0 onda smo u northern hemisphere, u suprotnom smo u southern 
    } else {
        return lat > 0 ? 'winter' : 'summer'; // ako  je lat>0 onda smo u northern hemisphere, u suprotnom smo u southern 
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    // eslint-disable-next-line no-unused-expressions
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;