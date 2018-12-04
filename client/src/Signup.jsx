import React, { Component } from 'react';

class Signup extends Component {
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
        };
        this.clickHandler = this.clickHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    clickHandler(e) {
        e.preventDefault();
        fetch('/api/leads', {
            method: "POST", 
            body: JSON.stringify(this.state), 
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
        })
        .then(response =>{
            response.json()
            .then(res => {
                window.location.assign(`/#/survey/${res.id}`);
            })
            .catch(errRes => console.log(errRes));
        })
        .catch(err => console.log(err));
    }
    changeHandler(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <form>
                    <input onChange={this.changeHandler} type="text" name="firstName" placeholder="First Name" />
                    <input onChange={this.changeHandler} type="text" name="lastName" placeholder="Last Name" />
                    <input onChange={this.changeHandler} type="email" name="email" placeholder="E-mail" />
                    <button onClick={this.clickHandler}>Next</button>
                </form>
                <p>Page 2/3</p>
            </div>
        );
    };
};

export default Signup;
