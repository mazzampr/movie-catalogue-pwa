import TheMovieDbSource from "../../data/themoviedb-source";

const nowPlaying = {
    async render() {
        return `
        <h2>Now Playing Page</h2>`;
    },

    async afterRender() {
        const movies = await TheMovieDbSource.nowPlayingMovies();
        console.log(movies);
        // Akan dipanggil setelah render
    },
};

export default nowPlaying;