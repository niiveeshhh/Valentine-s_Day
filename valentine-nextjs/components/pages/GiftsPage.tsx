'use client'

interface Props {
    giftsOpened: Set<string>;
    onOpenGift: (giftNum: string) => void;
    onNext: () => void;
    onGiftPageNavigate: (pageNum: number) => void;
}

export default function GiftsPage({ giftsOpened, onOpenGift, onNext, onGiftPageNavigate }: Props) {
    const gift4Unlocked = giftsOpened.size >= 3;
    const allGiftsOpened = giftsOpened.size >= 4;

    const handleGiftClick = (giftNum: string, targetPage: number) => {
        if (giftNum === '4' && !gift4Unlocked) return;

        onOpenGift(giftNum);
        onGiftPageNavigate(targetPage);
    };

    return (
        <section className="page active" id="page4">
            <div className="gifts-container">
                <h2 className="gifts-title">Choose Your Gifts 🎁</h2>
                <p className="gifts-subtitle">Click on each gift to see what's inside!</p>

                <div className="gifts-grid">
                    {/* Gift 1 - Photos */}
                    <div
                        className={`gift-box ${giftsOpened.has('1') ? 'opened' : ''}`}
                        data-gift="1"
                        onClick={() => handleGiftClick('1', 5)}
                    >
                        <div className="gift-icon">📸</div>
                        <h3>Our Memories</h3>
                        <p>Beautiful moments together</p>
                    </div>

                    {/* Gift 2 - Videos */}
                    <div
                        className={`gift-box ${giftsOpened.has('2') ? 'opened' : ''}`}
                        data-gift="2"
                        onClick={() => handleGiftClick('2', 6)}
                    >
                        <div className="gift-icon">🎥</div>
                        <h3>Special Moments</h3>
                        <p>Captured in motion</p>
                    </div>

                    {/* Gift 3 - More Videos */}
                    <div
                        className={`gift-box ${giftsOpened.has('3') ? 'opened' : ''}`}
                        data-gift="3"
                        onClick={() => handleGiftClick('3', 7)}
                    >
                        <div className="gift-icon">💫</div>
                        <h3>More Surprises</h3>
                        <p>Our journey together</p>
                    </div>

                    {/* Gift 4 - Locked until first 3 opened */}
                    <div
                        className={`gift-box ${!gift4Unlocked ? 'locked' : ''} ${giftsOpened.has('4') ? 'opened' : ''}`}
                        data-gift="4"
                        onClick={() => gift4Unlocked && handleGiftClick('4', 5)}
                    >
                        {!gift4Unlocked && <div className="lock-icon">🔒</div>}
                        <div className="gift-icon">🤗</div>
                        <h3>When you need a hug</h3>
                        <p>Something warm & comforting</p>
                    </div>
                </div>

                {allGiftsOpened && (
                    <button
                        id="allGiftsBtn"
                        className="romantic-btn continue-btn"
                        onClick={onNext}
                    >
                        Continue to surprise 💖
                    </button>
                )}

                {/* Hidden Easter Egg Heart */}
                <div className="hidden-heart" style={{ position: 'absolute', top: '10px', right: '20px', fontSize: '30px', cursor: 'pointer' }}>
                    💝
                </div>
            </div>
        </section>
    );
}
