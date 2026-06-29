// Search Function
function searchOpportunity() {

let search = document.getElementById("searchBox").value.toLowerCase();

if(search.includes("scholarship")){
    window.location.href="scholarships.html";
}
else if(search.includes("internship")){
    window.location.href="internships.html";
}
else if(search.includes("mentor")){
    window.location.href="mentorship.html";
}
else if(search.includes("course") || search.includes("learning")){
    window.location.href="learning.html";
}
else if(search.includes("event") || search.includes("hackathon")){
    window.location.href="events.html";
}
else{
    alert("Sorry! No matching opportunity found.");
}

}

// Dark Mode
let dark = false;

document.getElementById("darkBtn").addEventListener("click",function(){

if(!dark){

document.body.style.background="#121212";
document.body.style.color="white";

dark=true;
this.innerHTML="☀️";

}
else{

document.body.style.background="#f5f5f5";
document.body.style.color="#333";

dark=false;
this.innerHTML="🌙";

}

});

// Welcome Message
window.onload=function(){

alert("Welcome to STEM Opportunity Hub!");

}