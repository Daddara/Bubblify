import React from "react";
import "./styles.css";
import {connect} from "react-redux";
import { incrementCounter } from '../../actions/getCartAction';

class BubbleDetails extends React.Component{
    
    state = {
        bubble: this.props.location.bubble
    };

    addToCart(e, bubble){
        e.preventDefault();
        this.props.incrementCounter(1);
        // Check if cart exists, otherwise create a new array for cart
        if(localStorage.getItem('cart') == null){
            localStorage.setItem('cart', '[]');
        }
        var prevData = JSON.parse(localStorage.getItem('cart'));
        var the_bubble = {"bubble" : bubble}
        prevData.push(the_bubble);
        localStorage.setItem('cart', JSON.stringify(prevData));
    }
    
    render(){
        const bubble = this.props.location.bubble
        return (
            <div className = "Bubble">
                <div key={bubble.id} className="Details">
                    <div>
                        <img className="Img" src={bubble.image} alt={bubble.name} />
                    </div>
                    <div>
                        <div className="Title">
                            <h2>{bubble.name}</h2>
                        </div>
                    <div className="DetailBox">
                        <p>{bubble.description}</p>
                        <p> Price: {bubble.price} kr</p>
                    </div>
                        <button className="CartButton" onClick={e => this.addToCart(e, bubble)}>Add to cart</button>                
                    </div>
                </div>
            </div>
        )      
    }}

    const mapStateToProps = (state) => {
        return {counter: state.counter}
      }
      const mapDispatchToProps = {
        incrementCounter
    }

export default connect(mapStateToProps, mapDispatchToProps ) (BubbleDetails);