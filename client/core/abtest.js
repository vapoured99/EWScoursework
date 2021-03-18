
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import myImg from './../assets/images/AB_Testing.png'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import auth from './../auth/auth-helper'


import React, {useState, useEffect} from 'react'



export default function abtest(){
    
    const createMarkup = () => {
        return {__html: `<h1>Welcome to the A/B Test</h1>
        <h2>WITHOUT THINKING CLICK A BUTTON!!</h2>
        
        <br />
        
        <div>
        <button type="button" class="button1" onClick="counter()">CLICK ME!</button>
        
        <button type="button" class="button2" onClick="counter()">CLICK ME!</button>
        </div>

        <style>

        h1{
            text-align:center
        }

        h2 {
            text-align:center
        }

        .button1 {
        background-color:aqua ;
        height:150px;
        width:25%;
        font-size:25px;
        border-radius:25px;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        border: 2px solid black;
        cursor: pointer;
        opacity: 0.6;
        text-align: center;
        transition-duration: 0.4s;
        margin-left:20%;


    }

        .button1:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        opacity: 1;
    }


    .button2 {
        background-color:red ;
        height:110px;
        width:25%;
        font-size:25px;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        border: 2px solid black;
        cursor: pointer;
        text-align: center;
        transition-duration: 0.4s;
        margin-left:10%;
        


    }

        .button2:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        opacity: 1;
    }

    <script>
    var clicks = 0;
    
    function counter() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };

    <script>
        
        `};
    };



    return(<div dangerouslySetInnerHTML={createMarkup()}/>);


    

}