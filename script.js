
///.............menu bar open and close............../////
const menuopen=document.getElementById("menuopen")
const menubarclose=document.getElementById("closebutton");

function closemenu(){
    menubarclose.style.display="none";
}
function openmenu(){
    menubarclose.style.display="block";
}



//***navbar fixed */
function changebg(){
    var scrollValue=window.scrollY;
    var navbar=document.getElementsByClassName("nav-bar")[0];

    if(scrollValue < 50){
        console.log(scrollValue);
        navbar.classList.remove('bgcolor');
    }else{
        navbar.classList.add('bgcolor');
    }
}

window.addEventListener('scroll',changebg);


/*...footer(second section) plus responsive concept....*/

document.addEventListener("DOMContentLoaded",function(){
    var plusElements=document.querySelectorAll(".pluse");
    var content=document.querySelectorAll(".list");
 
plusElements.forEach(function(plus){
    plus.addEventListener("click",function(){
        var content=this.parentElement.nextElementSibling;
           content.classList.toggle('show');
    });
  });
});



    // document.addEventListener("DOMContentLoaded", function() {
    //     const plusIcons = document.querySelectorAll(".plus");
        
    //     plusIcons.forEach(icon =>{
    //         icon.addEventListener("click", function() {
    //             const list = this.closest(".column").querySelector(".list");
    //             list.classList.toggle("show");
    //         });
    //     });
    // });



