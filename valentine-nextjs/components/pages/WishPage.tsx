'use client'

interface Props {
    onNext: () => void;
}

export default function WishPage({ onNext }: Props) {
    return (
        <section className="page active" id="page2">
            <div className="content-center">
                <h2 className="wish-title">On this special day...</h2>
                <p className="wish-text">
                    I wish you all the happiness in the world. You mean everything to me,
                    and I'm so grateful to have you in my life. Let's make this Valentine's
                    Day unforgettable! 💕
                </p>
                <button className="romantic-btn pulse" onClick={onNext}>
                    Continue 💖
                </button>
            </div>
        </section>
    );
}
