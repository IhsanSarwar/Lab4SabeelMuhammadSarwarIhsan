console.log("Console for main.js is connected");

async function GetSelectedFilters(){
    const selectedSort = document.querySelector("input[name='sort']:checked").value;
    const selectedPeriod = document.querySelector("input[name='period']:checked").value;

console.log("Selected sort:", selectedSort);
console.log("Selected period:", selectedPeriod);

const api = "p8gJcEJnGeNroE3dRfjU7xL35UOjS8ISoAibAD0sGMGAgF1v";
//You need to use ` ` to allow for ${} your specific input to change
const url = `https://api.nytimes.com/svc/mostpopular/v2/${selectedSort}/${selectedPeriod}.json?api-key=${api}`;
console.log("URL is: ", url);


//Got this from lab canvas page 
fetch(url)
   .then(res => res.json()) .then(data => {  
    if(data.results){
 console.log("API data:", data);
 console.log("First article:", data.results[0]);
 const articles = document.querySelector("#articles");
 articlesSection.innerHTML = "";
 //Finish this card and article section
 for(i = 0; i < 5; ++i){
    const article = data.results[i];
    innerHTML +=
    <div class = "card"

}
    }
    else {
 console.log("No results found");    
    }
})
.catch(err => {
    
console.log(err) }) 
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
