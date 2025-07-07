import {
  FaRecycle,
  FaBicycle,
  FaPaw,
  FaHome,
  FaTrashAlt,
} from "react-icons/fa";
import "aos/dist/aos.css";
import "animate.css";

const EcoTips = () => {
  const ecoTips = [
    {
      id: 1,
      title: "Pack Reusable Essentials",
      icon: <FaRecycle className="text-3xl" />,
      description:
        "Bring reusable water bottles, utensils, and shopping bags to minimize single-use plastic waste during your adventures.",
      benefit: "Reduces plastic pollution",
    },
    {
      id: 2,
      title: "Choose Green Transportation",
      icon: <FaBicycle className="text-3xl" />,
      description:
        "Opt for walking, cycling, or public transport when possible. Select carbon-neutral tour operators.",
      benefit: "Lowers carbon footprint",
    },
    {
      id: 3,
      title: "Respect Wildlife",
      icon: <FaPaw className="text-3xl" />,
      description:
        "Observe animals from a distance, never feed them, and avoid unnatural interactions.",
      benefit: "Protects ecosystems",
    },
    {
      id: 4,
      title: "Support Local Communities",
      icon: <FaHome className="text-3xl" />,
      description:
        "Eat at local restaurants, buy from artisan shops, and choose locally-owned accommodations.",
      benefit: "Boosts local economy",
    },
    {
      id: 5,
      title: "Leave No Trace",
      icon: <FaTrashAlt className="text-3xl" />,
      description:
        "Carry out all trash, stay on marked trails, and avoid removing natural objects.",
      benefit: "Preserves nature",
    },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-12 text-emerald-800 animate__animated animate__fadeIn"
          data-aos="fade-down"
        >
          Eco-Friendly Travel Tips
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {ecoTips.map((tip, index) => (
            <div
              key={tip.id}
              className="bg-emerald-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-6 flex flex-col items-center text-center h-full">
                <div className="mb-4 p-4 bg-emerald-100 rounded-full text-emerald-600">
                  {tip.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {tip.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {tip.description}
                </p>
                <span className="inline-block w-32 px-3 py-1 bg-emerald-600 text-white text-sm font-medium rounded-full text-center">
                  {tip.benefit}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoTips;
