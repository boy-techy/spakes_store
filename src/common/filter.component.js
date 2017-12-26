import React from 'react';

export const Filter = () => {

    const filters = {
        category: [{id: 'man',value: 'man', label: 'Man'},
                    {id: 'woman',value: 'woman', label: 'Woman'},
                    {id: 'child',value: 'child', label: 'Child'}],

        frameType: [{id: 'full_rim',value: 'full_rim', label: 'Full Rim'},
            {id: 'half_rim',value: 'half_rim', label: 'Half Rim'},
            {id: 'rimless',value: 'rimless', label: 'Rimless'}],

        frameSize: [{id: 'medium',value: 'medium', label: 'Medium'},
            {id: 'small',value: 'small', label: 'Small'},
            {id: 'large',value: 'large', label: 'Large'}],

        frameShape: [{id: 'rectangle',value: 'rectangle', label: 'Rectangle'},
            {id: 'wayfarer',value: 'wayfarer', label: 'Wayfarer'},
            {id: 'cat_eye',value: 'cat_eye', label: 'Cat Eye'},
            {id: 'round',value: 'round', label: 'Round'},
            {id: 'aviator',value: 'aviator', label: 'Aviator'},
            {id: 'club_master',value: 'club_master', label: 'Club Master'},
            {id: 'oval',value: 'oval', label: 'Oval'}]

    };

    return(
        <div>
            <div>
                <div className="tab blue">
                    <input id="tab-four" type="radio" name="tabs2" />
                    <label htmlFor="tab-four">Category</label>
                    <ul className="list-unstyled tab-content">
                        {
                            filters.category.map((categoryFilter)=>{
                                return (<li>
                                    <input type="checkbox" id={categoryFilter.id} name={categoryFilter.id} value={categoryFilter.value} />
                                    <label htmlFor={categoryFilter.id}>{categoryFilter.label}</label>
                                </li>)
                            })
                        }
                    </ul>
                </div>
            </div>

            <div>
                <span>Frame Type:</span>
                <ul className="list-unstyled">
                    {
                        filters.frameType.map((categoryFilter)=>{
                            return (<li>
                                <input type="checkbox" id={categoryFilter.id} name={categoryFilter.id} value={categoryFilter.value} />
                                <label htmlFor={categoryFilter.id}>{categoryFilter.label}</label>
                            </li>)
                        })
                    }
                </ul>
            </div>

            <div>
                <div className="tab blue">
                    <input id="tab-four" type="radio" name="tabs2" />
                    <label htmlFor="tab-four">Frame Size:</label>
                    <ul className="list-unstyled tab-content">
                        {
                            filters.frameSize.map((categoryFilter)=>{
                                return (<li>
                                    <input type="checkbox" id={categoryFilter.id} name={categoryFilter.id} value={categoryFilter.value} />
                                    <label htmlFor={categoryFilter.id}>{categoryFilter.label}</label>
                                </li>)
                            })
                        }
                    </ul>
                </div>
            </div>

            <div>
                <div className="tab blue">
                    <input id="tab-four" type="radio" name="tabs2" />
                        <label htmlFor="tab-four">Frame Shape:</label>
                        <ul className="list-unstyled tab-content">
                            {
                                filters.frameShape.map((categoryFilter)=>{
                                    return (<li>
                                        <input type="checkbox" id={categoryFilter.id} name={categoryFilter.id} value={categoryFilter.value} />
                                        <label htmlFor={categoryFilter.id}>{categoryFilter.label}</label>
                                    </li>)
                                })
                            }
                        </ul>
                </div>
            </div>
        </div>
    )
};