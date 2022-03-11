import React from "react";
import { NavLink } from 'react-router-dom';
import "./styles.css";



class BubbleDetails extends React.Component{
    
    // state = {
    //     bubble: this.props.location.bubble
    //   }
    constructor(props){
        super(props);
        console.log(props);
    }
    
    componentDidMount(){
        console.log(this);
    }
    
      render() {
          console.log(this.props.state);
        

          //let bubble =  this.props.location.bubble;
        // const bubbles = useSelector(state => state.bubbles);
        return (
            <div className = "AllBubbles">
        
                        {/* <div key={bubble.id} className="Bubbles">
                            <div>
                                <img className="BubbleImg" src={bubble.image} alt={bubble.name} />
                            </div>
                            <div>
                                <h1 className="Heading">{bubble.name}</h1>
                            </div>
                            <div>
                                <p className="BubbleDetails">{bubble.description}</p>
                                <p className="BubblePrice">Price: {bubble.price} kr</p>

                            </div>
                            <button className="CartButton" onClick={() => this.addToLocalStorage(bubble)}>Add to cart</button> */}
                        {/* </div> */}
            </div>
                        )
            
    }}



// BubblesDetails.propTypes = {

//     bubble: propTypes.shape({
//         name: propTypes.string,
//         description: propTypes.string,
//         price: propTypes.number,
//         image: propTypes.string
//     })
// }

export default BubbleDetails;