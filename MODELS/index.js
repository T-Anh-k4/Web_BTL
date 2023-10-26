document.querySelector("#show").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector("#close").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});
