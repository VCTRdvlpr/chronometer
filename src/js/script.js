var miliseconds = 0;
var seconds = 0;
var minutes = 0;
var interval; 

function start(){
    interval = setInterval(time, 10);
}

function pause(){
    clearInterval(interval);
}

function stop(){
    clearInterval(interval);    
    miliseconds=0;
    seconds=0;
    minutes=0;
    document.getElementById('timer').innerText='00:00:00';
}

function time(){
    miliseconds++
    if(miliseconds==100){
        miliseconds=0;
        seconds++
    };

    if(seconds==60){    
        seconds=0;
        minutes++;                
    };
    
    var milisecondsString = miliseconds.toString().padStart(2, '0');
    var secondsString = seconds.toString().padStart(2, '0');
    var minutesString = minutes.toString().padStart(2, '0');

    document.getElementById('timer').innerText = minutesString + ':' + secondsString + ':' + milisecondsString;
           
}