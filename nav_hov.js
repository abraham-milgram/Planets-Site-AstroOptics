window.onload = function(){ 

    var about = document.getElementById("about-txt");
    about.onmouseover = function(){about.innerText = "About"}
    about.onmouseout = function(){about.innerText="☉"}

    var mercury = document.getElementById("mercury-txt");
    mercury.onmouseover = function(){mercury.innerText = "Mercury"}
    mercury.onmouseout = function(){mercury.innerText="☿"}

    var venus = document.getElementById("venus-txt");
    venus.onmouseover = function(){venus.innerText = "Venus"}
    venus.onmouseout = function(){venus.innerText="♀"}

    var earth = document.getElementById("earth-txt");
    earth.onmouseover = function(){earth.innerText = "Earth"}
    earth.onmouseout = function(){earth.innerText="⌂"}

    var mars = document.getElementById("mars-txt");
    mars.onmouseover = function(){mars.innerText = "Mars"}
    mars.onmouseout = function(){mars.innerText="♂"}

    var jupiter = document.getElementById("jupiter-txt");
    jupiter.onmouseover = function(){jupiter.innerText = "Jupiter"}
    jupiter.onmouseout = function(){jupiter.innerText="♃"}

    var saturn = document.getElementById("saturn-txt");
    saturn.onmouseover = function(){saturn.innerText = "Saturn"}
    saturn.onmouseout = function(){saturn.innerText="♄"}

    var uranus = document.getElementById("uranus-txt");
    uranus.onmouseover = function(){uranus.innerText = "Uranus"}
    uranus.onmouseout = function(){uranus.innerText="⛢"}

    var neptune = document.getElementById("neptune-txt");
    neptune.onmouseover = function(){neptune.innerText = "Neptune"}
    neptune.onmouseout = function(){neptune.innerText="♆"}
}