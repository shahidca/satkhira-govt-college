function NewsCard({ image, title, paragraph }) {
  return (
    <div className="
      bg-white
      rounded-2xl
      overflow-hidden
      shadow-lg
      transition-all
      duration-500
      cursor-pointer
      hover:shadow-2xl
      hover:-translate-y-2
      group
      relative
    ">
      {/* Image with smooth zoom */}
      <div className="overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="
            w-full 
            h-56 
            sm:h-64 
            md:h-72 
            lg:h-64 
            object-cover 
            transition-transform 
            duration-700 
            ease-in-out 
            group-hover:scale-110
          "
        />
        {/* Gradient overlay for modern look */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Text content */}
      <div className="p-5 transition-colors duration-300 group-hover:bg-gray-50">
        <h2 className="
          text-lg 
          sm:text-xl 
          font-bold 
          mb-2 
          text-gray-900 
          group-hover:text-green-600 
          transition-colors 
          duration-300
        ">
          {title}
        </h2>

        <p className="text-gray-600 text-sm sm:text-base line-clamp-3">
          {paragraph}
        </p>
      </div>

      {/* Optional Animated Badge */}
      <span className="
        absolute top-4 right-4
        bg-green-500 text-white text-xs px-2 py-1 rounded-full
        font-semibold
        opacity-0 group-hover:opacity-100
        transition-opacity duration-500
      ">
        New
      </span>
    </div>
  );
}

export default NewsCard;
