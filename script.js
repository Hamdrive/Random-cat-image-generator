const api_url="https://api.thecatapi.com/v1/images/search";

let img_src;

function jsonResponse(){
$.getJSON(api_url, function(data){
    img_src = data[0].url;
    getImgLink(img_src);
})};


function getImgLink(img_src){
    $("#img").attr("src",img_src);
};

jsonResponse();



document.getElementById("btn").addEventListener("click", function(){
    jsonResponse();
});