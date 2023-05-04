import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function MovieItem({ movie }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const detailsPush = () => {
    dispatch({ type: 'SET_MOVIE_ID', payload: movie.id})
    console.log(`movie id: ${movie.id}`);
    history.push('/details');
  }

  return (
    <>
      <h3>{movie.title}</h3>
      <img onClick={detailsPush} src={movie.poster} alt={movie.title} />
    </>
  )
}

export default MovieItem;