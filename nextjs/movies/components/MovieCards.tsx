import { NO_IMAGE_URL, IMAGE_URL } from "@/config";
import Image from "next/image"
import React  from "react"
import Link from "next/link"

export interface MovieCardInterface{
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
}

const MovieCard = ({movie}:{movie: MovieCardInterface})=>{
    return (
        <>
        <Link href={`/movie/${movie?.id}`}>
        <div className="h-[400px] relative">
            <Image
            src={
                movie?.poster_path?`${IMAGE_URL}${movie?.poster_path}`
                :`${NO_IMAGE_URL}`
            }
            alt={movie?.title}
            fill={true}
            ></Image>
        </div>
            <div>{movie?.title}</div>
            </Link>
        </>
    );
}

export default MovieCard;