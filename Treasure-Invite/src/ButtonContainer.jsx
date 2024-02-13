import { useState } from 'react'
import './ButtonContainer.css';
import KissingBear from './assets/bear-kiss-bear-kisses.gif'

const ButtonContainer = ({ state, setWords }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [yesScale, setYesScale] = useState(1);
    const [visible, setVisible] = useState(true)

    const words = [
        "No",
        "Treasure, please na 😪",
        "I will cry screaming your name oo 😭",
        "Are you sure 😶?",
        "Realllly sure",
        "Think again",
        "Baby boo 😋",
        "Just think about it",
        "If you say No I will be sad 😥"
    ];

    const noHandleClick = () => {
        const nextIndex = (currentIndex + 1) % words.length;
        setCurrentIndex(nextIndex);
        setYesScale(prevScale => prevScale + 1);
    };

    const handleClickYes = () => {
        setYesScale(1);
        state(KissingBear)
        setWords("Yey I love you !!!!!💖💓💖💞💞")
        setVisible(false)
    };

    const dynamicMargin = `${yesScale * 20}px`;

    return (
        <div className="button-container">
            {visible && (
                <>
                    <button className="yes-button" style={{ transform: `scale(${yesScale})`, margin: dynamicMargin }} onClick={handleClickYes}>Yes</button>
                    <button className="no-button" onClick={noHandleClick}>{words[currentIndex]}</button>
                </>
            )}
        </div>
    );
};

export default ButtonContainer;
