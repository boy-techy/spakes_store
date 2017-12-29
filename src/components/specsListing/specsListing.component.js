import React, { Component } from 'react';
import {SpecsCard} from "../../common/specsCard";
import {Filter} from "../../common/filter.component";
import Search from "../../common/search.Component";

export default class SpecsListing extends Component {

    constructor(props){
        super(props);
        console.log("Props are: ",props);
    }

    componentDidMount(){

    }

    searchForData = (searchKey) => {
        console.log("Search For Data: ",searchKey);
    };

    render(){
        return(
            <div className="listing-container row">
                <aside className="col-md-2 filter-section">
                    <Filter />
                </aside>
                <section className="col-md-10 listing-section">
                    <Search {...this.props} searchForData={this.searchForData}/>
                    <SpecsCard />
                    <SpecsCard />
                    <SpecsCard />
                    <SpecsCard />
                    <SpecsCard />
                    <SpecsCard />
                </section>
            </div>
        )
    }
}