import React, { useState } from 'react';

const Survey = (props) => {
    const [league, setLeague] = useState("ncaa");

    function clickHandler(e) {
        e.preventDefault();
        fetch(`/api/leads/${props.match.params.id}`, {
            method: "PATCH",
            body: JSON.stringify({league}),
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

   function changeHandler(e) {
        const name = e.target.name;
        setLeague(e.target.value);
    }

    return (
        <div>
            <form>
                <h2>Which league do you want your picks for?</h2>
                <select onChange={changeHandler} value={league} name="league" id="league">
                    <option value="ncaa">NCAA</option>
                    <option value="nfl">NFL</option>
                </select>
                <button onClick={clickHandler}>Next</button>
            </form>
            <p>Page 3/4</p>
        </div>
    );
};

export default Survey;