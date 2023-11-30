function getBusinessInfo() {
    var businessSection = document.getElementById("business");
    businessSection.scrollIntoView();
}

var businessButton = document.getElementById("businessButton");
businessButton.onclick = getBusinessInfo;

function getDishesInfo() {
    var dishesSection = document.getElementById("dishes");
    dishesSection.scrollIntoView();
}

var dishesButton = document.getElementById("dishesButton");
dishesButton.onclick = getDishesInfo;