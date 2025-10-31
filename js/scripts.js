/*!
    * Enhanced Portfolio Scripts with Modern Animations
    * Enhanced for professional portfolio experience
    */
    (function($) {
    "use strict";

    // Initialize everything when document is ready
    $(document).ready(function() {
        initScrollAnimations();
        initNavigation();
        initSkillsAnimation();
        initTypingEffect();
        initParallaxEffect();
    });

    // Smooth scrolling with enhanced easing
    function initNavigation() {
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
                        scrollTop: (target.offset().top - 80)
                    }, 400, "easeInOutCubic");
          return false;
        }
      }
    });
  
        // Enhanced navbar behavior
        var navbarCollapse = function() {
            var navbar = $("#mainNav");
            if ($(window).scrollTop() > 100) {
                navbar.addClass("navbar-shrink");
                navbar.css({
                    'background': 'rgba(255, 255, 255, 0.98)',
                    'box-shadow': '0 2px 20px rgba(0,0,0,0.1)'
                });
            } else {
                navbar.removeClass("navbar-shrink");
                navbar.css({
                    'background': 'rgba(255, 255, 255, 0.95)',
                    'box-shadow': 'none'
                });
            }
        };

        navbarCollapse();
        $(window).scroll(navbarCollapse);

        // Close mobile menu when clicking a link
        $('.js-scroll-trigger').click(function() {
            $('.navbar-collapse').collapse('hide');
        });

        // Active nav link highlighting
        $('body').scrollspy({
            target: '#mainNav',
            offset: 100
        });
    }

    // Scroll animations for elements
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-on-scroll');
                    
                    // Simplified stagger effect
                    if (entry.target.classList.contains('stagger-children')) {
                        const children = entry.target.children;
                        Array.from(children).forEach((child, index) => {
                            setTimeout(() => {
                                child.classList.add('animate-on-scroll');
                            }, index * 50); // Reduced delay for professional look
                        });
                    }
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.section-header, .project-card, .experience-item, .achievement-card, .skill-item, .contact-item');
        animateElements.forEach(el => observer.observe(el));

        // Special handling for skills categories
        const skillsCategories = document.querySelectorAll('.skill-category');
        skillsCategories.forEach(category => {
            category.classList.add('stagger-children');
            observer.observe(category);
        });
    }

    // Enhanced animated skills with staggered entrance and interactive effects
    function initSkillsAnimation() {
        const skillCategories = document.querySelectorAll('.skill-category');
        const skillItems = document.querySelectorAll('.skill-item');
        
        // Intersection Observer for skills categories
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Minimal professional animation
                    const skillItems = entry.target.querySelectorAll('.skill-item');
                    skillItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate-skill');
                        }, index * 20); // Very fast, professional timing
                    });
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        // Observe each skill category
        skillCategories.forEach(category => {
            skillsObserver.observe(category);
        });
        
        // Enhanced hover effects
        skillItems.forEach((item, index) => {
            // Simplified hover effects - no floating animation to prevent conflicts
            
            // Mouse enter effect
            item.addEventListener('mouseenter', function() {
                // Ensure visibility
                this.style.opacity = '1';
                this.style.visibility = 'visible';
                
                // Show skill tooltip (if you want to add tooltips later)
                const skillName = this.getAttribute('data-skill');
                console.log(`Hovering over: ${skillName}`);
            });
            
            // Mouse leave effect
            item.addEventListener('mouseleave', function() {
                // Maintain visibility
                this.style.opacity = '1';
                this.style.visibility = 'visible';
            });
            
            // Click effect for mobile
            item.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 50);
            });
        });
        
        // Add skill level indicators
        addSkillLevelIndicators();
    }
    
    // Add visual skill level indicators
    function addSkillLevelIndicators() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach(item => {
            const skillLevel = item.classList.contains('skill-expert') ? 'Expert' :
                             item.classList.contains('skill-advanced') ? 'Advanced' : 'Intermediate';
            
            // Create tooltip element
            const tooltip = document.createElement('div');
            tooltip.className = 'skill-tooltip';
            tooltip.textContent = skillLevel;
            tooltip.style.cssText = `
                position: absolute;
                top: -35px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 5px 10px;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.3s ease;
                z-index: 1000;
            `;
            
            item.style.position = 'relative';
            item.appendChild(tooltip);
            
            // Show/hide tooltip on hover
            item.addEventListener('mouseenter', () => {
                tooltip.style.opacity = '1';
            });
            
            item.addEventListener('mouseleave', () => {
                tooltip.style.opacity = '0';
            });
        });
    }

    // Removed typing effect for professional presentation
    function initTypingEffect() {
        // Typing effect disabled for cleaner professional look
    }

    // Parallax effect for hero section - Disabled to fix positioning
    function initParallaxEffect() {
        // Parallax effect disabled to prevent photo positioning issues
        // $(window).scroll(function() {
        //     const scrolled = $(window).scrollTop();
        //     const heroImage = $('.hero-image');
        //     
        //     if (heroImage.length && scrolled < window.innerHeight) {
        //         const parallax = scrolled * 0.5;
        //         heroImage.css('transform', `translateY(${parallax}px) scale(1)`);
        //     }
        // });
    }

    // Enhanced jQuery easing
    $.extend($.easing, {
        easeInOutCubic: function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        }
    });

    // Enhanced counter animation with formatting
    function animateCounters() {
        $('.counter, .stat-number').each(function() {
            const $this = $(this);
            const countTo = parseInt($this.attr('data-count'));
            
            $({ countNum: 0 }).animate({
                countNum: countTo
            }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    const num = Math.floor(this.countNum);
                    // Format large numbers with commas and + suffix
                    if (num >= 1000) {
                        $this.text(num.toLocaleString() + '+');
                    } else {
                        $this.text(num + '+');
                    }
                },
                complete: function() {
                    if (countTo >= 1000) {
                        $this.text(countTo.toLocaleString() + '+');
                    } else {
                        $this.text(countTo + '+');
                    }
                }
            });
        });
    }

    // Simplified professional hover effects - handled via CSS only

    // Back to top button with smooth scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    $('.scroll-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 300, 'easeInOutCubic');
        return false;
    });

    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 600, 'easeInOutCubic');
        });
    }
    
    // Loading animation
    $(window).on('load', function() {
        $('.hero-section').addClass('animate-on-scroll');
    });

})(jQuery);
  