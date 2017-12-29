import React,{Component} from 'react';
import '../../assets/components/homePage/homepage.css';
import Search from '../../common/search.Component';
import {connect} from 'react-redux';
import {searchData} from "../../actions/searchData";

class HomePage extends Component {

    render(){
        return(
            <div className="home-page-container">
                <div className="tint-wrap"/>
                <Search {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (reduxState)=> ({

});

const mapDispatchToProps = (dispatch)=> ({
    searchData: (data)=> dispatch(searchData(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);