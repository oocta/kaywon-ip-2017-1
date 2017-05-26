// Load an alarm sound
    var sound = new Audio("http://www.freespecialeffects.co.uk/soundfx/sirens/alarm_01.wav");
    sound.loop = true;

// I just made this because It's easier to read.
getID = function(value){ return document.getElementById( value ); };

// List of all my objects im working with, and variables
function init() {
  var minute = getID("minute"),
  var  second = getID("second"),
  var  aHour = getID("aHour"),
  var  aMinute = getID("aMinute"),
  var  aSecond = getID("aSecond"),
  var  aSwitch = getID("aSwitch"),
  var  aOff = getID("turnOff"),
  var  refreshTime = 500,
  var  alarmTimer = null;
}

aSwitch.On = false;
aSwitch.value = "OFF";

// Turns the alarm off or on
function alarmSwitch(){
    switch( aSwitch.On )
    {
        case false:
            aSwitch.On = true;
            aSwitch.value = "ON";

            alarmSet();
        break;
        case true:
            aSwitch.On = false;
            aSwitch.value = "OFF";

            // CLEARS THE BEEPER
            clearTimeout( alarmTimer );
        break;
    }
}

// Stops the alarm and closes the "stop button"
function disableAlarm(){
    sound.pause();
    aOff.style.display = "none";
}

//Fires the BEEPER noise, -- this is called from the alarmTimer timeout
function alarmFire(){
    if( aSwitch.On )
    {
        aOff.style.display = "block";
        sound.play();
    }
    else
        alert("error..");
}

/*This is how the beeper goes off:
 * It first checks the set time so the alarm can go to the
 * next day without the user putting the date in.
 * The beeper goes off over the span of milliseconds difference.
 */
function alarmSet(){
    clearTimeout( alarmTimer );

    var tomo = false;// tomorrow.
    if( aHour.value < hour.value )
        {tomo = true;}
    else if( aHour.value == hour.value && aMinute.value < minute.value )
        {tomo = true;}
    else if( aHour.value == hour.value && aMinute.value == minute.value
            && aSecond.value < second.value )
        {tomo = true;}

    var date = new Date(), year = date.getFullYear(), month = date.getMonth(), day = parseInt( date.getDate() );

    if( tomo ){day += 1;}

    time = new Date( year, month, day, aHour.value, aMinute.value, aSecond.value, date.getMilliseconds() );
    time = ( time - (new Date()) );

    // This turns the alarm back on if it's off when this function is called.
    if( aSwitch.On == false)
        alarmSwitch();

    alarmTimer = setTimeout( function(){alarmFire();} ,parseInt(time) );
}

// This is how the clock works
timeRefresh = function(){
    date = new Date();
    hour.innerHTML = date.getHours();
    hour.value = hour.innerHTML;
    minute.innerHTML = date.getMinutes();
    minute.value = minute.innerHTML;
    second.innerHTML = date.getSeconds();
    second.value = second.innerHTML;

    setTimeout("timeRefresh()", refreshTime);
};

// This is called whenever the inputs are changed to stop invalid forms.
numCap = function( obj, min, max){
    obj.value = Math.max(obj.min, Math.min(obj.max, obj.value) );

    alarmSet();// Starts up the alarm automatically when a value is changed.
};

window.onload=function(){
    timeRefresh();

    var a = getID("aHour");
    a.value = hour.innerHTML;
    a = getID("aMinute");
    a.value = minute.innerHTML;
    a = getID("aSecond");
    a.value = second.innerHTML;
};
