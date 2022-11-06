function updateclock(){
    let currentTime=new Date();
    let currenthour=currentTime.getHours();
    let currentMinutes=currentTime.getMinutes();
    let currentSeconds=currentTime.getSeconds();
    let timeofDay=(currenthour<12)?"AM":"PM";
    let currentTimeStr=currenthour + ":" + currentMinutes + ":" + currentSeconds + ":" +timeofDay;

    currentMinutes=(currentMinutes<10?"0":"")+currentMinutes;
    currentSeconds=(currentMinutes<10?"0":"")+currentSeconds;
    document.getElementById("clock").innerHTML=currentTimeStr;
}