import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import AdventureCard from "./AdventureCard";
import AOS from "aos";
import "aos/dist/aos.css";

const AdventureXps = () => {
    const adventures = useLoaderData();

    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 100,
            once: true,
        });
    }, []);

    return (
        <div className="mt-10">
            <h1 className="font-bold text-2xl p-4">Adventure Experiences</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {adventures.map((adventure, index) => {
                    const effects = ["fade-up", "zoom-in", "flip-left"];
                    const animation = effects[index % effects.length];

                    return (
                        <div key={index} data-aos={animation}>
                            <AdventureCard adventure={adventure} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AdventureXps;
