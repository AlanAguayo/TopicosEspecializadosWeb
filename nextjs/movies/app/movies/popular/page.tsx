import MovieCard from "@/components/MovieCards";


async function getPopularMovies(){
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=es-MX&page=1`)
    return res.json();
}

const page = async () =>{
const popularMovies = await getPopularMovies();

    return (
        <>
        <div className="px-4">
            <h1 className="text-2xl font-medium">Popular Movies</h1>
            <div className="grid grid-cols-4 mt-4 gap-4">
                {popularMovies.results.map((movie: MovieCardInterface)=>(
                    <MovieCard key={movie?.id} movie={movie}/>
                ))}
            </div>
        </div>
        </>
    );

}

export default page;