import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SimpleImageSlider from 'react-simple-image-slider';

const BannerSlider = () => {
    const slides = useLoaderData();
    const images = slides.map(slide => slide.image);

    const [dimensions, setDimensions] = useState({
        width: window.innerWidth * (9 / 10),
        height:
            window.innerWidth < 768
                ? window.innerWidth * (9 / 10) * 0.6
                : window.innerWidth * (9 / 10) * 0.4,
    });

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            const containerWidth = screenWidth * (9 / 10);
            setDimensions({
                width: containerWidth,
                height: screenWidth < 768
                    ? containerWidth * 0.6
                    : containerWidth * 0.4,
            });
        };

        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex justify-center w-full ">
            <SimpleImageSlider
                width={dimensions.width}
                height={dimensions.height}
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
                autoPlayDelay={2.5}
                style={{
                    margin: '0 auto',
                   
                    maxWidth: '100%',
                }}
            />
        </div>
    );
};

export default BannerSlider;
