import React from "react";
import "./App.css";
const date = new Date();
var greet = date.getHours()
if (greet>0 && greet<12)
greet = 'Morning';
else
if(greet>12 && greet<16)
greet='Afternoon';
else
if(greet>16)
greet='Evening'


function Navbar(){
   return(
   <div>
   <div class="container">
   <div class="wm"><h2>Good {greet}! </h2></div>
   <div class="search"><label class="caption" for="search">Search <input type="text" id="username" name="username"></input></label></div>
   <div class="createtask"><button type="button" >Create Task</button></div>
   
   </div>

   </div>
   ) 
}

export default Navbar;