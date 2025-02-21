import axios from 'axios';

//const { NODE_ENV } = process.env;
//const URL = "http://localhost:3001/api";
const URL = "https://projeto-spotify-d2eq.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
