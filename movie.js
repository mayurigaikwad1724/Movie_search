let box=document.getElementById("box");

let request = new XMLHttpRequest();
let button=document.getElementById("button");
let clickButton=function() {
      var search_movies = document.getElementById("search").value;
      request.addEventListener('load',getData);
      request.open('GET', 'https://api.themoviedb.org/3/search/movie?api_key=8318c431b4fc8a2c4762bf2a52c351ee&query='+search_movies);
      request.send();
};

let getData =function() {
    var data = JSON.parse(request.responseText);
    showdata(data.results);
};

let showdata=function(data){
    data.forEach((item)=>{
        box.innerHTML=`
            <p>Movie Name:-${item.title}</p>
            <p>original_title:-${item.original_title}</p>
            <p>release_date:-${item.release_date}</p>
            <p>overview:-${item.overview}</p>
            <p>original_language:-${item.original_language}</p>`;
    });  
};

button.addEventListener("click",clickButton);

