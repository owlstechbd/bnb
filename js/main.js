//number0f bedroom

document.querySelectorAll('.beds-count-select-button').forEach(button => {
  button.addEventListener('click', function() {
      const input = this.parentElement.querySelector('.as-stepper__input');
      let value = parseInt(input.value) || 0; // Start with 0 if the field is empty
      if (this.getAttribute('data-type') === 'minus') {
          value = Math.max(0, value - 1); // Allow the value to go down to 0
      } else if (this.getAttribute('data-type') === 'plus') {
          value = Math.min(10, value + 1); // Start from 1, then increase
      }
      input.value = value;
  });
});

//popup from

// Get the modal
var modal = document.getElementById("popupForm");

// Get the button that opens the modal
var btn = document.getElementById("openPopupBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeBtn")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// animation

  new WOW().init();