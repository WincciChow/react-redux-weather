import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions';
import '../index.css';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {city: ''};
    }

    onInputChange(e){
        var city = e.target.value;
        this.setState({
            city
        });
    }

    onFormSubmit(e){
        e.preventDefault();
        this.props.fetchWeather(this.state.city);
        this.setState({
            city: '' ,
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.onFormSubmit(e)}>
                    <div className="ml-lg-5 mx-auto">
                            <input className="form-control-lg mt-5 pr-lg-5 ml-5"
                                onChange={event => this.onInputChange(event)}
                                value={this.state.city}
                                placeholder="Enter a Canadian City"
                            />

                            <button className="btn-lg btn-outline-success ml-2">Search</button>
                    </div>
                </form>
            </div>
        );
    }
}
function mapActionsToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapActionsToProps)(SearchBar);
