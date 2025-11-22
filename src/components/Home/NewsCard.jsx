function NewsCard({ image, title, paragraph }) {
  return (
    <div
      className="
        bg-white 
        shadow-md 
        rounded-xl 
        overflow-hidden 
        transition-all 
        duration-300 
        cursor-pointer 
        hover:shadow-xl 
        hover:-translate-y-1
        group
      "
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full 
            h-48 
            object-cover 
            transition-transform 
            duration-500 
            group-hover:scale-110
          "
        />
      </div>

      <div className="p-4 transition-colors duration-300 group-hover:bg-gray-50">
        <h2 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-green-600 transition">
          {title}
        </h2>

        <p className="text-gray-600 text-sm">
          {paragraph}
        </p>
      </div>
    </div>
  );
}

export default NewsCard;

