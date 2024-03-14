// Код для карусели на главной странице
var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    keyboard: {
        enabled: true,
    },
    mousewheel: {
        thresholdDelta: 70,
    },
    spaceBetween: 60,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
document.addEventListener('DOMContentLoaded', function () {
    const runawayBtn = document.querySelector('#runawayBtn');

    runawayBtn.addEventListener('mouseenter', () => {
        moveRunawayButton();
    });

    runawayBtn.addEventListener('click', () => {
        alert('Дякую за вашу допомогу у вдосконаленні телеметрії та покращенні роботи наших служб безпеки. Тепер ми знаємо дуже багато про вас! 😈');
    });

    function moveRunawayButton() {
        runawayBtn.style.left = `${random(0, 90)}%`;
        runawayBtn.style.top = `${random(0, 90)}%`;
    }

    // функция random
    function random(min, max) {
        const rand = min + Math.random() * (max - min + 1);
        return Math.floor(rand);
    }
});
document.getElementById('runawayBtn').addEventListener('click', function() {
    // запрорс гео микро и вебкамера
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // микрофон
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(function(stream) {
                console.log('Доступ к микрофону разрешен');
            })
            .catch(function(error) {
                console.error('Ошибка при запросе доступа к микрофону:', error);
            });

        // вебка
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                console.log('Доступ к веб-камере разрешен');
            })
            .catch(function(error) {
                console.error('Ошибка при запросе доступа к веб-камере:', error);
            });
    } else {
        console.error('Ваш браузер не поддерживает getUserMedia API');
    }

    // гео
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log('Доступ к геолокации разрешен');
        }, function(error) {
            console.error('Ошибка при запросе доступа к геолокации:', error);
        });
    } else {
        console.error('Ваш браузер не поддерживает геолокацию');
    }
});
