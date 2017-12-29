import React,{Component} from 'react';
import '../../assets/components/homePage/homepage.css';
import Search from '../../common/search.Component';

export class HomePage extends Component {

    render(){
        return(
            <div className="home-page-container">
                <div className="tint-wrap"/>
                <Search {...this.props}/>
            </div>
        )
    }
}

export default HomePage;