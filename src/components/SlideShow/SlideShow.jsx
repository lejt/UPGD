import "./SlideShow.css";
import {useState, useEffect, useRef} from 'react';

export default function SlideShow() {
    const colors = [
        "https://www.teahub.io/photos/full/247-2472079_weekly-wallpaper-backgrounds-computer-components.jpg",
        "http://cdn.mos.cms.futurecdn.net/MdhoETzFvrzaKiqfuymfDA.jpg",
        "https://www.howtogeek.com/wp-content/uploads/2021/05/rgb_header.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1"
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
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
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
                    {colors.map((image, index) => (
                        <img src={image} alt="" className="slide" key={index} />
                    ))}
                </div>

                <div className="slideshowDots">
                    {colors.map((_, idx) => (
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

