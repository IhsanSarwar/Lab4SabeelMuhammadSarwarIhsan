console.log("Console for main.js is connected");

function GetSelectedFilters(){
    const selectedSort = document.querySelector("input[name='sort']:checked").value;
    const selectedPeriod = document.querySelector("input[name='period']:checked").value;

console.log("Selected sort:", selectedSort);
console.log("Selected period:", selectedPeriod);
/*TODO: Add the API stuff with Sabeel */

const api = "key";
//You need to use ` ` to allow for ${} your specific input to change
const url = `https://api.nytimes.com/svc/mostpopular/v2/${selectedSort}/${selectedPeriod}.json?api-key=${api}`;
console.log("URL is: ", url);
}

const sortButtons = document.querySelectorAll("input[name='sort']");
const periodButtons = document.querySelectorAll("input[name='period']");

//Allows for us to recognize and change the checked option to proper highlighted one.
sortButtons.forEach(function(option){
    option.addEventListener("change",GetSelectedFilters);
});
periodButtons.forEach(function(option){
    option.addEventListener("change",GetSelectedFilters);
});

GetSelectedFilters();
