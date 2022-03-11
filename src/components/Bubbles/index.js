import React from "react";
import {connect} from "react-redux";
import { NavLink } from 'react-router-dom';
import { getBubbles } from "../../actions/getBubblesAction";
import propTypes from 'prop-types';
import "./styles.css";


class Bubbles extends React.Component{
    
    state = {
        bubbles: this.props.bubbles.data
    }
    
    addToCart(e, bubble){
        e.preventDefault();
        console.log("Adding to cart..");
        // Check if cart exists, otherwise create a new array for cart
        if(localStorage.getItem('cart') == null){
            localStorage.setItem('cart', '[]');
        }
        var prevData = JSON.parse(localStorage.getItem('cart'));
        var the_bubble = {"bubble" : bubble}
        prevData.push(the_bubble);
        localStorage.setItem('cart', JSON.stringify(prevData));
        console.log(localStorage.getItem('cart'));
      }


    render() {
        console.log(this);
        // const bubbles = useSelector(state => state.bubbles);
        return (
            <div className = "AllBubbles">
            {this.props.bubbles && this.props.bubbles.data.map((bubble) => {
                return (
                    <div key={bubble.id} className="Bubbles">
                        <div>
                            <img className="BubbleImg" src={bubble.image} alt={bubble.name} />
                        </div>
                        <div>
                            <h1 className="Heading">{bubble.name}</h1>
                        </div>
                        <div>
                            <p>{bubble.description}</p>
                            <p className="BubblePrice">Price: {bubble.price} kr</p>
                        <div>
                            <NavLink className="DetailButton" to={`/bubbles/${bubble.id}`} exact  state={{ bubble: bubble }}>More Info</NavLink>
                        </div>
                        </div>
                        <button className="CartButton" onClick={e => this.addToCart(e, bubble)}>Add to cart</button>
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