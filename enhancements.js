// ==========================================
// LOADING SCREEN - BULLETPROOF VERSION
// ==========================================

// FAILSAFE #1: Immediate timeout - 5 seconds max
setTimeout(function () {
    hideLoadingScreen();
}, 5000);

// FAILSAFE #2: On DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLoadingSequence);
} else {
    // DOM already loaded
    initLoadingSequence();
}

// FAILSAFE #3: On window load
window.addEventListener('load', hideLoadingScreen);

// Main initialization
function initLoadingSequence() {
    // Wait 2.5 seconds, then hide
    setTimeout(function () {
        hideLoadingScreen();
    }, 2500);
}

// Guaranteed hide function
function hideLoadingScreen() {
    var loadingScreen = document.getElementById('loadingScreen');
    if (!loadingScreen) return; // Already removed

    // Prevent multiple calls
    if (loadingScreen.dataset.hiding === 'true') return;
    loadingScreen.dataset.hiding = 'true';

    // Smooth fade out
    loadingScreen.style.transition = 'opacity 0.8s ease';
    loadingScreen.style.opacity = '0';

    // Remove after fade
    setTimeout(function () {
        if (loadingScreen && loadingScreen.parentNode) {
            loadingScreen.style.display = 'none';
            loadingScreen.remove();
        }
    }, 800);
}

// ==========================================
// ENHANCED FEATURES
// ==========================================

// Global variables
var musicPlaying = false;
var giftsOpenedCount = 0;

// Initialize enhancements after loading screen is gone
setTimeout(function () {
    initEnhancements();
}, 100);

function initEnhancements() {
    setupMusicToggle();
    setupYesNoChoice();
    setup4thGift();
    setupHiddenHeart();
    setupHugButton();
}

// ==========================================
// MUSIC TOGGLE
// ==========================================
function setupMusicToggle() {
    var musicBtn = document.getElementById('musicToggle');
    var music = document.getElementById('bgMusic');

    if (!musicBtn || !music) return;

    musicBtn.addEventListener('click', function () {
        if (musicPlaying) {
            music.pause();
            musicBtn.textContent = '🔇';
            musicPlaying = false;
        } else {
            music.play().catch(function (e) {
                console.log('Music playback blocked by browser');
            });
            musicBtn.textContent = '🎵';
            musicPlaying = true;
        }
    });
}

// ==========================================
// YES/NO CHOICE
// ==========================================
function setupYesNoChoice() {
    var yesBtn = document.getElementById('yesBtn');
    var noBtn = document.getElementById('noBtn');
    var origBtn = document.getElementById('page1Btn');
    var choiceDiv = document.getElementById('choiceContainer');
    var niceMsg = document.getElementById('niceTryMsg');

    if (!yesBtn || !noBtn || !origBtn || !choiceDiv) return;

    // Wait for typing animation (8 seconds), then show YES/NO
    setTimeout(function () {
        origBtn.style.display = 'none';
        choiceDiv.style.display = 'flex';
        choiceDiv.classList.remove('hidden');
    }, 8000);

    // NO button dodge behavior
    var dodgeCount = 0;
    function dodgeNo() {
        var maxX = window.innerWidth - 200;
        var maxY = window.innerHeight - 100;
        var x = 20 + Math.random() * Math.max(0, maxX - 20);
        var y = 20 + Math.random() * Math.max(0, maxY - 20);

        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
        noBtn.style.transition = 'all 0.3s ease';

        dodgeCount++;
        if (dodgeCount >= 3 && niceMsg) {
            niceMsg.classList.remove('hidden');
        }
    }

    noBtn.addEventListener('mouseenter', dodgeNo);
    noBtn.addEventListener('touchstart', dodgeNo);
    noBtn.addEventListener('click', function (e) {
        e.preventDefault();
        dodgeNo();
    });

    // YES button - proceed to next page
    yesBtn.addEventListener('click', function () {
        // Create heart explosion effect
        createHeartExplosion(yesBtn);

        setTimeout(function () {
            if (typeof goToPage === 'function') {
                goToPage('page2');
            }
            if (typeof playMusic === 'function') {
                playMusic();
            }
        }, 800);
    });
}

// ==========================================
// 4TH GIFT BOX
// ==========================================
function setup4thGift() {
    var originalOpen = window.openGift;

    window.openGift = function (giftBox) {
        var giftNum = giftBox.dataset.gift;

        // Don't open locked gift
        if (giftNum === '4' && giftBox.classList.contains('locked')) {
            return;
        }

        giftsOpenedCount++;

        // Call original function if exists
        if (originalOpen && typeof originalOpen === 'function') {
            originalOpen.call(this, giftBox);
        } else {
            // Fallback
            if (typeof goToPage === 'function') {
                goToPage('gift' + giftNum);
            }
        }

        // Unlock 4th gift after opening 3
        if (giftsOpenedCount === 3) {
            var gift4 = document.querySelector('[data-gift="4"]');
            if (gift4) {
                gift4.classList.remove('locked');
                var lock = gift4.querySelector('.lock-icon');
                if (lock) lock.remove();
            }
        }
    };
}

// ==========================================
// HIDDEN HEART
// ==========================================
function setupHiddenHeart() {
    var hiddenHeart = document.getElementById('hiddenHeart');
    var popup = document.getElementById('reasonsPopup');
    var closeBtn = document.getElementById('closeReasonsBtn');

    if (hiddenHeart && popup) {
        hiddenHeart.addEventListener('click', function () {
            popup.classList.add('show');
            popup.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    }

    if (closeBtn && popup) {
        closeBtn.addEventListener('click', function () {
            popup.classList.remove('show');
            popup.style.transform = 'translate(-50%, -50%) scale(0)';
        });
    }
}

// ==========================================
// HUG BUTTON
// ==========================================
function setupHugButton() {
    var hugBtn = document.getElementById('hugBtn');
    var finalMsg = document.getElementById('finalGlowMsg');

    if (!hugBtn) return;

    // Show hug button after final messages
    setTimeout(function () {
        hugBtn.classList.remove('hidden');
    }, 8000);

    hugBtn.addEventListener('click', function () {
        // Fill screen with hearts
        fillScreenWithHearts();

        hugBtn.style.display = 'none';

        if (finalMsg) {
            setTimeout(function () {
                finalMsg.classList.remove('hidden');
            }, 1500);
        }
    });
}

function fillScreenWithHearts() {
    var container = document.getElementById('heartsFill');
    if (!container) return;

    var hearts = ['❤️', '💕', '💖', '💗', '💝', '💓'];

    for (var i = 0; i < 50; i++) {
        (function (index) {
            setTimeout(function () {
                var heart = document.createElement('div');
                heart.className = 'fill-heart';
                heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = Math.random() * 100 + '%';
                container.appendChild(heart);
            }, index * 50);
        })(i);
    }
}

// ==========================================
// HELPER FUNCTIONS
// ==========================================

function createHeartExplosion(element) {
    if (!element) return;

    var rect = element.getBoundingClientRect();
    var hearts = ['❤️', '💕', '💖', '💗', '💝'];

    for (var i = 0; i < 12; i++) {
        (function (index) {
            var particle = document.createElement('div');
            particle.className = 'heart-particle';
            particle.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            particle.style.left = (rect.left + rect.width / 2) + 'px';
            particle.style.top = (rect.top + rect.height / 2) + 'px';

            var angle = (Math.PI * 2 * index) / 12;
            var distance = 80 + Math.random() * 80;
            var tx = Math.cos(angle) * distance;
            var ty = Math.sin(angle) * distance;

            particle.style.setProperty('--tx', tx + 'px');
            particle.style.setProperty('--ty', ty + 'px');

            document.body.appendChild(particle);

            setTimeout(function () {
                if (particle && particle.parentNode) {
                    particle.remove();
                }
            }, 1000);
        })(i);
    }
}

console.log('✅ Enhancements loaded successfully');
