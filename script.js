  document.addEventListener('DOMContentLoaded', () => {
            // Mobile Menu Toggle
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu');

            btn.addEventListener('click', () => {
                menu.classList.toggle('hidden');
            });

            // Smooth Scrolling for Anchors
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    menu.classList.add('hidden'); // Close mobile menu on click
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

            // Form Handling (Prevent Default)
            document.getElementById('contactForm').addEventListener('submit', function(e) {
                e.preventDefault();
                const btn = this.querySelector('button');
                const originalText = btn.innerText;
                
                btn.innerText = 'Message Sent!';
                btn.classList.add('bg-green-600');
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.classList.remove('bg-green-600');
                    this.reset();
                }, 3000);
            });

            // Intersection Observer for Fade-in Animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);    

            document.querySelectorAll('.fade-in-section').forEach(section => {
                observer.observe(section);
            });

            // Navbar Scroll Effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('shadow-md');
                } else {
                    navbar.classList.remove('shadow-md');
                }
            });
        });