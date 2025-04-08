document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-btn');
    const content = document.querySelector('.content'); // Get the content element
  
    toggleBtn.addEventListener('click', function() {
      sidebar.classList.toggle('open');
      if (sidebar.classList.contains('open')) {
        content.style.marginLeft = '250px'; // Set margin when open
      } else {
        content.style.marginLeft = '0'; // Remove margin when closed
      }
    });
  });