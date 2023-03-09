import { useState, useEffect } from "react";
import { getGitfs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [ images, setImages ] = useState([]);
    const [ isLoading, setIsLoading] = useState(true);
    
    const getImages = async() => {
        const images = await getGitfs(category);
        setImages(images);
        setIsLoading(false);
    }

    useEffect( ()=> {
        getImages();
    }, []);

    return {
        images,
        isLoading,
    }

}