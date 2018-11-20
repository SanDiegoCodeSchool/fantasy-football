import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="fname" placeholder="First Name" />
                    <input type="text" name="lname" placeholder="Last Name" />
                    <input type="email" name="email" placeholder="E-mail" />
                    <button onclick="signupClickHandler(event)">Next</button>
                </form>
            </div>
        );
    };
};

export default Signup;