const snowflakes = 1000;
const body = document.body;

document.addEventListener("DOMContentLoaded", () => {
    const toggleSnowButton = document.getElementById("toggle-snow");
    let snowEnabled = true;

    // функция создания снежинок
    const createSnowflake = () => {
        for (let i = 0; i < 5; i++) { // создаём 5 снежинок за один раз
            const snowflake = document.createElement("div");
            snowflake.classList.add("snowflake");
            snowflake.textContent = "❄";
            snowflake.style.left = Math.random() * 100 + "vw";
            snowflake.style.fontSize = Math.random() * 20 + 10 + "px"; // случайный размер
            snowflake.style.animationDuration = Math.random() * 10 + 2 + "s"; // разная скорость
            body.appendChild(snowflake);

            // удаляем снежинку при клике
            snowflake.addEventListener("click", () => {
                snowflake.remove();
            });

            // удаление после завершения анимации
            setTimeout(() => {
                snowflake.remove();
            }, 30000);
        }
    };

    // создаём снежинки с более коротким интервалом
    const snowInterval = setInterval(() => {
        if (snowEnabled) {
            createSnowflake();
        }
    }, 200); // интервал уменьшен для большего количества снежинок

    // создаём снежинки сразу при загрузке
    for (let i = 0; i < 50; i++) {
        createSnowflake();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const modal1 = document.getElementById("modal-1");
    const modal2 = document.getElementById("modal-2");
    const openModal1 = document.getElementById("open-modal-1");
    const openModal2 = document.getElementById("open-modal-2");
    const closeModal1 = document.getElementById("close-modal-1");
    const closeModal2 = document.getElementById("close-modal-2");

    // Открытие модальных окон
    openModal1.addEventListener("click", () => modal1.classList.add("show"));
    openModal2.addEventListener("click", () => modal2.classList.add("show"));

    // Закрытие модальных окон
    closeModal1.addEventListener("click", () => modal1.classList.remove("show"));
    closeModal2.addEventListener("click", () => modal2.classList.remove("show"));
});


document.addEventListener("DOMContentLoaded", () => {
    const modal1 = document.getElementById("modal-1");
    const modal2 = document.getElementById("modal-2");
    const openModal1 = document.getElementById("open-modal-1");
    const openModal2 = document.getElementById("open-modal-2");
    const closeModal1 = document.getElementById("close-modal-1");
    const closeModal2 = document.getElementById("close-modal-2");
    const gift = document.getElementById("gift");
    const giftContent = document.getElementById("gift-content");

    // конфети функция
    const launchConfetti = () => {
        const duration = 2 * 1000;
        const end = Date.now() + duration;
        const colors = ["#bb0000", "#ffffff"];

        (function frame() {
            confetti({
                particleCount: 4,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors,
            });
            confetti({
                particleCount: 4,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors,
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    };

    // открытие и закрытие модалок
    openModal1.addEventListener("click", () => (modal1.style.display = "flex"));
    openModal2.addEventListener("click", () => (modal2.style.display = "flex"));
    closeModal1.addEventListener("click", () => (modal1.style.display = "none"));
    closeModal2.addEventListener("click", () => (modal2.style.display = "none"));

    // открытие подарка
    gift.addEventListener("click", () => {
        gift.style.display = "none";
        giftContent.style.display = "block";
        launchConfetti();
    });
});


closeModal1.addEventListener("click", () => {
    modal1.classList.add("hide");
    setTimeout(() => modal1.classList.remove("show", "hide"), 300);
});

particlesJS.load("particles-js", "particles-config.json", function () {
    console.log("Particles loaded.");
});

gift.addEventListener("click", () => {
    const flash = document.getElementById("flash");
    flash.classList.add("flash");
    setTimeout(() => flash.classList.remove("flash"), 500);
    giftSound.play();
    gift.style.display = "none";
    giftContent.style.display = "block";
    launchConfetti();
});
