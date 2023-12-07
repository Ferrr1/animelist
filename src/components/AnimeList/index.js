import Image from "next/image";
import Link from "next/link";
const AnimeList = ({ api }) => {
  return (
    <div className="grid xl:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4 px-6">
      {api.data.map((anime) => {
        return (
          <div
            key={anime.mal_id}
            className="cursor-pointer shadow-md rounded-sm"
          >
            <Link href={`/${anime.mal_id}`}>
              <Image
                src={anime.images.webp.image_url}
                alt="..."
                width={350}
                height={350}
                className="w-full max-h-64 object-cover rounded-sm"
                priority={true}
              />
              <h3 className="h-16 mb-2 font-medium text-md p-4 line-clamp-2">
                {anime.title}
              </h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AnimeList;
