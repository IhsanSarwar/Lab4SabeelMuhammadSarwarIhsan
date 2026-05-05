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
        articles.innerHTML = "";
 //Finish this card and article section
        let articlesShown = 0;
        for(let i = 0; i < 20 && articlesShown < 5; i++){
            try{
            const article = data.results[i];

            articles.innerHTML += `
            <div class = "articlecard"> 
            <img src = "${article.media[0]["media-metadata"][2].url}" alt = "${article.title}" class = "articleimg">
            
            <div class = "articletext">
             <h2>${article.title}</h2>
             <p>${article.abstract}</p>
             <p>${article.published_date}</p>
            </div>
           
            </div>`;

            articlesShown++;
        }
        catch(err){
            console.log("Skipped Article: ", i);
        }
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
