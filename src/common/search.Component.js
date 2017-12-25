import React, {Component} from 'react';

export default class Search extends Component {

    render(){
        return(
            <div className="search-component-container">
                <input type="text" placeholder="Please Enter Model-Id"/>
                <button>Search</button>
            </div>
        )
    }
}