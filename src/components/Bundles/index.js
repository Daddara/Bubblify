import React from "react";
import {connect} from "react-redux";
import "./styles.css";
import { getBundles } from '../../actions/getBundlesAction';

class Bundles extends React.Component{

  state = {
    bundles: this.props.bundles.data,
    bubbles: this.props.bubbles.data,
    price: 0,
  }

    getBubble(item){
        var result = this.state.bubbles.find(function(bubble) {
            return bubble.id === item;
        });
        return result;
    }

    addPrice(bubble){
        this.state.price += bubble.price;
    }

    addToCart(e, bundle){
        e.preventDefault();
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

    console.log("MY Bubbles: ", this.state.bubbles);
    
    return(
        <div className="bundlegod">
        <h1 className="h1Bundles">Bundle Packs</h1>
        <div>
        <div className="bundles">
            {this.state.bundles &&
            this.state.bundles.map((bundle, index) => {
                // id, name, items
                this.state.price = 0;
                bundle.bubbleLis = [];
                
                return (
                <div className="bundle" key={bundle.id}>  
                <h2 className="bundleName">{bundle.name}</h2>
                <div className="nextbundlediv">
                    {bundle.items && bundle.items.map((item, index) => {
                
                let bubble = this.getBubble(item);
                this.addPrice(bubble);
                bundle.bubbleLis.push(bubble);
                if(index === (bundle.items.length - 1)){
                    bundle.price = this.state.price;
                }
                return (
                    <div className="bundle-bubble" key={bubble.id}>
                        <div className="imgdiv">
                            <img src={bubble.image} className="bundlebubbleimg" alt={bubble.name}/>
                        </div>
                    <h2 className="bundleh2">{bubble.name}</h2>
                    </div> 
                );
                })}
                    </div>
                    <div className="pricecart">
                    <p className="addedprice">Price: {this.state.price} kr</p>

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

const mapStateToProps = (state) => {
  return {bundles: state.bundles, bubbles: state.bubbles}
}

const mapDispatchToProps = {
    getBundles,
}

export default connect(mapStateToProps, mapDispatchToProps) (Bundles);