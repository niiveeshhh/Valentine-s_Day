// ==========================================
// EMERGENCY FIX - SIMPLE VERSION
// ==========================================

// Hide loading screen IMMEDIATELY
document.addEventListener('DOMContentLoaded', function () {
    const loading = document.getElementById('loadingScreen');
    if (loading) loading.remove();
});

// Global variables
let musicPlaying = false;
let giftsOpenedCount = 0;

// Initialize after a brief delay so original script loads first
setTimeout(function () {
    initEnhancements();
}, 100);

function initEnhancements() {
    // Music toggle
    const musicBtn = document.getElementById('musicToggle');
    const music = document.getElementById('bgMusic');
    if (musicBtn && music) {
        musicBtn.addEventListener('click', function () {
            if (musicPlaying) {
                music.pause();
                musicBtn.textContent = '🔇';
                musicPlaying = false;
            } else {
                music.play().catch(e => console.log('Music blocked'));
                musicBtn.textContent = '🎵';
                musicPlaying = true;
            }
        });
    }

    // Setup other features
    setupYesNo();
    setupGifts();
    setupHiddenHeart();
}

function setupYesNo() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const origBtn = document.getElementById('page1Btn');
    const choiceDiv = document.getElementById('choiceContainer');

    if (!yesBtn || !noBtn) return;

    // Show YES/NO after typing (8 seconds)
    setTimeout(function () {
        if (origBtn) origBtn.style.display = 'none';
        if (choiceDiv) choiceDiv.classList.remove('hidden');
    }, 8000);

    // NO button dodges
    noBtn.addEventListener('mouseenter', function () {
        const x = Math.random() * (window.innerWidth - 200);
        const y = Math.random() * (window.innerHeight - 100);
        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    });

    // YES button proceeds
    yesBtn.addEventListener('click', function () {
        if (typeof goToPage === 'function') {
            goToPage('page2');
        }
        if (typeof playMusic === 'function') {
            playMusic();
        }
    });
}

function setupGifts() {
    // Track gifts opened
    let opened = 0;

    // Override original openGift if it exists
    const origOpen = window.openGift;
    window.openGift = function (box) {
        const num = box.dataset.gift;

        // Don't open locked gift 4
        if (num === '4' && box.classList.contains('locked')) {
            return;
        }

        opened++;

        // Call original function if exists
        if (origOpen) {
            origOpen(box);
        } else {
            if (typeof goToPage === 'function') {
                goToPage('gift' + num);
            }
        }

        // Unlock gift 4 after opening 3
        if (opened === 3) {
            const gift4 = document.querySelector('[data-gift="4"]');
            if (gift4) {
                gift4.classList.remove('locked');
                const lock = gift4.querySelector('.lock-icon');
                if (lock) lock.remove();
            }
        }
    };
}

function setupHiddenHeart() {
    const hidden = document.getElementById('hiddenHeart');
    const popup = document.getElementById('reasonsPopup');
    const closeBtn = document.getElementById('closeReasonsBtn');

    if (hidden && popup) {
        hidden.addEventListener('click', function () {
            popup.classList.add('show');
        });
    }

    if (closeBtn && popup) {
        closeBtn.addEventListener('click', function () {
            popup.classList.remove('show');
        });
    }
}

console.log('✅ Enhancements loaded (simplified)');
