

document.addEventListener('DOMContentLoaded', function() {
  var mainText = document.querySelector('.status');
  mainText.innerText = "Turn off the light!";

  var lightswitch = document.querySelector('.switch');
  lightswitch.addEventListener('click', function(e) {
    if (lightswitch.className === "switch on") {
      lightswitch.className = "switch off";
      document.body.className = "dark";
      mainText.innerText = "Hey, who turned off the lights?";
    } else if (lightswitch.className === "switch off") {
      lightswitch.className = "switch on";
      document.body.className = "light";
      mainText.innerText = "It's so bright in here!";
    }
  });
});
