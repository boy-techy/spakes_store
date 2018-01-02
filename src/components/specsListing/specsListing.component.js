import React, { Component } from 'react';
import {SpecsCard} from "../../common/specsCard";
import {Filter} from "../../common/filter.component";
import Search from "../../common/search.Component";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {specsListingAsync} from "../../actions/async/specsListing.async";
import Loader from "../../common/loader.component";

class SpecsListing extends Component {

    componentDidMount(){
        this.props.fetchList();
    }

    searchForData = (searchKey) => {
        console.log("Search For Data: ",searchKey);
    };

    render(){
        let {listData} = this.props;
        let cardCollection = listData.map((cardData)=>{
            return(
                <SpecsCard key={cardData._id} cardData={cardData} />
            )
        });

        return(
            <div className="listing-container row">
                <aside className="col-md-2 filter-section">
                    <Filter />
                </aside>
                <section className="col-md-10 listing-section">
                    <Search {...this.props} searchForData={this.searchForData}/>
                    <div>
                        { cardCollection.length ? cardCollection : <Loader /> }
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore)=> ({
    listData: reduxStore.listReducer.listData
});


const mapDispatchToProps = (dispatch)=> ({
    fetchList: bindActionCreators(specsListingAsync,dispatch)
});


export default connect(mapStateToProps,mapDispatchToProps)(SpecsListing)