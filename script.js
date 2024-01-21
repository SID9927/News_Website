//variable
const newsABC=document.getElementById("headlines")
const healthBtn=document.getElementById("health");
const scienceBtn=document.getElementById("science");
const sportsBtn=document.getElementById("sports");
const technologyBtn=document.getElementById("technology");
const entertainmentBtn=document.getElementById("entertainment");
const searchBtn=document.getElementById("search");

const newsQuery=document.getElementById("newsQuery");
const newsType=document.getElementById("newsType");
const newsdetails=document.getElementById("newsdetails");

//Array
var newsDataArr=[]

//api
const API_KEY="e1751b32faba43bc96dfd88259750ce4";
const HEADLINES_NEWS="https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const HEALTH_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=";
const SCIENCE_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=";
const SPORTS_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const TECHNOLOGY_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=";
const ENTERTAINMENT_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const SEARCH_NEWS="https://newsapi.org/v2/everything?q=";

window.onload=function(){
    newsType.innerHTML="<h4>Headlines</h4>"
    fetchHeadlines();
};

newsABC.addEventListener("click",function(){
    newsType.innerHTML="<h4>Headlines</h4>"
    fetchHeadlines();
});

healthBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Health News</h4>"
    fetchHealthNews();
});

scienceBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Science News</h4>"
    fetchScienceNews();
});

sportsBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Sports News</h4>"
    fetchSportsNews();
});

technologyBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Technology News</h4>"
    fetchTechnologyNews();
});

entertainmentBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Entertainment News</h4>"
    fetchEntertainmentNews();
});

searchBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Search :"+newsQuery.value+"</h4>"
    fetchQueryNews();
});

const fetchHeadlines=async()=>{
    const response=await fetch(HEADLINES_NEWS+API_KEY);
    newsDataArr=[];
    if(response.status>=200 && response.status<300){
        const result=await response.json();
        newsDataArr=result.articles;
    }
    else{
        //handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchHealthNews=async()=>{
    const response=await fetch(HEALTH_NEWS+API_KEY);
    newsDataArr=[];
    if(response.status>=200 && response.status<300){
        const result=await response.json();
        newsDataArr=result.articles;
    }
    else{
        //handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchScienceNews=async()=>{
    const response=await fetch(SCIENCE_NEWS+API_KEY);
    newsDataArr=[];
    if(response.status>=200 && response.status<300){
        const result=await response.json();
        newsDataArr=result.articles;
    }
    else{
        //handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchSportsNews=async()=>{
    const response=await fetch(SPORTS_NEWS+API_KEY);
    newsDataArr=[];
    if(response.status>=200 && response.status<300){
        const result=await response.json();
        newsDataArr=result.articles;
    }
    else{
        //handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchTechnologyNews=async()=>{
    const response=await fetch(TECHNOLOGY_NEWS+API_KEY);
    newsDataArr=[];
    if(response.status>=200 && response.status<300){
        const result=await response.json();
        newsDataArr=result.articles;
    }
    else{
        //handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchEntertainmentNews=async()=>{
    const response=await fetch(ENTERTAINMENT_NEWS+API_KEY);
    newsDataArr=[];
    if(response.status>=200 && response.status<300){
        const result=await response.json();
        console.log(result.articles);
        newsDataArr=result.articles;
    }
    else{
        //handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchQueryNews=async()=>{

    if(newsQuery.value==null)
        return;
    
    const response=await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apikey="+API_KEY);
    newsDataArr=[];
    if(response.status>=200 && response.status<300){
        const result=await response.json();
        newsDataArr=result.articles;
    }
    else{
        //handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}

function displayNews(){

    newsdetails.innerHTML="";

    if(newsDataArr.length==0){
        newsdetails.innerHTML="<h5>No Data found.</h5>"
        return;
    }

    newsDataArr.forEach(news=>{

        var date=news.publishedAt.split("T");

        var col=document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2";

        var card=document.createElement('div');
        card.className="p-2";

        var image=document.createElement('img');
        image.setAttribute("height","matchparnt");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        var cardBody=document.createElement('div');

        var newsHeading=document.createElement('h5');
        newsHeading.className="card-title";
        newsHeading.innerHTML=news.title;

        var dateHeading=document.createElement('h6');
        dateHeading.className="text-primary";
        dateHeading.innerHTML=date[0];

        var discription=document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML=news.discription;

        var link=document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target","_blank");
        link.href=news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    })
}