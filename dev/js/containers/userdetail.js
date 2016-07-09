import React, { Component } from 'react';
import {connect} from 'react-redux';

const style = {
  width:200,
  height:200
}


class UserDetail extends Component{

     render(){
       return(
         <div>
            <img style={style} src={this.props.user.thumbnail}/>
            <h2>{this.props.user.first}</h2>
            <h3>Age:{this.props.user.age}</h3>
            <h3>Description:{this.props.user.description}</h3>
         </div>
       );
     }
}

function mapStatesToProps(state){

    return{
       user:state.activeusers
    };

}

export default connect(mapStatesToProps)(UserDetail);
