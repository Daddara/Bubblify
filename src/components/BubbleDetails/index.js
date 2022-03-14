import React from "react";
import "./styles.css";
import propTypes from 'prop-types';
import {connect} from "react-redux";
import { incrementCounter } from '../../actions/getCartAction';
import { Redirect } from 'react-router-dom';

class BubbleDetails extends React.Component{
    
    state = {
        bubble: this.props.location.bubble,
        redirect: false,
        popup: false
    };

    addToCart(e, bubble){
        e.preventDefault();
        this.props.incrementCounter(1);
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

        if(this.state.popup === false){
            if (window.confirm("Would you like to proceed to checkout?") == true) {
                // text = "You pressed OK!";
                this.setState({ redirect: true });
            }
            this.setState({ popup: true });
        }
    }
    
    render(){
        const bubble = this.props.location.bubble;
        console.log(this.props)
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
                 { this.state.redirect ? (<Redirect exact push to="/cart/checkout"/>) : null }
            </div>
        )      
    }}

    BubbleDetails.propTypes = {
        // Bubble object, with data as array of all bundles
    location: propTypes.shape({
        // Array of all the bubbles from api
        bubble: propTypes.shape({
            // Bubble id
            id: propTypes.number.isRequired,
            // Name of the bubb;e
            name: propTypes.string.isRequired,
            // Price of the bubble
            price: propTypes.number.isRequired,
            // A description of the bubble
            description: propTypes.string.isRequired
        }).isRequired,
      }).isRequired,
    }


    const mapStateToProps = (state) => {
        return {counter: state.counter}
      }
      const mapDispatchToProps = {
        incrementCounter
    }

export default connect(mapStateToProps, mapDispatchToProps ) (BubbleDetails);
