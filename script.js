// Custom Cursor
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with animations
document.querySelectorAll('.timeline-item, .work-item, .video-item, .testimonial-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    observer.observe(el);
});

// Smooth hover effect for cursor
document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        const cursor = document.querySelector('.cursor');
        cursor.style.transform = `translate(${el.offsetLeft}px, ${el.offsetTop}px) scale(1.5)`;
        cursor.style.borderColor = '#0000ff';
    });
    
    el.addEventListener('mouseleave', () => {
        const cursor = document.querySelector('.cursor');
        cursor.style.transform = 'scale(1)';
        cursor.style.borderColor = '#7ec8e3';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.querySelector(".hero h1");
    const nameText = "Nikhil Lohani";
    let index = 0;

    function typeEffect() {
        if (index < nameText.length) {
            nameElement.textContent += nameText[index];
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    nameElement.textContent = ""; // Clear existing text
    typeEffect();
});

document.addEventListener("DOMContentLoaded", function() {
    const sparkContainer = document.createElement("div");
    sparkContainer.classList.add("sparks");
    document.querySelector(".hero").appendChild(sparkContainer);

    function createSpark() {
        const spark = document.createElement("div");
        spark.classList.add("spark");
        spark.style.left = Math.random() * 100 + "vw";
        spark.style.bottom = "0px";
        spark.style.animationDuration = (Math.random() * 2 + 1.5) + "s";
        sparkContainer.appendChild(spark);

        setTimeout(() => {
            spark.remove();
        }, 3000);
    }

    setInterval(createSpark, 250);
});

document.addEventListener("DOMContentLoaded", function() {
    // Fire-Like Sparks
    const sparkContainer = document.createElement("div");
    sparkContainer.classList.add("sparks");
    document.querySelector(".hero").appendChild(sparkContainer);

    function createSpark() {
        const spark = document.createElement("div");
        spark.classList.add("spark");
        spark.style.left = Math.random() * 100 + "vw";
        spark.style.bottom = "0px";
        spark.style.animationDuration = (Math.random() * 2 + 1.5) + "s";
        sparkContainer.appendChild(spark);

        setTimeout(() => {
            spark.remove();
        }, 3000);
    }

    setInterval(createSpark, 250);

    // Falling Stars
    const starContainer = document.createElement("div");
    starContainer.classList.add("falling-stars");
    document.querySelector(".hero").appendChild(starContainer);

    function createFallingStar() {
        const star = document.createElement("div");
        star.classList.add("falling-star");
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = "-10vh";
        star.style.animationDuration = (Math.random() * 3 + 1) + "s";
        starContainer.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 3000);
    }

    setInterval(createFallingStar, 1500);

    // Electric Sparks
    const electricContainer = document.createElement("div");
    electricContainer.classList.add("electric-sparks");
    document.querySelector(".hero").appendChild(electricContainer);

    function createElectricSpark() {
        const spark = document.createElement("div");
        spark.classList.add("electric-spark");
        spark.style.left = Math.random() * 100 + "vw";
        spark.style.top = Math.random() * 100 + "vh";
        spark.style.animationDuration = (Math.random() * 1.5 + 0.5) + "s";
        electricContainer.appendChild(spark);

        setTimeout(() => {
            spark.remove();
        }, 2000);
    }

    setInterval(createElectricSpark, 1000);
});




