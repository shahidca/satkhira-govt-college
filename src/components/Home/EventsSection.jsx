
const events = [
  {
    image: "https://i.ibb.co.com/PZKKnvbD/download.jpg",
    title: "Annual Convocation 2025",
    date: "March 20, 2025",
    description: "Celebrating the achievements of our graduating students with a grand ceremony.",
  },
  {
    image: "https://i.ibb.co/xyz/event2.jpg",
    title: "AI Workshop for Students",
    date: "April 5, 2025",
    description: "Hands-on workshop on Artificial Intelligence and Machine Learning technologies.",
  },
  {
    image: "https://i.ibb.co.com/K1MLKLQ/images.jpg" ,
    title: "Career Fair 2025",
    date: "April 15, 2025",
    description: "Over 50 companies visiting campus to recruit talented students.",
  },
  {
    image: "https://i.ibb.co.com/Gfgh1gyd/images.jpg",
    title: "Science Expo 2025",
    date: "May 2, 2025",
    description: "Showcasing innovative student projects in science and technology.",
  },
];

const EventsSection = () => {
  return (
    <section className="w-full bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-black">Upcoming Events</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 text-black group-hover:text-green-600 transition">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
