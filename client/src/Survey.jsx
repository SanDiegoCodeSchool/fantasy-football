import React, { Component } from 'react';

class Survey extends Component {
    constructor(props){
        super(props);
        this.state = {
            league: "ncaa"
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }
    clickHandler(e) {
        e.preventDefault();
        fetch(`/api/leads/${this.props.match.params.id}`, {
            method: "PATCH",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
        })
        .then(response =>{
          response.json();
          window.location.assign("/#/offer");
        })
        .catch(err => console.log(err));
    }

    changeHandler(e) {
        const name = e.target.name;
        this.setState({league: e.target.value});
    }

    render() {
        return (
            <div>
                <form>
                    <h2>Which league do you want your picks for?</h2>
                    <select onChange={this.changeHandler} value={this.state.league} name="league" id="league">
                        <option value="ncaa">NCAA</option>
                        <option value="nfl">NFL</option>
                    </select>
                    <button onClick={this.clickHandler}>Next</button>
                </form>
                <p>Page 3/4</p>
            </div>
        );
    };
};

export default Survey;