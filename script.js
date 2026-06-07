document.addEventListener("DOMContentLoaded", () => {
    // Scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    animatedElements.forEach(el => observer.observe(el));

    // Form submission
    const form = document.getElementById('lead-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        
        // Simulating API call
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Đang gửi...';
        btn.disabled = true;

        setTimeout(() => {
            formMessage.innerText = `Cảm ơn ${name}! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.`;
            formMessage.className = 'form-message success';
            form.reset();
            btn.innerText = originalText;
            btn.disabled = false;
        }, 1500);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });
});
