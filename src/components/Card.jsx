import { useDispatch } from "react-redux";
import { getSong } from "../redux/actions/actions";

const Card = ({ songInfo }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="col-6 col-md-3 text-center mb-3"
      id={songInfo.id}
      onClick={() => {
        dispatch(getSong(songInfo));
      }}
    >
      <img className="img-fluid" src={songInfo.album.cover_medium} alt="track" />
      <p className="mt-2">
        <strong>Track:</strong> {songInfo.title}
        <br />
        <strong>Artist:</strong> {songInfo.artist.name}
        <br />
        <strong>Album:</strong> {songInfo.album.title}
      </p>
    </div>
  );
};

export default Card;
