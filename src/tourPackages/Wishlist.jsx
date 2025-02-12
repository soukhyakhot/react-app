import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Wishlist.module.css"


function Wishlist(){

    const [places, setPlaces] = useState([]);
    const [newPlace, setNewPlace] = useState("");
    const email = localStorage.getItem("email");
    // const encodedEmail = encodeURIComponent(email);

    useEffect(() => {
        if (email) {
            axios.get(`https://localhost:7066/api/Wishlist/getlist?emailId=${email}`)
                .then(res => setPlaces(res.data))
                .catch(err => console.error("Error fetching wishlist:", err.response ? err.response.data : err));
        }
    }, [email]);

    const handleAddPlace = () => {
        if (!newPlace.trim()) {
            alert("Please enter a valid place name before adding.");
            return;
        }

        axios.post("https://localhost:7066/api/Wishlist/additem", { EmailId: email, PlaceName: newPlace })
            .then(res => {
                console.log("API Response:", res.data); // Debugging

                if (!res.data || !res.data.placeName) {
                    console.error("Invalid response structure:", res.data);
                    return;
                }
    
                setPlaces([...places, res.data]); // Now correctly adding new place
                setNewPlace(""); // Clear input
            })
            .catch(err => console.error(err));
    
    };

    const handleRemovePlace = (id) => {
        axios.delete(`https://localhost:7066/api/Wishlist/removeitem?id=${id}`)
        .then(() => {
            setPlaces(prevPlaces => prevPlaces.filter(place => place.id !== id));
        })
        .catch(err => console.error("Error deleting place:", err.response ? err.response.data : err));
    };


    return(
        <div className={styles.card}>
        <h2>Create Wishlist</h2>
        <input
            type="text"
            placeholder="Enter Place Name"
            className={styles.inputbar}
            value={newPlace}
            onChange={(e) => setNewPlace(e.target.value)}
        />
        <button className={styles.btn} onClick={handleAddPlace}>Add Place</button>
        <ol>
            {places.map((place) =>
                <li key={place.id} className={styles.places} onDoubleClick={() => handleRemovePlace(place.id)}>
                    {place.placeName}
                </li>
            )}
        </ol>
    </div>
    );
}

export default Wishlist;