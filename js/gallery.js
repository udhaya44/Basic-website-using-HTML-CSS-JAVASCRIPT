document.addEventListener('DOMContentLoaded', function() {
    const figures = document.querySelectorAll('figure');

    figures.forEach(figure => {
        const images = figure.querySelectorAll('.image-container img');
        let activeIndex = 0;

        figure.querySelector('.prev').addEventListener('click', () => {
            images[activeIndex].classList.remove('active');
            activeIndex = (activeIndex - 1 + images.length) % images.length;
            images[activeIndex].classList.add('active');
        });

        figure.querySelector('.next').addEventListener('click', () => {
            images[activeIndex].classList.remove('active');
            activeIndex = (activeIndex + 1) % images.length;
            images[activeIndex].classList.add('active');
        });
    });
});
