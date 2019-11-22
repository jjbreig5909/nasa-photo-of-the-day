import React, {useState} from 'react';

const PhotoCard = props => {

    const [isOpen, setIsOpen] = useState(false);
    const learnMore=()=> {
        console.log(isOpen);
    }

    return (
        <div className="nasa-card" key ="">
            <img className="nasa-photo" alt="Nasa photo of the day" src={props.photoUrl} />
            <h2>Image Description</h2>
            <p className="photo-description">{props.photoDescription}</p>
            {/* <p className="learn-more" onClick={learnMore}>Learn More</p> */}
        </div>
    )
}

export default PhotoCard;