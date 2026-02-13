# 💕 Valentine's Day Interactive Website - Setup Guide

## 📁 Folder Structure
```
Valentines/
├── index.html          (Main website file)
├── styles.css          (All styling and animations)
├── script.js           (Interactive features and game)
├── README.md           (This file)
└── assets/
    ├── photos/
    │   ├── her/        (Add photos of her here)
    │   └── us/         (Add photos of you together)
    ├── videos/         (Add your videos here)
    └── music/          (Add romantic background music)
```

## 🎵 Adding Background Music
1. Find a romantic instrumental song (MP3 format recommended)
2. Name it `romantic.mp3`
3. Place it in `assets/music/romantic.mp3`
4. The music will autoplay softly when user clicks "Click here" on page 1

**Note:** If the music doesn't autoplay (browser restrictions), the user will need to interact first.

## 📸 Adding Photos

### Her Photos (Gift 1)
1. Add her photos to `assets/photos/her/`
2. Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`, etc.
3. Edit `index.html` and update the image src paths and captions in the `#gift1` section

### Our Photos Together (Gift 2)
1. Add photos of you together to `assets/photos/us/`
2. Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`, etc.
3. Edit `index.html` and update the image src paths and captions in the `#gift2` section

### Example photo section in HTML:
```html
<div class="photo-item">
    <img src="assets/photos/her/photo1.jpg" alt="Beautiful You">
    <p class="photo-caption">Your personalized caption here</p>
</div>
```

## 🎥 Adding Videos

1. Add video files to `assets/videos/`
2. Name them: `video1.mp4`, `video2.mp4`, etc.
3. Edit `index.html` and update the video src paths and captions in the `#gift3` section

### Example video section in HTML:
```html
<div class="video-item">
    <video controls>
        <source src="assets/videos/video1.mp4" type="video/mp4">
    </video>
    <p class="video-caption">Your personalized caption here</p>
</div>
```

## 💌 Customizing the Love Letter

The love letter is on **Page 6** (`#page6` section). To customize:

1. Open `index.html`
2. Find the `<div class="letter-content" id="letterContent">` section
3. Replace the placeholder text with your own heartfelt message
4. Keep the HTML paragraph structure for proper formatting

**Current placeholder letter starts with:**
```html
<p>My Beautiful Jaan,</p>
<p>As I sit here thinking about you...</p>
```

Replace all the paragraphs with your personal message!

## 🎨 Customizing Colors (Optional)

If you want to change the color scheme:

1. Open `styles.css`
2. Find the `:root` section at the top
3. Modify the color variables:
```css
:root {
    --pink: #FFB6C1;        /* Soft pink */
    --rose: #FF69B4;        /* Hot pink */
    --deep-pink: #FF1493;   /* Deep pink */
    --purple: #DDA0DD;      /* Plum */
    --lavender: #E6E6FA;    /* Lavender */
}
```

## 🚀 How to Run

1. **Simply open `index.html` in a web browser**
   - Double-click the file, or
   - Right-click → Open with → Your browser (Chrome, Firefox, Edge, etc.)

2. **For best experience:**
   - Use fullscreen mode (F11 in most browsers)
   - Enable sound
   - Use on desktop for optimal visuals, but it's mobile responsive too!

## 📱 Mobile Responsive

The website is fully responsive and will work beautifully on both:
- 💻 Desktop/Laptop
- 📱 Mobile phones and tablets

## ✨ Features

- 🎭 Smooth page transitions
- ❤️ Floating hearts background
- ✨ Sparkle effects
- 💖 Heart-popping game (pop 10 hearts to unlock gifts)
- 🎁 Three gift boxes revealing:
  - Photos of her
  - Photos of you together
  - Your videos together
- 💌 Beautiful love letter with typing animation
- 🎵 Background music
- 🌟 Glowing effects and animations throughout

## 🎮 How the Game Works

On Page 3, hearts will float around the screen. Click on them to pop them!
- Need to pop 10 hearts to unlock the gifts
- Each pop creates a beautiful particle effect
- Hearts will keep appearing until you reach the target

## 💝 Flow of the Website

1. **Welcome Page** - Typing animation with greeting
2. **Valentine's Wish** - Romantic messages
3. **Heart Pop Game** - Interactive game
4. **Gift Selection** - Choose 3 gifts: "I", "Love", "You"
5. **Gift Pages** - View photos and videos
6. **Final Surprise** - Build anticipation
7. **Love Letter** - Your heartfelt message
8. **Ending** - Emotional conclusion with replay option

## 🎨 Color Scheme

- Soft gradients of pink, purple, and rose
- Glowing effects in magenta and white
- Romantic and dreamy aesthetic
- Dark mode friendly backgrounds

## 📝 Tips for Best Results

1. **Use high-quality photos** - They'll look better with the hover effects
2. **Keep videos under 2 minutes** - For smooth playback
3. **Write from the heart** - The love letter is the most important part
4. **Test before sharing** - Open it once to make sure everything works
5. **Add your own music** - Choose a song that's meaningful to both of you

## 🔧 Troubleshooting

**Music not playing?**
- Some browsers block autoplay. User needs to click somewhere first.
- Make sure the file is named exactly `romantic.mp3` and in the right folder

**Images not showing?**
- Check file names match exactly (case-sensitive on some systems)
- Ensure images are in the correct folders
- Supported formats: .jpg, .jpeg, .png, .gif

**Videos not playing?**
- MP4 format works best
- Keep file sizes reasonable (under 50MB recommended)

## 💕 Final Touch

This website is designed to be an emotional journey. Take your time customizing each section with personal touches, meaningful photos, and heartfelt words. 

**Make it uniquely yours!**

---

Made with ❤️ for someone special
