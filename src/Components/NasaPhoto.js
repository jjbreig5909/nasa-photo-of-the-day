import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard"

export default function NasaPhoto() {

    const [photoUrl, setPhotoUrl] = useState([]);
    const [photoDescription, setPhotoDescription] = useState([]);
    const [photoDate, setPhotoDate] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=NeMOGmupoRFdFdUDvTycWq5tBzLgVXOkfBk9FLrl`)
            .then(data => {
                console.log(data);
                console.log(data.data.hdurl);
                setPhotoUrl(data.data.hdurl);
                setPhotoDescription(data.data.explanation);
                setPhotoDate(data.data.date);
            })
            .catch(error=> console.log(error));
    }, []);

    return(
        <div className="container">
            <div className="entry">
                <h3>{photoDate}</h3>
                <PhotoCard photoUrl={photoUrl} photoDescription={photoDescription}/>
            </div>
        </div>
    )
}