// ==========================================
// ENHANCEMENT: JavaScript Features
// ==========================================

// Global variables for enhancements
let musicPlaying = false;
let giftsOpenedCount = 0;

// ==========================================
// LOADING SCREEN
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    const hasVisited = localStorage.getItem('valentineVisited');

    if (!hasVisited) {
        // First visit - show loading screen
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            localStorage.setItem('valentineVisited', 'true');
        }, 2500);
    } else {
        // Already visited - hide immediately
        loadingScreen.style.display = 'none';
    }

    initializeEnhancements();
});

// ==========================================
// INITIALIZE ALL ENHANCEMENTS
// ==========================================
function initializeEnhancements() {
    setupMusicToggle();
    setupYesNoChoice();
    setupGoldenHeart();
    setup4thGift();
    setupHiddenHeart();
    setupFinalPageEnhancements();
    addClickAnimations();
}

// ==========================================
// MUSIC TOGGLE
// ==========================================
function setupMusicToggle() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');

    musicToggle.addEventListener('click', () => {
        if (musicPlaying) {
            bgMusic.pause();
            musicToggle.textContent = '🔇';
            musicPlaying = false;
        } else {
            bgMusic.play().catch(err => console.log('Music play blocked'));
            musicToggle.textContent = '🎵';
            musicPlaying = true;
        }

        // Add bounce animation
        musicToggle.classList.add('btn-click-bounce');
        setTimeout(() => musicToggle.classList.remove('btn-click-bounce'), 300);
    });
}

// ==========================================
// YES/NO CHOICE - Entry Page
// ==========================================
function setupYesNoChoice() {
    const page1Btn = document.getElementById('page1Btn');
    const choiceContainer = document.getElementById('choiceContainer');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const niceTryMsg = document.getElementById('niceTryMsg');

    // OPTION 1: Keep original button functionality (no YES/NO choice)
    // Comment this block out if you want the YES/NO feature

    // OPTION 2: Use YES/NO choice
    // Wait for typing animation to complete, then swap button for choices
    // The typing takes about 7-8 seconds total:
    // "Hi my love ❤️" (1.5s) + "I have something special for you…" (3.5s) + "Happy Valentine's Day, my jaan 💕" (3.5s)

    setTimeout(() => {
        if (page1Btn && !page1Btn.classList.contains('hidden')) {
            page1Btn.style.display = 'none'; // Hide original button
            choiceContainer.classList.remove('hidden'); // Show choices
        }
    }, 7500); // Show after typing completes

    // NO button - dodge on hover/click
    let noDodgeCount = 0;
    const dodgeNo = () => {
        const maxX = window.innerWidth - noBtn.offsetWidth - 40;
        const maxY = window.innerHeight - noBtn.offsetHeight - 40;
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
        noBtn.style.transition = 'all 0.3s ease';

        noDodgeCount++;
        if (noDodgeCount >= 3) {
            niceTryMsg.classList.remove('hidden');
        }
    };

    noBtn.addEventListener('mouseenter', dodgeNo);
    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        dodgeNo();
    });

    // YES button - create heart explosion and proceed
    yesBtn.addEventListener('click', () => {
        createHeartExplosion(yesBtn);
        createConfetti();

        setTimeout(() => {
            goToPage('page2');
            // Don't call playMusic() here - let the original flow handle it
        }, 1000);
    });
}

// ==========================================
// GOLDEN HEART - Game Enhancement
// ==========================================
function setupGoldenHeart() {
    // Modify the existing game initialization
    const originalInitializeGame = window.initializeGame;

    window.initializeGame = function () {
        const gameArea = document.getElementById('gameArea');
        const hearts = ['❤️', '💕', '💖', '💗', '💝', '💓', '💘'];
        let goldenHeartCreated = false;

        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'game-heart';

            // 10% chance for golden heart
            const isGolden = !goldenHeartCreated && Math.random() < 0.1;
            if (isGolden) {
                heart.classList.add('golden-heart');
                heart.textContent = '🧡';
                goldenHeartCreated = true;
            } else {
                heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            }

            heart.style.left = Math.random() * (gameArea.offsetWidth - 70) + 'px';
            heart.style.top = Math.random() * (gameArea.offsetHeight - 70) + 'px';

            heart.addEventListener('click', () => {
                if (isGolden) {
                    showBonusPopup();
                    createConfetti();
                }
                popHeart(heart);
            });

            gameArea.appendChild(heart);

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

            // Enhanced sparkle explosion
            createSparkleExplosion(heart.offsetLeft, heart.offsetTop);

            heart.style.transform = 'scale(1.5)';
            heart.style.opacity = '0';

            setTimeout(() => heart.remove(), 300);

            createParticles(heart.offsetLeft, heart.offsetTop);

            if (score >= targetScore) {
                setTimeout(() => {
                    gameArea.innerHTML = '';
                    document.getElementById('gameComplete').classList.remove('hidden');
                    createConfetti();
                }, 500);
            } else {
                createHeart();
            }
        }

        // Start with multiple hearts
        for (let i = 0; i < 5; i++) {
            setTimeout(() => createHeart(), i * 200);
        }
    };
}

function showBonusPopup() {
    const bonusPopup = document.getElementById('bonusPopup');
    bonusPopup.classList.remove('hidden');

    document.getElementById('closeBonusBtn').addEventListener('click', () => {
        bonusPopup.classList.add('hidden');
    }, { once: true });
}

function createSparkleExplosion(x, y) {
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 2000);
    }
}

// ==========================================
// 4TH GIFT BOX
// ==========================================
function setup4thGift() {
    // Override existing gift opening function
    const originalOpenGift = window.openGift;

    window.openGift = function (giftBox) {
        const giftNumber = giftBox.dataset.gift;

        // Check if gift 4 is locked
        if (giftNumber === '4' && giftBox.classList.contains('locked')) {
            return; // Don't open if locked
        }

        if (!giftsOpened.has(giftNumber)) {
            giftsOpened.add(giftNumber);
            giftsOpenedCount++;
            giftBox.classList.add('opened');

            createCelebration(giftBox);

            setTimeout(() => {
                goToPage('gift' + giftNumber);
            }, 800);

            // Unlock 4th gift when first 3 are opened
            if (giftsOpenedCount === 3) {
                unlock4thGift();
            }

            // Check if all gifts opened (now 4)
            if (giftsOpened.size === 4) {
                setTimeout(() => {
                    document.getElementById('allGiftsBtn').classList.remove('hidden');
                }, 1000);
            }
        } else {
            // Already opened, just show the page
            goToPage('gift' + giftNumber);
        }
    };
}

function unlock4thGift() {
    const gift4 = document.querySelector('.gift-box[data-gift="4"]');
    if (gift4) {
        gift4.classList.add('unlock-animation');

        setTimeout(() => {
            gift4.classList.remove('locked', 'unlock-animation');
            const lockIcon = gift4.querySelector('.lock-icon');
            if (lockIcon) lockIcon.remove();

            createConfetti();
        }, 1000);
    }
}

// ==========================================
// HIDDEN FLOATING HEART - Easter Egg
// ==========================================
function setupHiddenHeart() {
    const hiddenHeart = document.getElementById('hiddenHeart');
    const reasonsPopup = document.getElementById('reasonsPopup');
    const closeReasonsBtn = document.getElementById('closeReasonsBtn');

    if (hiddenHeart) {
        hiddenHeart.addEventListener('click', () => {
            reasonsPopup.classList.add('show');
            createHeartExplosion(hiddenHeart);
        });
    }

    closeReasonsBtn.addEventListener('click', () => {
        reasonsPopup.classList.remove('show');
    });
}

// ==========================================
// FINAL PAGE ENHANCEMENTS
// ==========================================
function setupFinalPageEnhancements() {
    const hugBtn = document.getElementById('hugBtn');
    const heartsFill = document.getElementById('heartsFill');
    const finalGlowMsg = document.getElementById('finalGlowMsg');

    // Show hug button after messages appear
    setTimeout(() => {
        if (hugBtn) hugBtn.classList.remove('hidden');
    }, 6000);

    if (hugBtn) {
        hugBtn.addEventListener('click', () => {
            // Fill screen with hearts
            fillScreenWithHearts();

            // Hide hug button
            hugBtn.style.display = 'none';

            // Show final glow message
            setTimeout(() => {
                finalGlowMsg.classList.remove('hidden');
            }, 1500);
        });
    }
}

function fillScreenWithHearts() {
    const heartsFill = document.getElementById('heartsFill');
    const hearts = ['❤️', '💕', '💖', '💗', '💝', '💓'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'fill-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heartsFill.appendChild(heart);
        }, i * 50);
    }
}

// ==========================================
// HELPER FUNCTIONS
// ==========================================

// Heart Explosion Effect
function createHeartExplosion(element) {
    const rect = element.getBoundingClientRect();
    const hearts = ['❤️', '💕', '💖', '💗', '💝'];

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'heart-particle';
        particle.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        particle.style.left = (rect.left + rect.width / 2) + 'px';
        particle.style.top = (rect.top + rect.height / 2) + 'px';

        const angle = (Math.PI * 2 * i) / 15;
        const distance = 100 + Math.random() * 100;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');

        document.body.appendChild(particle);

        setTimeout(() => particle.remove(), 1000);
    }
}

// Confetti System
function createConfetti() {
    const hearts = ['❤️', '💕', '💖', '💗', '💝'];

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti heart';
            confetti.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-50px';
            confetti.style.animationDelay = (Math.random() * 0.5) + 's';
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 3000);
        }, i * 50);
    }
}

// Add click animations to all buttons
function addClickAnimations() {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.romantic-btn, .choice-btn, .gift-box');
        if (btn) {
            btn.classList.add('btn-click-bounce');
            setTimeout(() => btn.classList.remove('btn-click-bounce'), 300);
        }
    });
}

// Make music play automatically after YES button
function playMusic() {
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');

    bgMusic.volume = 0.3;
    bgMusic.play().catch(err => console.log('Music autoplay blocked'));
    musicToggle.textContent = '🎵';
    musicPlaying = true;
}

console.log('💝 Valentine\'s Enhancements Loaded! 💝');
