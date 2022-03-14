import React from "react";
import "./styles.css";
import propTypes from 'prop-types';

class BubbleDetails extends React.Component{
    
    state = {
        bubble: this.props.location.bubble
    };

    addToCart(e, bubble){
        e.preventDefault();
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

export default BubbleDetails;