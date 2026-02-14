'use client'

import { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import MusicToggle from '../components/MusicToggle';
import FloatingHearts from '../components/FloatingHearts';
import WelcomePage from '../components/pages/WelcomePage';
import WishPage from '../components/pages/WishPage';
import GamePage from '../components/pages/GamePage';
import GiftsPage from '../components/pages/GiftsPage';
import PhotoGalleryPage from '../components/pages/PhotoGalleryPage';
import VideoGalleryPage from '../components/pages/VideoGalleryPage';
import VideoGallery2Page from '../components/pages/VideoGallery2Page';
import LoveLetterPage from '../components/pages/LoveLetterPage';
import FinalPage from '../components/pages/FinalPage';

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [giftsOpened, setGiftsOpened] = useState<Set<string>>(new Set());
  const [audioRef, setAudioRef] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio
    const audio = new Audio('/song.mp3');
    audio.loop = true;
    setAudioRef(audio);
  }, []);

  useEffect(() => {
    if (audioRef) {
      if (musicPlaying) {
        audioRef.play().catch(console.error);
      } else {
        audioRef.pause();
      }
    }
  }, [musicPlaying, audioRef]);

  const goToPage = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  const startMusic = () => {
    setMusicPlaying(true);
  };

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  const openGift = (giftNum: string) => {
    setGiftsOpened(new Set([...giftsOpened, giftNum]));
  };

  return (
    <>
      {showLoading && <LoadingScreen onComplete={() => setShowLoading(false)} />}
      <FloatingHearts />
      <MusicToggle isPlaying={musicPlaying} onToggle={toggleMusic} />

      {currentPage === 1 && (
        <WelcomePage onNext={() => goToPage(2)} onStartMusic={startMusic} />
      )}
      {currentPage === 2 && <WishPage onNext={() => goToPage(3)} />}
      {currentPage === 3 && (
        <GamePage
          score={score}
          setScore={setScore}
          onNext={() => goToPage(4)}
        />
      )}
      {currentPage === 4 && (
        <GiftsPage
          giftsOpened={giftsOpened}
          onOpenGift={openGift}
          onNext={() => goToPage(8)}
          onGiftPageNavigate={goToPage}
        />
      )}
      {currentPage === 5 && <PhotoGalleryPage onBack={() => goToPage(4)} />}
      {currentPage === 6 && <VideoGalleryPage onBack={() => goToPage(4)} />}
      {currentPage === 7 && <VideoGallery2Page onBack={() => goToPage(4)} />}
      {currentPage === 8 && <LoveLetterPage onNext={() => goToPage(9)} />}
      {currentPage === 9 && <FinalPage />}
    </>
  );
}
