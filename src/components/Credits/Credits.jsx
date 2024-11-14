import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import img from "../../assets/images/images.png";
import useFetchMovies from "../Hooks/useMovies";
import { Helmet } from "react-helmet";

export default function Credits() {
  let { id } = useParams();
  let url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=3e900c7706fc519f0627de6b8ef6e26f`;
  let data = useFetchMovies(url);
  console.log(data.cast);
  let credits = data.cast;

  if (!credits) return <Loading />;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Credits Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="credits-container">
        <h1 className="text-white">Cast & Crew</h1>
        <div className="cast-list">
          {credits.map((member) => (
            <div key={member.cast_id} className="cast-card">
              {member.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
                  alt={`${member.name}`}
                  className="cast-image"
                />
              ) : (
                <img
                  src={img}
                  alt={`${member.author} profile`}
                  className="cast-image"
                />
              )}
              <div className="cast-info">
                <h3>{member.name}</h3>
                <strong className="text-warning">
                  Character: {member.character || "N/A"}
                </strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
