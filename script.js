// Global variables
let currentPage = 1;
let score = 0;
const targetScore = 10;
let giftsOpened = new Set();
let musicPlaying = false;

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    initializePage1();
    setupEventListeners();
    createSparkles();
});

// Create floating hearts background
function createFloatingHearts() {
    const container = document.getElementById('heartsBackground');
    const hearts = ['❤️', '💕', '💖', '💗', '💝', '💓'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 10000);
    }, 500);
}

// Create sparkle effects
function createSparkles() {
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 2000);
    }, 300);
}

// Page 1: Typing animation
function initializePage1() {
    const texts = [
        "Hi my love ❤️",
        "I have something special for you…",
        "Happy Valentine's Day, my jaan 💕"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    const element = document.getElementById('welcomeText');
    const button = document.getElementById('page1Btn');
    
    function typeText() {
        if (textIndex < texts.length) {
            if (charIndex < texts[textIndex].length) {
                element.innerHTML += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 100);
            } else {
                setTimeout(() => {
                    if (textIndex < texts.length - 1) {
                        element.innerHTML += '<br>';
                        textIndex++;
                        charIndex = 0;
                        setTimeout(typeText, 500);
                    } else {
                        setTimeout(() => {
                            button.classList.remove('hidden');
                            button.style.animation = 'fadeInUp 0.8s ease forwards';
                        }, 500);
                    }
                }, 1000);
            }
        }
    }
    
    typeText();
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('page1Btn').addEventListener('click', () => {
        goToPage('page2');
        playMusic();
    });
    
    document.getElementById('page2Btn').addEventListener('click', () => {
        goToPage('page3');
        initializeGame();
    });
    
    document.getElementById('page3Btn').addEventListener('click', () => {
        goToPage('page4');
    });
    
    // Gift boxes
    document.querySelectorAll('.gift-box').forEach(box => {
        box.addEventListener('click', () => openGift(box));
    });
    
    document.getElementById('allGiftsBtn').addEventListener('click', () => {
        goToPage('page5');
    });
    
    document.getElementById('page5Btn').addEventListener('click', () => {
        goToPage('page6');
        animateLetter();
    });
    
    document.getElementById('page6Btn').addEventListener('click', () => {
        goToPage('page7');
        animateFinalMessage();
    });
    
    document.getElementById('replayBtn').addEventListener('click', () => {
        location.reload();
    });
}

// Navigate between pages
function goToPage(pageId) {
    const currentPageEl = document.querySelector('.page.active');
    const nextPageEl = document.getElementById(pageId);
    
    if (currentPageEl) {
        currentPageEl.classList.remove('active');
        currentPageEl.classList.add('slide-out-left');
        
        setTimeout(() => {
            currentPageEl.classList.remove('slide-out-left');
        }, 800);
    }
    
    setTimeout(() => {
        nextPageEl.classList.add('active');
        nextPageEl.classList.add('slide-in-right');
        
        setTimeout(() => {
            nextPageEl.classList.remove('slide-in-right');
        }, 800);
    }, 100);
}

// Play background music
function playMusic() {
    if (!musicPlaying) {
        const music = document.getElementById('bgMusic');
        music.volume = 0.3;
        music.play().catch(err => console.log('Music autoplay blocked'));
        musicPlaying = true;
    }
}

// Heart Pop Game
function initializeGame() {
    const gameArea = document.getElementById('gameArea');
    const hearts = ['❤️', '💕', '💖', '💗', '💝', '💓', '💘'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'game-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * (gameArea.offsetWidth - 50) + 'px';
        heart.style.top = Math.random() * (gameArea.offsetHeight - 50) + 'px';
        
        heart.addEventListener('click', () => {
            popHeart(heart);
        });
        
        gameArea.appendChild(heart);
        
        // Remove heart after some time
        setTimeout(() => {
            if (heart.parentNode) {
                heart.remove();
                if (score < targetScore) {
                    createHeart();
                }
            }
        }, 3000);
    }
    
    function popHeart(heart) {
        score++;
        document.getElementById('score').textContent = score;
        
        // Animation
        heart.style.transform = 'scale(1.5)';
        heart.style.opacity = '0';
        
        setTimeout(() => heart.remove(), 300);
        
        // Create particle effect
        createParticles(heart.offsetLeft, heart.offsetTop);
        
        if (score >= targetScore) {
            setTimeout(() => {
                gameArea.innerHTML = '';
                document.getElementById('gameComplete').classList.remove('hidden');
            }, 500);
        } else {
            createHeart();
        }
    }
    
    // Start with multiple hearts
    for (let i = 0; i < 5; i++) {
        setTimeout(() => createHeart(), i * 200);
    }
}

// Create particle effect
function createParticles(x, y) {
    const gameArea = document.getElementById('gameArea');
    const colors = ['#FF69B4', '#FFB6C1', '#FF1493', '#DDA0DD'];
    
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '5px';
        particle.style.height = '5px';
        particle.style.borderRadius = '50%';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.pointerEvents = 'none';
        
        const angle = (Math.PI * 2 * i) / 10;
        const velocity = 50 + Math.random() * 50;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        gameArea.appendChild(particle);
        
        let posX = x;
        let posY = y;
        let opacity = 1;
        
        const animate = () => {
            posX += vx * 0.05;
            posY += vy * 0.05;
            opacity -= 0.02;
            
            particle.style.left = posX + 'px';
            particle.style.top = posY + 'px';
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        
        animate();
    }
}

// Open gift
function openGift(giftBox) {
    const giftNumber = giftBox.dataset.gift;
    
    if (giftsOpened.has(giftNumber)) {
        // Already opened, just show the page again
        goToPage('gift' + giftNumber);
        return;
    }
    
    // Mark as opened
    giftsOpened.add(giftNumber);
    giftBox.classList.add('opened');
    
    // Celebration animation
    createCelebration(giftBox);
    
    // Navigate to gift page
    setTimeout(() => {
        goToPage('gift' + giftNumber);
    }, 800);
    
    // Check if all gifts opened
    if (giftsOpened.size === 3) {
        setTimeout(() => {
            document.getElementById('allGiftsBtn').classList.remove('hidden');
        }, 1000);
    }
}

// Create celebration effect
function createCelebration(element) {
    const rect = element.getBoundingClientRect();
    const hearts = ['❤️', '💕', '💖', '💗', '💝'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = rect.left + rect.width / 2 + 'px';
        heart.style.top = rect.top + rect.height / 2 + 'px';
        heart.style.fontSize = '30px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        
        document.body.appendChild(heart);
        
        const angle = (Math.PI * 2 * i) / 15;
        const distance = 100 + Math.random() * 100;
        const endX = rect.left + rect.width / 2 + Math.cos(angle) * distance;
        const endY = rect.top + rect.height / 2 + Math.sin(angle) * distance;
        
        heart.animate([
            { 
                transform: 'translate(0, 0) scale(1) rotate(0deg)',
                opacity: 1 
            },
            { 
                transform: `translate(${endX - rect.left - rect.width/2}px, ${endY - rect.top - rect.height/2}px) scale(1.5) rotate(360deg)`,
                opacity: 0 
            }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => heart.remove();
    }
}

// Animate love letter
function animateLetter() {
    const letterContent = document.getElementById('letterContent');
    const originalText = letterContent.innerHTML;
    letterContent.innerHTML = '';
    
    let index = 0;
    const interval = setInterval(() => {
        if (index < originalText.length) {
            letterContent.innerHTML += originalText.charAt(index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 30);
}

// Animate final message
function animateFinalMessage() {
    const messages = document.querySelectorAll('.final-message .fade-in-text');
    messages.forEach((msg, index) => {
        setTimeout(() => {
            msg.style.animation = 'fadeInUp 1.5s ease forwards';
        }, index * 1500);
    });
}

// Image placeholder handler
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        // Create a placeholder gradient
        const parent = e.target.parentElement;
        if (parent.classList.contains('photo-item')) {
            e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            e.target.style.display = 'flex';
            e.target.style.alignItems = 'center';
            e.target.style.justifyContent = 'center';
            e.target.alt = '📷 Add Photo Here';
            e.target.style.color = 'white';
            e.target.style.fontSize = '2rem';
        }
    }
}, true);

// Add click sound effect (optional)
function playClickSound() {
    // You can add a click sound here if desired
    // const audio = new Audio('assets/sounds/click.mp3');
    // audio.play();
}

// Add hover effects to buttons
document.querySelectorAll('.romantic-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transition = 'all 0.3s ease';
    });
});

console.log('💕 Valentine\'s Day website loaded! 💕');
