import "./SlideShow.css";
import {useState, useEffect, useRef} from 'react';

export default function SlideShow() {
    const slideImages = [
        "https://wallpaperbat.com/img/90913-hardware-wallpaper-and-desktop-background-desktop-background.jpg",
        "http://cdn.mos.cms.futurecdn.net/MdhoETzFvrzaKiqfuymfDA.jpg",
        "https://www.howtogeek.com/wp-content/uploads/2021/05/rgb_header.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1",
        "https://www.teahub.io/photos/full/247-2472079_weekly-wallpaper-backgrounds-computer-components.jpg",
    ];
    const delay = 5000;

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() =>
            setIndex((prevIndex) =>
            prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
            ),
        delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <>
            <div className="slideshow">
                <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {slideImages.map((image, index) => (
                        <img src={image} alt="" className="slide" key={index} />
                    ))}
                </div>

                <div className="slideshowDots">
                    {slideImages.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                        setIndex(idx);
                        }}
                    ></div>
                    ))}
                </div>
            </div>
        </>
    );
}

