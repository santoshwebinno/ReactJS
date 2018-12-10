import React from 'react'
import ProductImg1 from '../../images/product/product-image-1.jpg';
import Product from '../Product';
import {Link} from "react-router-dom";
import { LocalStorage } from '../../helpers/LocalStorage';
 

class Collection extends React.Component {
  constructor(props) {
    super(props);
		this.lc = new LocalStorage()
    this.state = {
      items: [],
      visible: 8,
			error: false,
			name: ''
    };

    this.loadMore = this.loadMore.bind(this);
 }
  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 4};
    });
	}
	
	componentWillReceiveProps(nextProps) {
		const handle = nextProps.match.params.collection;
		this.setItems(handle)
	}

	componentWillMount() {
		this.setItems(this.props.collectionId);
	}

	setItems(handle) {
		window.scrollTo(0, 0)
		console.info('Collectionm title: ^', handle)
		const lcCollections = this.lc.getObject('collections');
		console.info('ls collection :::', lcCollections)
    if(lcCollections) {
			const collection = lcCollections.find( collect => collect.handle === handle );
			if(collection)
				this.setState({items: collection.products, name: collection.title})
		}
  }
 
 render() {
	    
    return (
      <section className="Collection">
	  
       <div className="container-fluid">
		<div className="row">
			<div className="col-sm-12">
				<div className="page_title">
					<h2>{this.state.name}</h2>
					<p>{this.state.items.length} Items</p>
				</div>
			</div>
			</div>
		<div className="row">
		<div className="col-sm-3">
			<div className="filter_nav">
				<h2>Filters</h2>
				<ul>
					<li onClick={this.toggleList}><span>Size</span> <i className="fas fa-plus plus"><i className="fas fa-minus minus"></i></i>
					<ul className="nested_menu">
						<li><span>sm</span>  </li>
						<li><span>xl</span>  </li>
						<li><span>xxl</span>  </li>
					</ul>
					</li>
					<li><span>Category</span> <i className="fas fa-plus plus"><i className="fas fa-minus minus"></i></i>
					<ul>
						<li><span>Art & More</span>  </li>
						<li><span>Mens</span>  </li>
						<li><span>Women</span>  </li>
					</ul>
				</li>
					<li><span>Brand</span> <i className="fas fa-plus plus"><i className="fas fa-minus minus"></i></i>
					 <ul>
						<li><span>sm</span>  </li>
						<li><span>xl</span>  </li>
						<li><span>xxl</span>  </li>
					</ul>
				</li>
					<li><span>Color</span> <i className="fas fa-plus plus"><i className="fas fa-minus minus"></i></i>
					 <ul>
						<li><span>sm</span>  </li>
						<li><span>xl</span>  </li>
						<li><span>xxl</span>  </li>
					</ul>
				</li>
					<li><span>Price</span> <i className="fas fa-plus plus"><i className="fas fa-minus minus"></i></i>
					<ul>
					<li><span>$10  to  $100</span>  </li>
					<li><span>$100  to  $1000</span>  </li> 
				</ul>
				</li>
					<li><span>Short By</span> <i className="fas fa-plus plus"><i className="fas fa-minus minus"></i></i>
					<ul>
					<li><span>sm</span>  </li>
					<li><span>xl</span>  </li>
					<li><span>xxl</span>  </li>
				</ul>
				</li> 
				</ul>
			</div>
		</div>
	 
<div className="col-sm-9 coll_product__box">
        <div className="tiles" aria-live="polite">
          {this.state.items.slice(0, this.state.visible).map((item, index) => {
              return ( 
					<Product
						addVariantToCart={this.props.addVariantToCart}
						key={item.id.toString()}
						product={item}
					/> 
              );
            })}
          </div>
          {this.state.visible < this.state.items.length &&
			 <div className="viewmore_cnt">
				<p  onClick={this.loadMore}><span>View More</span><i className="fas fa-long-arrow-alt-down"></i></p>
			</div>
          }
		  </div>
		  </div>
		  </div>
        </section>
    );
  }
}

export default  Collection;