document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-btn');
    const content = document.querySelector('.content');

    if (!sidebar || !toggleBtn || !content) {
        console.warn('Sidebar elements not found');
        return;
    }

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        
        // Adjust content margin based on screen size
        if (sidebar.classList.contains('open')) {
            if (window.innerWidth > 768) {
                content.style.marginLeft = '250px';
            } else {
                content.style.marginLeft = '0';
            }
            content.classList.add('sidebar-open');
        } else {
            content.style.marginLeft = '0';
            content.classList.remove('sidebar-open');
        }
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768 && 
            sidebar.classList.contains('open') && 
            !sidebar.contains(event.target) && 
            !toggleBtn.contains(event.target)) {
            sidebar.classList.remove('open');
            content.style.marginLeft = '0';
            content.classList.remove('sidebar-open');
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            content.style.marginLeft = '0';
        } else if (sidebar.classList.contains('open')) {
            content.style.marginLeft = '250px';
        }
    });
});