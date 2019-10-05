import React from 'react'
import './Ball.css'

export default class Ball extends React.Component {
    render(){
        return(
            <div className="Ball">
                {this.props.num}
                {console.log(this.props.num)}
            </div>
        )
    }
}
