   // script.js

   document.addEventListener('DOMContentLoaded', () => {
     const addToCartButtons = document.querySelectorAll('.add-to-cart');

     addToCartButtons.forEach(button => {
       button.addEventListener('click', () => {
         alert('Item added to cart!');
         // Additional functionality can be added here
       });
     });
   });
   
   

document.querySelectorAll('.favorite-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('favorited');
    alert("Added to favorites!");
  });
});
