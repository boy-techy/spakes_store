import React from 'react';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import teenGlasses from "../assets/Teen-Glasses-md.jpg";

export const SpecsCard = (props) => {
    let {cardData} = props;

    return(
        <Col xs={12} md={4} className="custom-card">
                <div>
                    <Link to={`/detail/${cardData._id}`}>
                        <img src={teenGlasses} alt="Card Image" className="img-thumbnail"/>
                    </Link>
                    <div className="specs-briefs">
                        <span>Name: {} </span>
                        <span>Model No: {cardData.modelNo} </span>
                        <span>Brand:  {cardData.brand}</span>
                        <span>Type: {cardData.type} </span>
                        <span>Gender: {cardData.gender} </span>
                        <p className="brief">
                            {cardData.desc}
                        </p>
                    </div>
                    <ul className="list-unstyled list-inline pull-right color-change-picker">
                        <li className="circle-bullet circle-bullet-green" />
                        <li className="circle-bullet circle-bullet-red" />
                        <li className="circle-bullet circle-bullet-black" />
                        <li className="circle-bullet circle-bullet-white" />
                    </ul>
                    <span className="pull-left">Price: {cardData.price}</span>
                </div>
        </Col>
    )
};