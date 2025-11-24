import NewsSection from "../components/sections/NewsSection";

export default function Home() {

  const politicalNews = [
    { title: "Nepal PM Visits India", url: "#", image: "/img/p1.jpg" },
    { title: "Election Debate", url: "#", image: "/img/p2.jpg" },
  ];

  const sportsNews = [
    { title: "Messi scores hat-trick", url: "#", image: "/img/s1.jpg" },
    { title: "Nepal wins T20 Cup", url: "#", image: "/img/s2.jpg" },
  ];

  return (
    <main>
      <NewsSection title="Politics" articles={politicalNews} />
      <NewsSection title="Sports" articles={sportsNews} />
    </main>
  );
}
