import React from 'react';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import teenGlasses from "../assets/Teen-Glasses-md.jpg";

export const SpecsCard = ({data}) => {

    return(
        <Col xs={12} md={4} className="custom-card">
                <div>
                    <Link to={"/detail/1"}>
                        <img src={teenGlasses} alt="Card Image" className="img-thumbnail"/>
                    </Link>
                    <div className="specs-briefs">
                        <span>Name:  </span>
                        <span>Model No:  </span>
                        <span>Brand:  </span>
                        <span>Type:  </span>
                        <span>Gender:  </span>
                        <p className="brief">
                            Some Little brief Description
                        </p>
                    </div>
                    <ul className="list-unstyled list-inline pull-right color-change-picker">
                        <li className="circle-bullet circle-bullet-green" />
                        <li className="circle-bullet circle-bullet-red" />
                        <li className="circle-bullet circle-bullet-black" />
                        <li className="circle-bullet circle-bullet-white" />
                    </ul>
                    <span className="pull-left">Price: 2000</span>
                </div>
        </Col>
    )
};