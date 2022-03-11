import React from "react";
// import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
import "./styles.css";
// import { Redirect } from 'react-router-dom';
import { getBundles } from '../../actions/getBundlesAction';
import { incrementCounter} from '../../actions/getCartAction';


class Bundles extends React.Component{

  state = {
    bundles: this.props.bundles.data,
    bubbles: this.props.bubbles.data,
    price: 0,
  }

  getBubble(item){
    var result = this.state.bubbles.find(function(bubble) {
        return bubble.id == item;
      });
    //   console.log(result);
      return result;
  }

  addPrice(bubble){
    this.state.price += bubble.price;
  }

  addToCart(e, bundle){
    e.preventDefault();
    this.props.incrementCounter(1);
    console.log(this.props.counter);
    console.log("Adding to cart..");
    // Check if cart exists, otherwise create a new array for cart
    if(localStorage.getItem('cart') == null){
        localStorage.setItem('cart', '[]');
    }
    var prevData = JSON.parse(localStorage.getItem('cart'));
    var the_bundle = {"bundle" : bundle}
    prevData.push(the_bundle);
    localStorage.setItem('cart', JSON.stringify(prevData));
    console.log(localStorage.getItem('cart'));
  }

  render() {
    // const bubbles = useSelector(state => state.bubbles);
    // console.log("MY BUNDLES: ", this.state.bundles);
    console.log("MY Bubbles: ", this.state.bubbles);
    
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
      </div>


    )

  }
}
// const mapStateToProps = (state) => {
//   return {bundle: state.bundle}
// }

// const mapDispatchToProps = {
//   getbundle,
//   deletebundle
// }

// export default connect(mapStateToProps, mapDispatchToProps) (bundle);

const mapStateToProps = (state) => {
  return {bundles: state.bundles, bubbles: state.bubbles, counter: state.counter}
}

const mapDispatchToProps = {
    getBundles,
    incrementCounter
}

export default connect(mapStateToProps, mapDispatchToProps) (Bundles);