import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function Details() {
  const history = useHistory();
  const dispatch = useDispatch();

  const movieItem = useSelector(store => store.movieItem);
  // !! there has to be a better way.
  const movie = movieItem[0];
  const movieId = useSelector(store => store.movieId);

  const fetchMovieItem = () => {
    axios.get(`/api/movie/${movieId}`).then((response) => {
      console.log(`Response data: ${response.data}`);
      const action = {
        type: 'SET_MOVIE_ITEM', 
        payload: response.data
      }
      dispatch(action);
    }).catch((error) => {
      console.log(`Error in fetchMovieItem: ${error}`);
      alert(`Something went quite wrong.`)
    })
  }

  useEffect(() => {
    fetchMovieItem()
    // console.log(`MovieId: ${movieId}`);
    console.log(movie)
  }, [])

  return(
    <>
    <h1>Details Page</h1>
    
    </>
  )
}

export default Details;