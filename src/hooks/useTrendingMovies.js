import  { useEffect } from 'react'
import { API_Options } from '../components/constants';
import { useDispatch } from 'react-redux';
import { addTrendingMovies } from '../utils/moviesSlice';

const useTrendingMovies = () => {
    const dispatch = useDispatch()

    const fetchTrendingMovies = async() => {
        const result =await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_Options);
        const json = await result.json();
        dispatch(addTrendingMovies(json.results))
    }

    useEffect(() => {
        fetchTrendingMovies();
    },[])
}

export default useTrendingMovies