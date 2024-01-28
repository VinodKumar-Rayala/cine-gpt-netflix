import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        trendingMovies:null,
        popularMovies:null,
        upComingMovies:null,
        horrorMovies:null
    },
    reducers:{
        //addNowPlaying action
        addNowPlayingMovies:(state,action) => {
                state.nowPlayingMovies = action.payload
        },
        addTrailerVideo:(state,action) => {
            state.trailerVideo = action.payload
        },
        addTrendingMovies:(state,action) => {
            state.trendingMovies = action.payload
        },
        addPopularMovies:(state,action) => {
            state.popularMovies = action.payload
        },
        addUpcomingMovies:(state,action) => {
            state.upComingMovies = action.payload
        },
        addHorrorMovies:(state,action) => {
            state.horrorMovies = action.payload
        }

    }
});

export const {addNowPlayingMovies,addTrailerVideo,addTrendingMovies,addPopularMovies,addUpcomingMovies,addHorrorMovies} = moviesSlice.actions;

export default moviesSlice.reducer