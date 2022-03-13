import React from "react";
import {connect} from "react-redux";
import { NavLink } from 'react-router-dom';
import { getBubbles } from "../../actions/getBubblesAction";
import { incrementCounter} from '../../actions/getCartAction';
import propTypes from 'prop-types';
import "./styles.css";


class Bubbles extends React.Component{
    
    state = {
        bubbles: this.props.bubbles.data
    }

    changeText = (text) => {
        this.setState({ text }); 
    } 
    
    addToCart(e, bubble){
        e.preventDefault();
        this.props.incrementCounter(1);
        console.log("Adding to cart..");
        console.log(bubble)
        // Check if cart exists, otherwise create a new array for cart
        if(localStorage.getItem('cart') == null){
            localStorage.setItem('cart', '[]');
        }
        var prevData = JSON.parse(localStorage.getItem('cart'));
        bubble["counter"] = 1;
        var the_bubble = {"bubble" : bubble};
        var foundSame = false;
        for (let i = 0; i < prevData.length; i++) {
            if(prevData[i].hasOwnProperty('bubble')){
            if(bubble.id === prevData[i].bubble.id){
            console.log("GOTTEM");
            prevData[i].bubble.counter++;
            prevData[i].bubble.price += bubble.price;
            foundSame = true;
            }
        }
        }
        if(!foundSame){
        prevData.push(the_bubble);
        }
        localStorage.setItem('cart', JSON.stringify(prevData));
        console.log(localStorage.getItem('cart'));
    }


    render() {
        return (
            <div className = "AllBubbles">
            {this.props.bubbles && this.props.bubbles.data.map((bubble) => {
                return (
                    <div key={bubble.id} className="Bubbles">
                            <img className="BubbleImg" src={bubble.image} alt={bubble.name} />
                        <div>
                            <h2 className="Heading">{bubble.name}</h2>
                        </div>
                        <div className ="Description">
                            <p>{bubble.description}</p>
                            <p className="BubblePrice">Price: {bubble.price} kr</p>
                        </div>
                        <div className="ButtonBox">
                            <NavLink className="Button" to={{pathname:`/bubbles/${bubble.id}`,bubble: bubble}} exact >More Info</NavLink>
                            <button className="Button" onClick={e => this.addToCart(e, bubble)}>Add to cart</button>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )}
}

        
const mapStateToProps = (state) => {
  return {bubbles: state.bubbles}
}

const mapDispatchToProps = {
  getBubbles,
  incrementCounter
}

Bubbles.propTypes = {

    bubble: propTypes.shape({
        name: propTypes.string,
        description: propTypes.string,
        price: propTypes.number,
        image: propTypes.string
    })
}

export default connect(mapStateToProps, mapDispatchToProps) (Bubbles);