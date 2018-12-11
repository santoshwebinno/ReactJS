import React from 'react';
import logo from '../../images/logo.png';  
import {NavLink} from "react-router-dom";
import client from '../../helpers/ShopifyClient';
import { LocalStorage } from '../../helpers/LocalStorage';
import Icon from "../../images/arrow";
import Searchinput from './search'; 
import {Link} from "react-router-dom"; 
import Search from "../../images/search";
import ShoppingBag from "../../images/ShoppingBag";
import Menu from "../../images/menu";
import Remove from "../../images/close";
 
class Header extends React.Component {
	constructor() {
    super();
    this.lc = new LocalStorage();

    this.state = { 
	    isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
	  inverted: true,
      shop: {},
	    displayMenu: false,
      displaySearch: false
    };
	this.toggleInverted = this.toggleInverted.bind(this);
	this.showSearch = this.showSearch.bind(this);
	this.hideSearch = this.hideSearch.bind(this);
	this.showDropdownMenu = this.showDropdownMenu.bind(this);
	this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
	
	 
  }
  
  toggleInverted() {
    this.setState({inverted: !this.state.inverted});
  }
  
  showDropdownMenu(event) {
    event.preventDefault();
	this.setState({inverted: true});
    this.setState({ displayMenu: true }); 
  }
  
  hideDropdownMenu() {
    this.setState({ displayMenu: false }); 
  }
  
  hideSearch() {
    this.setState({ displaySearch: false }); 
  }
  showSearch(event) {
    this.setState({ displaySearch: true });
  }
  render() { 
    let collect = null;
    const collections = this.lc.getObject('collections');
    if(collections) {
      collect = collections.map((collection) => {
        return (
          <li key={collection.id} onClick={this.hideDropdownMenu}>
            <NavLink exact activeClassName="current" to={`/${collection.handle}`} ><span>{collection.title}</span><Icon width={30} /></NavLink>
          </li>
        );
      });
    }
    return (
    <header className="Apps__header">
  <div className="container-fluid">
        <div className="row headder">
      <div className="col-4 header_left">
            <div className="nav-side-menu">
          <div className="toggle-button" onClick={this.showDropdownMenu}><Menu width={60}  /></div> 
          { this.state.displayMenu ? (
          <div className="menu-list" >
          <div className={this.state.inverted ? 'menu-list-box toggle' : 'menu-list-box'}>
                <div className="menu_list_cnt">
				{/*<div className="close_menu" onClick={this.hideDropdownMenu}><Remove width={30}  /></div>*/}
              <ul className="menu-content">
                {collect}
                  { /*  <li>
                  <Link to="/SaleArt" >
                  Sale
                  </Link>
                </li>
                    <li>
                  <Link to="/SaleArt" >
                  Art & More
                  </Link>
                </li>
                    <li>
                  <Link to="/Best Selling" >
                  Best Selling
                  </Link>
                </li>
                    <li>
                  <Link to="/Best Selling" >
                  All Products
                  </Link>
                </li>*/ }
                  </ul>
              <ul className="menu-page-content">
                    <li>
                  <Link to="/AboutUs" >
                  About Us
                  </Link>
                </li>
                    <li>
                  <Link to="/FindmyOrder" >
                  Find my Order
                  </Link>
                </li>
                    <li>
                  <Link to="/OurPolicies" >
                  Our Policies
                  </Link>
                  </li> 
                  </ul>
				  </div>
              <div className="cruncy_option">
                    <select>
                  <option>United States (USD) </option>
                  <option>India (INR) </option>
                </select>
                  </div>
            </div>
              </div>
          ):
          (
          null
          )
          } </div>
          </div>
      <div className="col-4 header_center">
            <NavLink to="/" exact={true} >
            <img src={logo} alt="" />
            </NavLink>
          </div>
      <div className="col-4 header_right">
            <ul>
          <li>
                <div className="search_c" onClick={this.showSearch}><Search width={40}  /></div>
                { this.state.displaySearch ? (
                <div className="light_search_box_cnt">
              <div className="light_search_box"><Search width={30} />
			  <Searchinput />
                    <div className="close_search" onClick={this.hideSearch}><Remove width={20}  /></div>
                  </div>
            </div>
                ):
                (
                null
                )
                } </li>
          <li> {!this.state.isCartOpen &&
                <div className="cart_icon" onClick={()=> this.props.openCartSlide(true)}> <ShoppingBag width={40}  />{(this.props.cartCount > 0) ? <span className="cartCount">({this.props.cartCount})</span> : null }</div>
                } </li>
        </ul>
          </div>
    </div>
      </div>
</header>
);
  }
}
 
export default Header; 