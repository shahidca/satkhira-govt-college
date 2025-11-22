import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

function NewsSection() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch("/newsData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); 
        setNewsData(data);
      });
  }, []);

  return (
    <section className="py-12 px-4 md:px-16 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center text-black">University News & Updates</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {newsData.map((news) => (
          <NewsCard
            key={news.id}
            image={news.image}
            title={news.title}
            paragraph={news.paragraph}
          />
        ))}
      </div>
    </section>
  );
}

export default NewsSection;
