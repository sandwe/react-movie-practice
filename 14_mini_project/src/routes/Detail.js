import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  const {id} = useParams();
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <section>
      <h1>Detail</h1>
      {loading ? (
        <h2>loading</h2>
      ) : (
        <div>
          <img src={detail.medium_cover_image} alt=""></img>
          <h2>
            {detail.title} ({detail.year})
          </h2>
          <p>평점({detail.rating})</p>
          <p>{detail.description_full}</p>
        </div>
      )}
    </section>
  );
}

export default Detail;
