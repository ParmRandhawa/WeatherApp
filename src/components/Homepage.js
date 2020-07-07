import React from 'react';
import axios from 'axios';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            weather: 0,
            isShow: false,
            isError: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({location: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        
        axios.get('http://api.weatherstack.com/current?access_key=42dca120fa4cf54f5fe3220a31dad087&query=' + this.state.location)
        .then(res => {
            this.setState({weather: res.data['current']['temperature']})
            this.setState({isShow: true})
        }).catch((error) => {
            console.log(error);
            this.setState({isError: true})
        });
    }

    render() {
        return(
            <React.Fragment>
                <img src={require('../assets/weather-icon.png')} width='100' height='100' />
                <br />
                <input
                    placeholder="Enter Location"
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}> 
                    Submit
                </button>
                {this.state.isShow ? <p>{this.state.weather} Degrees</p> : null}
                {this.state.isError ? <p>Location Doesn't Exist</p> : null}
            </React.Fragment>  
        );
    }
}

export default Homepage;