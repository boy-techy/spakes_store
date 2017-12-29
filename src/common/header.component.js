import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {

    render(){
        return(
            <div className="header-container">
                <div className="site-logo pull-left">
                    <Link to="/">
                        Specs Store
                    </Link>
                </div>
                <div className="utility-icons pull-right">
                    <em title="Login"><i className="fa fa-user-circle" aria-hidden="true"/></em>
                    <em title="Track Order"><i className="fa fa-truck" aria-hidden="true" /></em>
                    <em title="WishList"><i className="fa fa-heart" aria-hidden="true" /></em>
                    <em title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></em>
                </div>
            </div>
        )
    }
}

export default Header;