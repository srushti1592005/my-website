const images=[
"https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600",
"https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600",
"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1600"
];

let i=0;

setInterval(()=>{
i=(i+1)%images.length;
document.getElementById("slide").src=images[i];
},3000);

function topFunction(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}
document.getElementById("themeBtn").addEventListener("click",()=>{
document.body.classList.toggle("dark");
});
window.addEventListener("load",()=>{
setTimeout(()=>{
document.getElementById("loader").style.display="none";
},1500);
});