import React  from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export default function Card(props){
    
    return (
        <div className="card">
            
            <div className="card--img-box">
                <img className="card--img" src={props.image_Url} alt={props.title} />
            </div>

            <div className="card--infos">
                <FontAwesomeIcon icon={faLocationDot} className="card--location-icon" />
                <h2 className="card--location">{props.location}</h2>
                <a className="card--location-url" href={props.google_maps_link}  target="_blank" >
                  View on Google Maps
                </a>

                <h3 className="card--title">{props.title}</h3>
                <p className="card--date">
                {props.start_date} - {props.end_date}
                </p>
                <p className="card--description">{props.description}</p>
            </div>
            

        </div>
        
    )
}
/*
title:"Stockholm",
        location:"Sweeden",
        google_maps_link:"https://goo.gl/maps/z592rU6MJz346Rny6",
        start_date:"15 July, 2025",
        end_date:"26 July, 2025",
        
        description:"Stockholm, Sweden: Sprawling across 14 islands, it is a vibrant and culturally rich capital city. With its stunning waterfront, picturesque old town, and modern Scandinavian architecture, Stockholm offers a perfect blend of history and contemporary charm. Explore its royal palaces, world-class museums, and thriving culinary scene to experience the best of Swedish culture.",
        image_Url:"https://unsplash.com/fr/photos/8PJanMchYCY",
 */