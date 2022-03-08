import React from "react";
// import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
import "./styles.css";
// import { Redirect } from 'react-router-dom';
import { getBundles } from '../../actions/getBundlesAction';


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
    console.log("Adding to cart..", e);
    console.log(bundle);
    if(localStorage.getItem('data') == null){
        localStorage.setItem('data', '[]');
    }
    var prevData = JSON.parse(localStorage.getItem('data'));
    prevData.push(bundle);
    localStorage.setItem('data', JSON.stringify(prevData));
    console.log(localStorage.getItem('data'));
  }

  render() {
    // const bubbles = useSelector(state => state.bubbles);
    // console.log("MY BUNDLES: ", this.state.bundles);
    console.log("MY Bubbles: ", this.state.bubbles);
    
    return(
        <div className="bundlegod">
        <h1>Bundles</h1>
  
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
              return (
                <div className="bundle" key={bundle.id}>
                    {/* <div className="imgdiv">
                      <img src={bundle.img} className="bundleimage"/>
                    </div> */}
                  
                    
                <h2>{bundle.name}</h2>
                <div className="nextbundlediv">
                    {bundle.items &&
                bundle.items.map((item, index) => {
                // id, name, description, img
                // get bubble here with the id from key! Stupid key btw
                
                let bubble = this.getBubble(item);
                this.addPrice(bubble);
                if(index == bundle.items.length -1){
                    this.state.bundles[index].price = this.state.price;
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
  return {bundles: state.bundles, bubbles: state.bubbles}
}

const mapDispatchToProps = {
    getBundles,
}

export default connect(mapStateToProps, mapDispatchToProps) (Bundles);