const images = document.querySelectorAll('.carousel img');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        const dots = document.querySelectorAll('.dot');
        let index = 0;

        function showSlide(newIndex) {
            images[index].classList.remove('active');
            dots[index].classList.remove('active');
            index = (newIndex + images.length) % images.length;
            images[index].classList.add('active');
            dots[index].classList.add('active');
        }

        nextBtn.addEventListener('click', () => showSlide(index + 1));
        prevBtn.addEventListener('click', () => showSlide(index - 1));

        setInterval(() => showSlide(index + 1), 5000);