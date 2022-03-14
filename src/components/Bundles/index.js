import React from "react";
import {connect} from "react-redux";
import "./styles.css";
import { Redirect } from 'react-router-dom';
import propTypes, { bool, shape } from 'prop-types';
import { getBundles } from '../../actions/getBundlesAction';
import { incrementCounter} from '../../actions/getCartAction';


class Bundles extends React.Component{

  state = {
    bundles: this.props.bundles.data,
    bubbles: this.props.bubbles.data,
    price: 0,
    redirect: false,
    popup: false
  }

  getBubble(item){
    var result = this.state.bubbles.find(function(bubble) {
        return bubble.id == item;
      });
      return result;
  }

  addPrice(bubble){
    this.state.price += bubble.price;
  }

  addToCart(e, bundle){
    e.preventDefault();
    this.props.incrementCounter(1);
    // Check if cart exists, otherwise create a new array for cart
    if(localStorage.getItem('cart') == null){
        localStorage.setItem('cart', '[]');
    }
    var prevData = JSON.parse(localStorage.getItem('cart'));
    bundle["counter"] = 1;
    var the_bundle = {"bundle" : bundle};
    var foundSame = false;
    for (let i = 0; i < prevData.length; i++) {
      if(prevData[i].hasOwnProperty('bundle')){
        if(bundle.id === prevData[i].bundle.id){
          prevData[i].bundle.counter++;
          prevData[i].bundle.price += bundle.price;
          foundSame = true;
        }
      }
    }
    if(!foundSame){
      prevData.push(the_bundle);
    }
    
    localStorage.setItem('cart', JSON.stringify(prevData));

    if(this.state.popup === false){
      if (window.confirm("Would you like to proceed to checkout?") == true) {
          // text = "You pressed OK!";
          this.setState({ redirect: true });
      }
      this.setState({ popup: true });
  }
  }

  render() {
    console.log(this.props);
        return(
        <div className="bundlegod">
        <h1 className="h1Bundles">Bundles</h1>
  
        {/* Fetch data from API */}
  
        <div>
          {/* Button to fetch data /*}
        </div>
  
        {/* Display data from API */}
        <div className="bundles">
          {this.state.bundles &&
            this.state.bundles.map((bundle, index) => {
              // id, name, items
              this.state.price = 0;
              bundle.bubbleLis = [];
              return (
                <div className="bundle" key={bundle.id}>
                    {/* <div className="imgdiv">
                      <img src={bundle.img} className="bundleimage"/>
                    </div> */}
                  
                    
                <h2 className="bundleName">{bundle.name}</h2>
                <div className="nextbundlediv">
                    {bundle.items &&
                bundle.items.map((item, index) => {
                // id, name, description, img
                // get bubble here with the id from key! Stupid key btw
                
                let bubble = this.getBubble(item);
                this.addPrice(bubble);
                bundle.bubbleLis.push(bubble);
                if(index === (bundle.items.length - 1)){
                    bundle.price = this.state.price;
                }
                return (
                    <div className="bundlebubble" key={bubble.id}>
                        <div className="imgdiv">
                        <img src={bubble.image} className="bundlebubbleimg"/>
                        </div>
                    <div className="textbox">
                        
                    <h2>{bubble.name}</h2>
                        
                    </div>
                    </div>
                );
                
                })}
                  </div>
                  {/* Do stuff here, add div to make sexy, colums */}
                  <div className="pricecart">
                        <p className="addedprice">Price: {this.state.price}</p>

                    <button onClick={ e => this.addToCart(e, bundle)} className="cartbtn">
                        <p>Add to cart</p>
                    </button>
                
                </div>
                 </div>
              );
            })}
            
        </div>
        
      </div>
      { this.state.redirect ? (<Redirect exact push to="/cart/checkout"/>) : null }
      </div>


    )

  }
}
Bundles.propTypes = {
  // Bundle object
  bundles: propTypes.shape({
    // Array of all the bundles from api
    data: propTypes.arrayOf(propTypes.shape({
      // Bundle id
        id: propTypes.number.isRequired,
        // Name of the bundle
        name: propTypes.string.isRequired,
        // Array of bubble id's
        items: propTypes.array.isRequired,
    })
    ).isRequired,
  }).isRequired,
  // Bubble object, with data as array of all bundles
  bubbles: propTypes.shape({
    // Array of all the bubbles from api
    data: propTypes.arrayOf(propTypes.shape({
        // Bubble id
        id: propTypes.number.isRequired,
        // Name of the bubb;e
        name: propTypes.string.isRequired,
        // Price of the bubble
        price: propTypes.number.isRequired,
        // A description of the bubble
        description: propTypes.string.isRequired
    })
    ).isRequired,
  }).isRequired,
  // Counter for the cart, when add to cart is clicked, increment
  counter: propTypes.number.isRequired
}

const mapStateToProps = (state) => {
  return {bundles: state.bundles, bubbles: state.bubbles, counter: state.counter}
}

const mapDispatchToProps = {
    getBundles,
    incrementCounter
}

export default connect(mapStateToProps, mapDispatchToProps) (Bundles);