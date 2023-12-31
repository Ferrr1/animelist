import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=12`
  );
  const topAnime = await response.json();

  return (
    <>
      <section className="container mx-auto">
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
