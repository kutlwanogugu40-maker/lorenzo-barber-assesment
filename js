document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log('Navigating to: ' + link.getAttribute('href'));
        });
    });

    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Booking submitted successfully.');
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (event) => {
            const name = document.getElementById('name').value;
            if (name === "") {
                event.preventDefault();
                alert("Please enter your name to book.");
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-grid img');
    
    images.forEach(img => {
        img.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = 'rgb(230, 220, 220)';
            overlay.style.display = 'flex';
            overlay.style.justifyContent = 'center';
            overlay.style.alignItems = 'center';
            overlay.style.zIndex = '1000';
            
            const fullImg = document.createElement('img');
            fullImg.src = img.src;
            fullImg.style.maxWidth = '90%';
            fullImg.style.maxHeight = '90%';
            
            overlay.appendChild(fullImg);
            document.body.appendChild(overlay);
            
            overlay.addEventListener('click', () => {
                overlay.remove();
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.querySelector('.booking-form');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            const name = document.getElementById('name').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;

            if (name === "" || date === "" || time === "") {
                e.preventDefault();
                alert("Please fill in all fields before confirming your booking.");
            } else {
                console.log("Booking details captured for: " + name);
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    let seconds = 5;
    const countdownElement = document.getElementById('countdown');

    const timer = setInterval(() => {
        seconds--;
        countdownElement.textContent = seconds;
        console.log("Counting down: " + seconds + " seconds remaining.");
        if (seconds <= 0) {
            clearInterval(timer);
            window.location.href = 'index.html';
        }
    }, 1000);
});
document.addEventListener('DOMContentLoaded', () => {
    const storySection = document.querySelector('.story-content');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    if (storySection) {
        storySection.style.opacity = '0';
        storySection.style.transform = 'translateY(50px)';
        storySection.style.transition = 'all 1s ease-out';
        observer.observe(storySection);
    }
});
const lightbox = document.getElementById('lightbox');
const fullImg = document.getElementById('full-img');
const items = document.querySelectorAll('.gallery-item');
const closeBtn = document.querySelector('.close');

items.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        fullImg.src = item.src; // Loads the image file from your folder
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
