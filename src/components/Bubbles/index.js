import React from "react";
// import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
// import "./styles.css";
// import { Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { getBubbles } from "../../actions/getBubblesAction";


class Bubbles extends React.Component{

  state = {
    bubbles: this.props.bubbles
  }



  render() {
    // const bubbles = useSelector(state => state.bubbles);
    console.log(this.state.bubbles);
    return(
  <div className="bubbles">
      <p>Bubbles are fun!</p>
  </div>


    )

  }
}
// const mapStateToProps = (state) => {
//   return {boss: state.boss}
// }

// const mapDispatchToProps = {
//   getBoss,
//   deleteBoss
// }

// export default connect(mapStateToProps, mapDispatchToProps) (Boss);

const mapStateToProps = (state) => {
  return {bubbles: state.bubbles}
}

const mapDispatchToProps = {
  getBubbles,
}

export default connect(mapStateToProps, mapDispatchToProps) (Bubbles);