import React from 'react'
import Ball from './Ball'
import './Lottery.css';

export default class Lottery extends React.Component{
    // this props wont change
    static defaultProps = 
    {
        title:'Lottery',
        // max of balls that we are gonna display
        maxBalls:6,
        maxNum:40
    }
    constructor(props){
        super(props);
        // initial state
        // this will generate an array, with the length that we want
        // in this case will be maxBalls =6.
        // making an array that has as many slots as maxBall
        this.state={ nums:Array.from({length:this.props.maxBalls})}
        this.handleClick = this.handleClick.bind(this)
 
    } 
    // method
    generate(){
    // PICK OF RANDOM NUMBER BETWEEN 1 AND MAXNUM = 40
    // how many times, depends on maxBalls
    // take the current state, and update it in order to generate 6 new numbers
    // each time we click the button
    // nums pq es el que vas a iterar

    this.setState(curState =>({
       nums: curState.nums.map(n =>  Math.floor(Math.random()*this.props.maxNum) +1) 
    }))
     
    }
    // method event
    handleClick(){
    
        this.generate()


    }

    render(){
        return(
            <section className='Lottery'>
                <h1>{this.props.title}</h1>
                <div>
                    {/* it will iterate over this.state.nums 
                    will start empty, and for each we are making a ball
                    it will generate 6  empty Balls
                  
                     */}
                    {this.state.nums.map(n => <Ball num={n}/>)}
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </section>
           
        )
    }
}