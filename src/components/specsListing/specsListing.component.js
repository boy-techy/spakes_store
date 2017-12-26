import React, { Component } from 'react';
import {SpecsCard} from "../../common/specsCard";
import {Filter} from "../../common/filter.component";
import Search from "../../common/search.Component";

export default class SpecsListing extends Component {

    render(){
        return(
            <div className="listing-container row">
                <aside className="col-md-2 filter-section">
                    <Filter />
                </aside>
                <section className="col-md-10 listing-section">
                    <Search />
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