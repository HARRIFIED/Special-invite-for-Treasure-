import { useState } from 'react'
import './ButtonContainer.css'; // Import CSS file for styling

const ButtonContainer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [yesScale, setYesScale] = useState(1);
    const words = [
        "No",
        "Treasure, please na 😪",
        "I will cry screaming your name oo 😭",
        "Are you sure 😶?",
        "Realllly sure",
        "Think again",
        "Baby boo 😋",
        "Just think about it",
        "If you say No I will be sad"
    ];

    const noHandleClick = () => {
        const nextIndex = (currentIndex + 1) % words.length;
        setCurrentIndex(nextIndex);
        setYesScale(prevScale => prevScale + 1);
    };

    const handleClickYes = () => {
        setYesScale(1);
    };

    return (
        <div className="button-container">
            <button className="yes-button" style={{ transform: `scale(${yesScale})`, marginRight: '10px' }} onClick={handleClickYes}>Yes</button>
            <button className="no-button" onClick={noHandleClick}>{words[currentIndex]}</button>
        </div>
    );
};

export default ButtonContainer;
