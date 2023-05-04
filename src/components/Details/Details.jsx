import {useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Details() {
  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);


  return(
    <>
    <h1>Details Page</h1>
    </>
  )
}

export default Details;