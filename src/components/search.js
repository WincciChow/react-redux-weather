import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions'

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: "",
            prev: "",
            current: false,
        }
    }

    componentDidMount = () => {
        this.props.fetchWeather(`Toronto, ON, CA`)
    }

    handleChange = (e) => {
        this.setState({input: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if(this.state.input !== this.state.prev) {
            this.props.fetchWeather(this.state.input)
            this.setState({current: false, prev: this.state.input})
        }
    }


    render() {
        return (
            <div className="input-container justify-content-center mt-5">
                <form className="my-3 w-50" onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <input
                            className="form-control  border-primary"
                            onChange={this.handleChange}
                            value={this.state.input}
                            placeholder="Enter a City"
                            required />
                        <div className="input-group-append">
                            <button className="btn btn-success" type="submit">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    fetchWeather: (location) => dispatch(actions.fetchWeather(location))
})

export default connect(null, mapDispatchToProps)(Search)
