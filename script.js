document.addEventListener('DOMContentLoaded', ()=>{
function nav() { 
    var realNav = document.getElementById('realnav');
    if (realNav.style.display === "none") {
        realNav.style.display = "block";
    }    else {
        realNav.style.display = "none";
    }
    
}

const currentTimeElement = document.getElementById("current-time");

function updateCurrentTime() {
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleString();
  currentTimeElement.textContent = formattedTime;
}

updateCurrentTime();
setInterval(updateCurrentTime, 1000);
});
