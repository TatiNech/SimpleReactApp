import React from 'react';
import {connect} from 'react-redux';


function TennisEq(props){

    const classes = ['card']

    if(props.balls.marked){
        classes.push('marked')
    }
    return(
        <div className ={classes.join(' ')}>
            <div className="card-item">
                <img className = "shop_img"
                    src={props.balls.link}/>
                <h3>
                    {props.balls.name}
                </h3>
                <p>
                    Price: {props.balls.price}Som
                </p>
                <button onClick={props.handleOrder}>Заказать</button>

            </div>
        
        </div>
        //здесь создаем кнопку 
    )
}

class Shop extends React.Component{
   // создаем функцию 
    handleOrder(){
        alert('Заказано')
    }
    
    renderTennisEq(){
        return this.props.balls.map(balls =>{
            return(
                <TennisEq
                handleOrder = {this.handleOrder}
                 balls={balls} 
                key = {balls.name + Math.random()} />
            )
        })
    }
    render(){
        return(
            <div className="list">
                {this.renderTennisEq()}
            </div> 
        )
    }
}

    const mapStateToProps = (state) => {
        return {
            balls:state.balls
        }
    }

  

  export default connect(mapStateToProps)(Shop);