let navbar = document .querySelector ('.navbar');
document.querySelector ('#menu-btn') .onclick = () =>{
   navbar .classList .toggle('active');
   searchbar.classList.remove('active');
   cartbar.classList.remove('active');
} 
window .onscroll= () =>{
   navbar.classList.remove('active');
   searchbar.classList.remove('active');
   cartbar.classList.remove('active');
}

$(document).ready(function(){
   $('.carousel').carousel({
      padding: 900
   });
   autoplay();
   function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 5000);
   }
 });


