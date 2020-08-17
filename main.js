var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  }
  document.getElementById("time").innerHTML = hour.toLocaleString();
  document.getElementById("prehand").innerHTML = prepand.toLocaleString();
  document.getElementById("min").innerHTML = minute.toLocaleString();
  document.getElementById("sec").innerHTML = second.toLocaleString();
  document.getElementById("day").innerHTML = daylist[day].toLocaleString();
  function sub() {
    window.alert("You are a subscriber now!");
  }
  function validateform(){  
    var name=document.getElementById("firstname").value;   
      
     if(name.length<6){  
      window.alert("Name must be at least 6 characters long.");  
      }  
    }
  function myFunction() {
    var person = prompt("Please enter your name", "Lionel Messi");
    if (person != null) {
      document.getElementById("dis").innerHTML =
      "Welcome " + person + " !";
    }
  }
  function subscribe() {
    var x = document.getElementById("form1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
   
 