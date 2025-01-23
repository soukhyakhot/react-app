import React, {useState} from "react";
import styels from "./Wishlist.module.css"


function Wishlist(){

    const [places,setPlaces] = useState(["Kerala","Meghalaya",'Gujarat']);

    function handleAddPlace (){

        const newPlace = document.getElementById("placeInput").value.trim();
        document.getElementById("placeInput").value = "";

        if (newPlace === "") {
            alert("Please enter a valid place name before adding.");
            return;
        }
        
        setPlaces((p) => [...p, newPlace])

        
    }

    function handleRemovePlace (index){
        setPlaces(places.filter((_,i) => i !== index));

    }

    return(
        <div>
        <h2>Create Wishlist</h2>
        <input type="text" id="placeInput" placeholder="Enter Place Name" className={styels.inputbar} />
        <button className={styels.btn} onClick={handleAddPlace}>Add Place</button>
        <ol>
            {places.map((place,index) =>
            <li className={styels.places} key={index} onDoubleClick={() => handleRemovePlace(index)}>
                {place}
            </li>)}
        </ol>
        
        
    </div>
    );
}

export default Wishlist;