import { MovieCardInterface } from "@/components/MovieCards";

interface InterfaceMovieDetail{
    params:{
        id: MovieCardInterface["id"]
    }
}

async function getMovieDetails(id: MovieCardInterface["id"]){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=es-MX`
    )
    return res.json();
}

const page = async ({params}: InterfaceMovieDetail) =>{
    const {id}=params;
    const movie =await getMovieDetails(id);

    return(
        <div>
            <h2>Title:{movie?.title}</h2>
            <p>{movie?.overview}</p>
        </div>
    );
}


export default page;
