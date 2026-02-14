import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import MusicToggle from './components/MusicToggle';
import FloatingHearts from './components/FloatingHearts';
import WelcomePage from './pages/WelcomePage';
import WishPage from './pages/WishPage';
import GamePage from './pages/GamePage';
import GiftsPage from './pages/GiftsPage';
import PhotoGallery from './pages/PhotoGallery';
import VideoGallery from './pages/VideoGallery';
import VideoGallery2 from './pages/VideoGallery2';
import HugPage from './pages/HugPage';
import PuzzlePage from './pages/PuzzlePage';
import LoveLetterPage from './pages/LoveLetterPage';
import FinalPage from './pages/FinalPage';

function App() {
    const [showLoading, setShowLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [musicPlaying, setMusicPlaying] = useState(false);
    const [score, setScore] = useState(0);
    const [giftsOpened, setGiftsOpened] = useState(new Set());
    const [audioRef, setAudioRef] = useState(null);

    useEffect(() => {
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

    const goToPage = (pageNum) => {
        setCurrentPage(pageNum);
    };

    const startMusic = () => {
        setMusicPlaying(true);
    };

    const toggleMusic = () => {
        setMusicPlaying(!musicPlaying);
    };

    const openGift = (giftNum) => {
        setGiftsOpened(new Set([...giftsOpened, giftNum]));
    };

    return (
        <div className="relative w-full overflow-x-hidden bg-gradient-to-br from-romantic-light via-white to-romantic-pink">
            {showLoading && <LoadingScreen onComplete={() => setShowLoading(false)} />}
            <FloatingHearts />
            <MusicToggle isPlaying={musicPlaying} onToggle={toggleMusic} />

            {currentPage === 1 && <WelcomePage onNext={() => goToPage(2)} onStartMusic={startMusic} />}
            {currentPage === 2 && <WishPage onNext={() => goToPage(3)} />}
            {currentPage === 3 && <GamePage score={score} setScore={setScore} onNext={() => goToPage(4)} />}
            {currentPage === 4 && <GiftsPage giftsOpened={giftsOpened} onOpenGift={openGift} onNext={() => goToPage(9)} onGiftPageNavigate={goToPage} />}
            {currentPage === 5 && <PhotoGallery onBack={() => goToPage(4)} />}
            {currentPage === 6 && <VideoGallery onBack={() => goToPage(4)} />}
            {currentPage === 7 && <VideoGallery2 onBack={() => goToPage(4)} />}
            {currentPage === 8 && <HugPage onBack={() => goToPage(4)} />}
            {currentPage === 9 && <PuzzlePage onNext={() => goToPage(10)} />}
            {currentPage === 10 && <LoveLetterPage onNext={() => goToPage(11)} />}
            {currentPage === 11 && <FinalPage />}
        </div>
    );
}

export default App;
