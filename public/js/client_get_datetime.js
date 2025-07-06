function getTimeZoneLocation() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

function displayDateTime() {
  var now = new Date();
  var weekday = now.toLocaleString('en-US', { weekday: 'long' });
  var formattedDate = now.getFullYear() + '-' + 
                      ('0' + (now.getMonth() + 1)).slice(-2) + '-' + 
                      ('0' + now.getDate()).slice(-2);
  var formattedTime = ('0' + now.getHours()).slice(-2) + ':' + 
                      ('0' + now.getMinutes()).slice(-2);
  var timezoneLocation = getTimeZoneLocation();
  var greeting = getGreeting();
  var dateTime = greeting + "It's " + weekday + " " + formattedDate + " " + formattedTime + " in your " + timezoneLocation + " time zone.";
  
  var dateTimeElement = document.getElementById('datetime');
  if (dateTimeElement) {
    dateTimeElement.innerHTML = dateTime;
  }
}

function getGreeting() {
  var now = new Date();
  var hour = now.getHours();
  
  if (hour < 5) {
    return "🌜 Greetings, moonlight marauder! ";
  }
    else if (hour < 12) {
    return "☕️ Good morning, buddy. Wake up and smell the chaos! ";
  } else if (hour < 18) {
    return "👋 Afternoon, bud! Survivin' the day so far? ";
  } else if (hour < 22) {
    return "🍷 Good evening, master of the evening chill. ";
  }    
    else {
    return "🌝 Hey, night owl. Ready to wind down or not? ";
  }
}