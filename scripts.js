document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Thank you for reaching out to us!');
      form.reset();
    });
});
