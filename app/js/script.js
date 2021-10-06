const daily = document.getElementById("daily");
const weekly= document.getElementById("weekly");
const monthly = document.getElementById("monthly");

daily.addEventListener("click", function(){
    document.getElementById("cardOne").innerHTML = "5hrs";
    document.getElementById("cardTwo").innerHTML = "1hr";
    document.getElementById("cardThree").innerHTML = "0hrs";
    document.getElementById("cardFour").innerHTML = "1hr";
    document.getElementById("cardFive").innerHTML = "1hr";
    document.getElementById("cardSix").innerHTML = "0hrs";

    document.getElementById("subCardOne").innerHTML = "Previous - 7hrs"
    document.getElementById("subCardTwo").innerHTML = "Previous - 2hrs"
    document.getElementById("subCardThree").innerHTML = "Previous - 1hr"
    document.getElementById("subCardFour").innerHTML = "Previous - 1hr"
    document.getElementById("subCardFive").innerHTML = "Previous - 3hrs"
    document.getElementById("subCardSix").innerHTML = "Previous - 1hr"

    daily.classList.add("card__link--selected");
    weekly.classList.remove("card__link--selected");
    monthly.classList.remove("card__link--selected");
});

weekly.addEventListener("click", function(){
    document.getElementById("cardOne").innerHTML = "32hrs";
    document.getElementById("cardTwo").innerHTML = "10hrs";
    document.getElementById("cardThree").innerHTML = "4hrs";
    document.getElementById("cardFour").innerHTML = "4hrs";
    document.getElementById("cardFive").innerHTML = "5hrs";
    document.getElementById("cardSix").innerHTML = "2hrs";

    document.getElementById("subCardOne").innerHTML = "Previous - 36hrs"
    document.getElementById("subCardTwo").innerHTML = "Previous - 8hrs"
    document.getElementById("subCardThree").innerHTML = "Previous - 7hr"
    document.getElementById("subCardFour").innerHTML = "Previous - 5hrs"
    document.getElementById("subCardFive").innerHTML = "Previous - 10hrs"
    document.getElementById("subCardSix").innerHTML = "Previous - 2hrs"

    weekly.classList.add("card__link--selected");
    daily.classList.remove("card__link--selected");
    monthly.classList.remove("card__link--selected");
});

monthly.addEventListener("click", function(){
    document.getElementById("cardOne").innerHTML = "103hrs";
    document.getElementById("cardTwo").innerHTML = "23hrs";
    document.getElementById("cardThree").innerHTML = "13hrs";
    document.getElementById("cardFour").innerHTML = "11hrs";
    document.getElementById("cardFive").innerHTML = "21hrs";
    document.getElementById("cardSix").innerHTML = "7hrs";

    document.getElementById("subCardOne").innerHTML = "Previous - 128hrs"
    document.getElementById("subCardTwo").innerHTML = "Previous - 29hrs "
    document.getElementById("subCardThree").innerHTML = "Previous - 19hrs"
    document.getElementById("subCardFour").innerHTML = "Previous - 18hrs"
    document.getElementById("subCardFive").innerHTML = "Previous - 23hrs"
    document.getElementById("subCardSix").innerHTML = "Previous - 11hrs"

    monthly.classList.add("card__link--selected");
    daily.classList.remove("card__link--selected");
    weekly.classList.remove("card__link--selected");
});