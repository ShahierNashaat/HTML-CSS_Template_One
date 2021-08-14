let icon = document.querySelector(".links .icon");
let linksList = document.querySelector(".links ul");
let allLinksList = document.querySelectorAll(".links ul a");
icon.addEventListener("click",function(){
    if(linksList.style.display == "" || linksList.style.display==null | linksList.style.display=="none")
    {
        linksList.style.display = "block";
    }
    else{
        linksList.style.display = "none";
    }
});
allLinksList.forEach((link)=>{
    link.addEventListener("click",function(){
        linksList.style.display = "none";
    });
});