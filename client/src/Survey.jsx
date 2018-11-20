import React, { Component } from 'react';

class Survey extends Component {
    render() {
        return (
            <div>
                <form>
                    <h2>Which league do you want your picks for?</h2>
                    <select name="league" id="league">
                        <option value="ncaa">NCAA</option>
                        <option value="nfl">NFL</option>
                    </select>
                    <button>Next</button>
                </form>
            </div>
        );
    };
};

export default Survey;