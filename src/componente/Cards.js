import React, { Component } from 'react';
import styles from "./Cards.module.css";
import Card from './Card';

import iphonex from "../images/iphone10.jpg";
import iphone11 from "../images/iphone11.jpg";
import iphone12 from "../images/iphone12.jpg";
import s21 from "../images/s21.jpg";
class Cards extends Component {
    constructor(){
        super();
        this.state={
            phneData:[
                {id: 1, image:iphonex , name:"iphonex" , cost:"500 $"},
                {id: 2, image:iphone11, name:"iphone 11" , cost:"600 $"},
                {id: 3, image:iphone12, name:"iphone 12" , cost:"800 $"},
                {id:4 , image:s21, name:"s21 ultra" , cost:"790 $"},
            ]
        }
    }
    render() {
        return (
            <div className={styles.container}>
             {/* <Card image={iphonex} name="iphonex" cost="500 $" />  
             <Card image={iphone11} name="iphone 11" cost="600 $" />  
             <Card image={iphone12} name="iphone 12" cost="800 $" />   
             <Card image={s21} name="s21 ultra" cost="790 $" />     */}
             {this.state.phneData.map(phone=> <Card key={phone.id} image={phone.image} name={phone.name} cost={phone.cost} /> )}
            </div>
        );
    }
}

export default Cards;