document.addEventListener("DOMContentLoaded", function() {
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });

    fetch('components/dark-mode-switch.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('dark-mode-switch').innerHTML = data;
            const toggle = document.getElementById('dark-mode-toggle');
            const sunIcon = document.querySelector('.sun');
            const moonIcon = document.querySelector('.moon');

            if (localStorage.getItem('darkMode') === 'enabled') {
                document.body.classList.add('dark-mode');
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            }

            toggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                if (document.body.classList.contains('dark-mode')) {
                    localStorage.setItem('darkMode', 'enabled');
                    sunIcon.style.display = 'none';
                    moonIcon.style.display = 'block';
                } else {
                    localStorage.setItem('darkMode', 'disabled');
                    sunIcon.style.display = 'block';
                    moonIcon.style.display = 'none';
                }
            });
        });

    document.querySelectorAll('.toggle-button').forEach(button => {
        button.addEventListener('click', () => {
            const project = button.closest('.project');
            project.classList.toggle('expanded');
            button.textContent = project.classList.contains('expanded') ? 'Show Less' : 'Show More';
        });
    });

    loadContent('about');
});

function loadContent(page) {
    fetch(page + '.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
        });
}
