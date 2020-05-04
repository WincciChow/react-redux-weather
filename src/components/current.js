import React from 'react';
import {connect} from 'react-redux';
import Skycons from 'react-skycons'

const Current = (props) => {
    const convert = (F) => {
        return Math.round((F - 32) * 5 / 9)
    }

    let icon = props.data.currently.icon.replace(/-/g, "_").toUpperCase()

    return (
        <div className="current">
            <div className="card-body text-secondary">

                        <div className="current-weather">
                        <Skycons
                            width='128'
                            height='128'
                            style={{
                            width: '128px',
                            height: '128px'
                        }}
                            color='white'
                            icon={icon}
                            autoplay={true}/>
                            </div>
                <h1>{props.mode === "F"
                    ?  Math.round(props.data.currently.apparentTemperature) + " °F"
                    : convert(props.data.currently.apparentTemperature) + " °C"}</h1>
                <div className="text-white">{props.data.currently.summary}</div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    data: state.data,
    mode: state.mode,
});

export default connect(mapStateToProps, null)(Current)
