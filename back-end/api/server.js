import express from 'express';
import { artistArray } from '../../front-end/src/assets/database/artists.js';
import { songsArray } from '../../front-end/src/assets/database/songs.js';


const app = express();
const PORT = 3001;

app.get('/', (request, response) => {
    response.send('Endpoints: /artists e /songs');
})

app.get('/songs', (request, response) => {
    response.send(songsArray);
})

app.get('/artists', (request, response) => {
    response.send(artistArray);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})