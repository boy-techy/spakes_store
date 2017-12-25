import React,{Component} from 'react';
import '../../assets/components/homePage/homepage.css';
import Search from '../../common/search.Component';

export class HomePage extends Component {

    constructor(){
        super();
    }

    render(){
        return(
            <div className="home-page-container">
                <div className="tint-wrap"/>
                <Search />
            </div>
        )
    }
}

export default HomePage;