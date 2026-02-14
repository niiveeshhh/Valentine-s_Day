# Valentine's Day Next.js Application

## 🚀 Getting Started

This is the Next.js React version of your Valentine's Day website, converted from vanilla HTML/CSS/JS while preserving ALL functionality and the romantic theme.

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Deploy

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npx vercel
```

---

## ✨ Features Preserved

All original features have been converted to React:

- ✅ Loading screen with multiple failsafes
- ✅ Typing animations on welcome page
- ✅ YES/NO choice with button dodge mechanic
- ✅ Background music toggle
- ✅ Heart-popping game with score tracking
- ✅ 4 gift boxes with unlock logic (4th unlocks after first 3)
- ✅ Photo gallery (26 photos)
- ✅ Video galleries (13 videos total)
- ✅ Love letter with typing animation
- ✅ Final page with "Hug me" button
- ✅ Full romantic red-pink-white theme
- ✅ Responsive design for all devices
- ✅ Floating hearts background
- ✅ All animations and effects

---

## 📁 Project Structure

```
valentine-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with CSS imports
│   ├── page.tsx            # Main page with state management
│   └── globals.css         # React-specific animations
├── components/
│   ├── LoadingScreen.tsx
│   ├── MusicToggle.tsx
│   ├── FloatingHearts.tsx
│   └── pages/
│       ├── WelcomePage.tsx
│       ├── WishPage.tsx
│       ├── GamePage.tsx
│       ├── GiftsPage.tsx
│       ├── PhotoGalleryPage.tsx
│       ├── VideoGalleryPage.tsx
│       ├── VideoGallery2Page.tsx
│       ├── LoveLetterPage.tsx
│       └── FinalPage.tsx
├── styles/
│   ├── styles.css          # Base styles
│   ├── enhancements.css    # Enhancement styles
│   ├── responsive.css      # Responsive design
│   ├── gallery-responsive.css  # Gallery specific
│   └── theme.css           # Romantic theme
└── public/
    ├── photos/             # 26 photos
    ├── videos/             # 13 videos
    ├── song.mp3            # Background music
    └── rose.jpg            # Game background
```

---

## 🎨 Technologies Used

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS (all original styles preserved)
- **State:** React Hooks (useState, useEffect)

---

## 💖 What Changed

### From Vanilla to React:
- **HTML pages** → React Components
- **Global variables** → React State (useState)
- **DOM manipulation** → React rendering
- **Script.js logic** → Custom React hooks
- **Page navigation** → State-based routing
- **Event listeners** → React event handlers

### What Stayed the Same:
- **All CSS files** (100% preserved)
- **All images & videos** (same paths)
- **All animations** (same effects)
- **Romantic theme** (fully intact)
- **User experience** (identical flow)

---

## 🔧 Key Component Details

### State Management
All global state is managed in `app/page.tsx`:
- `currentPage`: Which page to display
- `musicPlaying`: Music toggle state
- `giftsOpened`: Set of opened gifts
- `score`: Game score

### Page Navigation
Pages are conditionally rendered based on `currentPage` state with smooth transitions.

### Audio Handling
Background music is managed with HTML5 Audio API, persisting across page changes.

---

## 📱 Responsive Design

The app is fully responsive across:
- 📱 Mobile (up to 767px)
- 📱 Tablets (768px - 1024px)
- 💻 Laptops (1025px - 1920px)
- 🖥️ Ultra-wide (1920px+)

---

## 🎯 Next Steps

1. ✅ Run `npm run dev` to test locally
2. ✅ Test all features and pages
3. ✅ Deploy to Vercel or your preferred hosting
4. 🎉 Share with your Valentine!

---

## ❤️ Made with Love

Converted to Next.js while preserving the magical Valentine's Day experience!
