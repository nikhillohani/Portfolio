const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

let mouseX = 0, mouseY = 0;
let outlineX = 0, outlineY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;

    createTrail(mouseX, mouseY); // spark trail on move
});

function animate() {
    outlineX += (mouseX - outlineX) * 0.2;
    outlineY += (mouseY - outlineY) * 0.2;
    outline.style.transform = `translate(${outlineX - 17}px, ${outlineY - 17}px)`;
    requestAnimationFrame(animate);
}
animate();

// Hover effect
const hoverTargets = document.querySelectorAll("a, button, .hover-target");
hoverTargets.forEach(el => {
    el.addEventListener("mouseenter", () => {
        document.body.classList.add("cursor-hover");
    });
    el.addEventListener("mouseleave", () => {
        document.body.classList.remove("cursor-hover");
    });
});

// 💫 Spark Trail Function
function createTrail(x, y) {
    const trail = document.createElement("div");
    trail.classList.add("cursor-trail");
    document.body.appendChild(trail);
    trail.style.left = x + "px";
    trail.style.top = y + "px";

    setTimeout(() => {
        trail.remove();
    }, 500);
}



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




