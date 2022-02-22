window.onload = function(){
    let milSec = 00;
    let second = 00;
    let mins = 00;
    let appendMinite = document.getElementById("minite");
    let appendSecond = document.getElementById("second");
    let appendMilSec = document.getElementById("milsec");
    let startWatch = document.getElementById("button-start");
    let stopWatch = document.getElementById("button-stop");
    let resetAll = document.getElementById("button-reset");
    let timelive;

    startWatch.onclick = function()
    {
        clearInterval(timelive)
        timelive = setInterval(startTime , 1)
    }
     stopWatch.onclick = function()
     {
         clearInterval(timelive)
     }

     resetAll.onclick = function()
     {
         clearInterval(timelive)
         appendSecond.innerHTML = '00'
         appendMilSec.innerHTML = '00'
         appendMinite.innerHTML = '00'
     }

    function startTime()
    {
       milSec++
       if( milSec <= 9)
       {
           appendMilSec.innerHTML = '0' + milSec
       }
       if(milSec > 9)
       {
            appendMilSec.innerHTML =  milSec;
       }
     
       if(milSec > 20)
        {
           second++
           milSec = '00';
           appendMilSec.innerHTML = '0' + '0'; 
           appendSecond.innerHTML = '0' + second
       }

       if(second>9)
       {
             appendSecond.innerHTML =  second;
       }
       if(second > 59)
       {
            mins++
            appendMinite.innerHTML = '0' + mins
            second = 0
       }
       if(mins > 9)
       {
             appendMinite.innerHTML = mins;
       }
    }
}


