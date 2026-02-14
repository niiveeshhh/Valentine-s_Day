'use client'

import { useEffect } from 'react';

export default function FloatingHearts() {
    useEffect(() => {
        const container = document.getElementById('heartsBackground');
        if (!container) return;

        const hearts = ['❤️', '💕', '💖', '💗', '💝', '💓'];

        const interval = setInterval(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            container.appendChild(heart);

            setTimeout(() => heart.remove(), 10000);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return null;
}
