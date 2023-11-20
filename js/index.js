document.addEventListener('DOMContentLoaded', function () {
    let toggle = document.getElementById('darkModeToggle');
    let label = document.getElementById('darkModeLabel');

    toggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode', this.checked);

        if (this.checked) {
            label.textContent = 'Disable Dark Mode';
        } else {
            label.textContent = 'Enable Dark Mode';
        }
    });
});
