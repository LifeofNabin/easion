// components/sections/NewsSection.tsx

import Link from "next/link";

export default function NewsSection({ title, articles }) {
  return (
    <section className="px-6 py-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Link 
            key={index} 
            href={article.url} 
            className="bg-white p-4 shadow rounded hover:scale-105 transition"
          >
            <img src={article.image} alt="" className="rounded mb-3" />
            <h3 className="font-semibold">{article.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
