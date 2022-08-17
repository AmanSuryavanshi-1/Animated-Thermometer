/* <span id="temperature" class="fa"></span>  */ //(FontAwesome(fa)) //temp(temperature)

const tempLoad = () =>{
    let temp =document.getElementById('temp');
    temp.innerHTML="&#xf2cb";      //The innerHTML property sets or returns the HTML content (inner HTML) of an element.
    

    setTimeout(()=>{
     temp.innerHTML="&#xf2ca";
     temp.style.color="green";
    },1000);
    
    setTimeout(()=>{
     temp.innerHTML="&#xf2c9";
     temp.style.color="#f8b627";   
    },2000);

    setTimeout(()=>{
      temp.innerHTML="&#xf2c8";
      temp.style.color="#ff6c70";  
    },3000);
       
    setTimeout(()=>{
      temp.innerHTML="&#xf2c7";
      temp.style.color="#d63031";
       },4000);        
}
tempLoad();
setInterval(tempLoad,5000);