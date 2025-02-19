
document.addEventListener('DOMContentLoaded', function() {
  const startButtons = document.querySelectorAll('.quiz-start-button');
  
  startButtons.forEach(button => {
      button.addEventListener('click', function(e) {
          this.disabled = true;
          this.textContent = 'Loading...';
          this.closest('form').submit();
      });
  });
});