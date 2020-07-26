


console.log('its working')


document.getElementById('open_close').addEventListener('click',()=>{
    var all= document.getElementsByClassName('color-bar');
    if(all[0].style.display ==='none'){
        all[0].style.display ='block';
    }
    else{
        all[0].style.display='none';
    }
})






let theme=localStorage.getItem('theme')
if(theme == null){
    setTheme('purple')
}
else{
    setTheme(theme)
}


let themeDots = document.getElementsByClassName('theme-dot')

for(var i=0; themeDots.length>i;i++){
    themeDots[i].addEventListener('click',function(){
        let mode=this.dataset.mode
        console.log('Option clicked:',mode)
        setTheme(mode)
    }
    )
}

function setTheme(mode){
    if(mode =='purple'){
        document.getElementById('theme-style').href = 'website.css'
    }
    if(mode =='green'){
        document.getElementById('theme-style').href = 'green.css'
    }
    if(mode =='blue'){
        document.getElementById('theme-style').href = 'blue.css'
    }
    if(mode =='orange'){
        document.getElementById('theme-style').href = 'orange.css'
    }
    localStorage.setItem('theme',mode)
}

/*------------navbar click query-------------*/


const nav = document.querySelector(".toshift"),
    navlist = nav.querySelectorAll("li"),
    totalnavlist = navlist.length;

for(let i=0; i<totalnavlist; i++){
    const a =navlist[i].querySelector("a");
    a.addEventListener('click',function(){

        for(let j=0;j<totalnavlist; j++){
           const k= navlist[j].querySelector("a");
            k.classList.remove("active");
        }
        this.classList.add("active")
    })
}


/*-----------------light box----------------*/


  const filtercontainer=document.querySelector(".portfolio-menu"),
        filterbtns=filtercontainer.children,
        totalfilterbtns=filterbtns.length;
        portfolioitems=document.querySelectorAll(".image");
        totalportfolioitem=portfolioitems.length;
        
        
        for(let i=0; i<totalfilterbtns;i++){
          filterbtns[i].addEventListener("click",function(){
            filtercontainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

            const filtervalue=this.getAttribute("data-filter");
            for(let k=0;k<totalportfolioitem;k++){
              if(filtervalue === portfolioitems[k].getAttribute("data-category")){
                portfolioitems[k].classList.remove("hide");
                portfolioitems[k].classList.add("show");

              }
              else{
                portfolioitems[k].classList.add("hide");
                portfolioitems[k].classList.remove("show");
              }
              if(filtervalue === "all"){
                portfolioitems[k].classList.remove("hide");
                portfolioitems[k].classList.add("show");
              }
            }


          })
        }


/*----------------------light box preview---------------*/

const lightbox=document.querySelector(".lightbox"),
        lightboximg = lightbox.querySelector(".lightbox-img"),
        lightboxclose=lightbox.querySelector(".lightbox-close"),
        lightboxtext=lightbox.querySelector(".lightbox-matter"),
        lightboxcounter=lightbox.querySelector(".lightbox-series");
        let itemindex=0;
      for(let i=0; i<totalportfolioitem;i++){
        portfolioitems[i].addEventListener("click",function(){
          itemindex=i;
          changeitem();
          togglelightbox();
        })
      }

      function nextitem(){
        if(itemindex === totalportfolioitem-1){
          itemindex=0;
        }
        else{
          itemindex++;
        }
        changeitem();
      }
      function previtem(){
        if(itemindex === 0){
          itemindex=totalportfolioitem-1;
        }
        else{
          itemindex--;
        }
        changeitem();
      }


      lightbox.addEventListener("click",function(event){
        if(event.target === lightboxclose || event.target === lightbox){
          togglelightbox();
        }
      })

      function togglelightbox(){
        lightbox.classList.toggle("open");
      }

      function changeitem(){
        imgsrc=portfolioitems[itemindex].querySelector(".thumbnail img").getAttribute("src");
        lightboximg.src=imgsrc;
        lightboxtext.innerHTML=portfolioitems[itemindex].querySelector("h4").innerHTML;
        lightboxcounter.innerHTML=(itemindex+1) + " of " + totalportfolioitem;
      }

















/*------------scroll query-------------*/


$(document).ready(function() {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    
    var page1Top = $("#home").offset().top;
    var page2Top = $("#about").offset().top;
    var page3Top = $("#resume").offset().top;
    var page4Top = $("#portfolio").offset().top;
    var page5Top = $("#contact").offset().top;

    if (scrollPos >= page1Top && scrollPos < page2Top) {
      $("#link_1").addClass("active");
      $("#link_2").removeClass("active");
      $("#link_3").removeClass("active");
      $("#link_4").removeClass("active");
      $("#link_5").removeClass("active");
    } else {
      $("#link_1").removeClass("active");
    }

    if (scrollPos >= page2Top && scrollPos < page3Top) {
      $("#link_2").addClass("active");
      $("#link_1").removeClass("active");
      $("#link_3").removeClass("active");
      $("#link_4").removeClass("active");
      $("#link_5").removeClass("active");
    } else {
      $("#link_2").removeClass("active");
    }
    
    if (scrollPos >= page3Top && scrollPos < page4Top) {
      $("#link_3").addClass("active");
      $("#link_1").removeClass("active");
      $("#link_2").removeClass("active");
      $("#link_4").removeClass("active");
      $("#link_5").removeClass("active");
    } else {
      $("#link_3").removeClass("active");
    }
    if (scrollPos >= page4Top && scrollPos < page5Top) {
      $("#link_4").addClass("active");
      $("#link_1").removeClass("active");
      $("#link_2").removeClass("active");
      $("#link_3").removeClass("active");
      $("#link_5").removeClass("active");
    } else {
      $("#link_4").removeClass("active");
    }
    if (scrollPos >= page5Top) {
      $("#link_5").addClass("active");
      $("#link_1").removeClass("active");
      $("#link_2").removeClass("active");
      $("#link_4").removeClass("active");
      $("#link_3").removeClass("active");
    } else {
      $("#link_5").removeClass("active");
    }

  });
});