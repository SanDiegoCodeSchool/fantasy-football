import React, { useState } from 'react';



const Signup = () => {
    function clickHandler(e) {
        e.preventDefault();
        fetch('/api/leads', {
            method: "POST", 
            body: JSON.stringify(formData), 
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

    function changeHandler(e) {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({
            ...formData, [name]: value
        });
        console.log(formData);
    }

    const [formData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });
    
    return (
        <div>
            <form>
                <input onChange={changeHandler} type="text" name="firstName" placeholder="First Name" />
                <input onChange={changeHandler} type="text" name="lastName" placeholder="Last Name" />
                <input onChange={changeHandler} type="email" name="email" placeholder="E-mail" />
                <button onClick={clickHandler}>Next</button>
            </form>
            <p>Page 2/3</p>
        </div>
    )
};

export default Signup;
