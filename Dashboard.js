import AbstractView from "./AbstractView.js";
import {barbers} from "/barbers.js"


const barberFn = (barber) => {
   const allBarbers = barber.map(person => {
        const {name, experience, bio, photo} = person;
        return `<div class="barberBlock">
                    <img id="mainLeft" src="/images/bab1.jpg">
                    <h3>${name}</h3>
                    <h4>${experience}</h4>
                    <p>
                    ${bio}
                    </p>
                </div>
    `
    })
    return allBarbers;
}

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }


    async getHtml() {
        return `
        <div class="logoContainer">
            <img id="logo" src="/images/logo3.png">
        </div>
        <div class="home">
            <div class="containerMain">
                <span class="title">
                    
                    <h2>Welcome to </h2><br><h1>Get Cut Barber</h1>
            
                </span>    
                <div class="mainImg">
                    <img id="mainLeft" src="/images/mainLeft.jpg"> 
                    <img id="mainRight" src="/images/mainRight.jpg">
                </div>
                
                <p>
                    Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
                </p>
                <p>
                </p>
            </div>    
            <div class="containerMain">
            <span class="title">
                <h1>~Barbers~</h1>
            </span>   
                <div class="barberContainer"> 
                ${barberFn(barbers)}
                </div>
            </div>    
        </div>
        `
    }
}
