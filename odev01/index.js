const img=document.querySelectorAll("img")
const aciklama=document.querySelector(".aciklama")
const container=document.querySelector(".container")
var count=0

function yaz()
{   
    img.forEach((index)=>{
        index.style.opacity=0
    })
    aciklama.innerHTML="Kedi kartını bulmak için kartın üzerine tıklamalısın"
    
}
var control=false

img.forEach((index)=>{
    index.addEventListener("click",()=>{
        index.style.opacity=1
       let sınıf= index.getAttribute("class")
       
       if(sınıf=="kedi")
       {
           control=true
         aciklama.innerHTML="<p>Kazandın Tebrik Ederiz :) Yeni bir oyun oynamak istersen <span onclick='yaz()'> buraya </span>  Tıklayabilirsin   </p>"
       }
       else{
           count++
           if(count==2 && !control)
           {
               aciklama.innerHTML="<p>Kaybettiniz yeni bir oyun için  <span style='color: blue;' onclick='yaz()'> buraya   </span> tıklayınız  </p>"
           }
       }
       
      
    })
})
