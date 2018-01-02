import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import first from '../../assets/1.jpg'
import second from '../../assets/2.jpg'
import third from '../../assets/3.jpg'
import {SpecsCard} from "../../common/specsCard";
import Slider from  'react-slick';
import {getSuggestionList} from "../../actions/async/suggestionList.async";

class SpecsDetail extends Component {

    componentDidMount(){
        this.props.fetchSuggestions();
    }


    render() {
        let {suggestionList} = this.props;
        let imageUrls = [{src: first, alt: "First Image"},
            {src: second, alt: "Second Image"},
            {src: third, alt: "Third Image"}];

        let sliderSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            className: "suggestion-slider"
        };

        let cardThumbnails = imageUrls.map((image,index)=>{
            return (
                <div key={index} className="card-thumbnail">
                    <img src={image.src} alt={image.alt} className="img-thumbnail"/>
                </div>
            )
        });

        let suggestionsCollection = suggestionList.map((cardData)=> {
           return (<div className="col-md-12" key={cardData._id}>
               <SpecsCard cardData={cardData}/>
           </div>);
        });

        return (

            <div className="detail-container">
                <section className="col-md-4 left-section">
                    <div className="product-container">
                        <div className="carousel-container">
                            {cardThumbnails}
                            {cardThumbnails}
                        </div>

                        <div className="carousel-image-container">
                            <div className="image-container">
                                <img src={first} alt="First Image"/>
                            </div>
                            <div className="product-offer">On Offer</div>
                            <div className="wishList-btn">
                                <i className="fa fa-heart" aria-hidden="true"/>
                            </div>
                        </div>
                    </div>

                    <div className="cart-buttons">
                        <button className="btn add-cart-btn">
                            <i className="fa fa-cart-plus" aria-hidden="true"/>Add To Cart
                        </button>
                        <button className="btn buy-now-btn">
                            <i className="fa fa-credit-card" aria-hidden="true"/>Buy Now
                        </button>
                    </div>

                </section>

                <section className="col-md-8 right-section">
                    <p className="product-heading">M101 Rounded Shaped Specs</p>
                    <p className="head-rating-review">
                        <span className="rating-chip">4.1
                            <i className="fa fa-star" aria-hidden="true"/>
                        </span>
                        <span>1,011 Ratings & 219 Reviews</span>
                    </p>
                    <p className="price">
                        <span><i className="fa fa-inr" aria-hidden="true"/>999</span>
                        <del><i className="fa fa-inr" aria-hidden="true"/>1500</del>
                        <span className="discount">65% Off</span>
                    </p>

                    <div className="power-selection-section col-md-12">
                        <div className="col-md-4">
                            <div className="power-type">
                                <span>Select Power Type:</span>
                                <ul className="list-unstyled">
                                    <li><input type="radio" id="singleVision" value="Single" name="visionType" defaultChecked/>
                                        <label htmlFor="singleVision"><span><span /></span>Single Vision</label>
                                    </li>
                                    <li><input type="radio" id="bifocalVision" value="BiFocal" name="visionType"/>
                                        <label htmlFor="bifocalVision"><span><span /></span>Bifocal Vision</label>
                                    </li>
                                    <li><input type="radio" id="zeroVision" value="Zero" name="visionType"/>
                                        <label htmlFor="zeroVision"><span><span /></span>Zero Power</label>
                                    </li>
                                </ul>
                            </div>

                            <div className="power-type">
                                <span>Select Lense Type:</span>
                                <ul className="list-unstyled">
                                    <li><input type="radio" id="antiGlare" value="AntiGlare" name="lenseType" defaultChecked/>
                                        <label htmlFor="antiGlare"><span><span /></span>Anti Glare</label>
                                    </li>
                                    <li><input type="radio" id="uvProtection" value="U/V Protection" name="lenseType"/>
                                        <label htmlFor="uvProtection"><span><span /></span>U/V Protection</label>
                                    </li>
                                    <li><input type="radio" id="blueCut" value="Blue-cut" name="lenseType"/>
                                        <label htmlFor="blueCut"><span><span /></span>Blue-Cut</label>
                                    </li>
                                </ul>
                            </div>
                            <div className="cart-buttons">
                                <button className="btn buy-now-btn">
                                    <i className="fa fa-credit-card" aria-hidden="true"/>Buy Now
                                </button>
                            </div>
                        </div>

                        <div className="power-details col-md-8">
                            <table className="table table-bordered">
                                <tbody>
                                <tr>
                                    <td colSpan={2} />
                                    <td>SPHERE</td>
                                    <td>CYLINDER</td>
                                    <td>AXIS</td>
                                    <td>PRISM</td>
                                    <td>BASE</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>DISTANCE</td>
                                    <td>OD</td>
                                    <td><input type="text" placeholder="+/- 1"/></td>
                                    <td><input type="text" placeholder="+/- 0.60"/></td>
                                    <td><input type="text" placeholder="120"/></td>
                                    <td><input type="text" placeholder="0.5"/></td>
                                    <td>down</td>
                                </tr>
                                <tr>
                                    <td>OS</td>
                                    <td><input type="text" placeholder="+/- 1"/></td>
                                    <td><input type="text" placeholder="+/- 0.60"/></td>
                                    <td><input type="text" placeholder="120"/></td>
                                    <td><input type="text" placeholder="0.5"/></td>
                                    <td>up</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>ADD</td>
                                    <td>OD</td>
                                    <td><input type="text" placeholder="+/- 2.0" /></td>
                                    <td colSpan={4} rowSpan={2}>
                                        <textarea type="text" placeholder="Additional Information"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>OD</td>
                                    <td><input type="text" placeholder="+/- 2.0" /></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="product-desc">
                        <span className="caption">Product Description</span>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </p>
                    </div>

                    <div className="col-md-12 suggestion-slider-section">
                        <p>You may also be interested in </p>
                        <Slider {...sliderSettings}>
                            {suggestionsCollection}
                        </Slider>
                    </div>

                    <div className="reviews-ratings">
                        Reviews & Ratings
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    suggestionList: reduxStore.suggestionListingReducer.listData
});

const mapDispatchToProps = (dispatch) => ({
    fetchSuggestions: bindActionCreators(getSuggestionList, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(SpecsDetail);