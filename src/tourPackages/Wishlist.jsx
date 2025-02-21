import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Wishlist.module.css"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
        // if (!newPlace.trim()) {
        //     toast.success("Please enter a valid place name before adding!");
        //     return;
        // }

        axios.post("https://localhost:7066/api/Wishlist/additem", { EmailId: email, PlaceName: newPlace })
            .then(res => {
                console.log("API Response:", res.data); // Debugging
                toast.success("Wishlist Item Added Successfully!")
                if (!res.data || !res.data.placeName) {
                    console.error("Invalid response structure:", res.data);
                    return;
                }
    
                setPlaces([...places, res.data]); // Now correctly adding new place
                setNewPlace(""); // Clear input
            })
            .catch((error) => {
                if (error.response) {
                    const status = error.response.status;
                    const responseData = error.response.data;
    
                    // Handle validation errors (400 status with specific errors)
                    if (status === 400 && responseData.errors) {
                        Object.keys(responseData.errors).forEach((key) => {
                            toast.error(responseData.errors[key][0]); // Show each validation error
                        });
                    } else {
                        // Show general error message
                        const errorMessage = responseData.message || "Error in Adding Wishlist Item!";
                        toast.error(errorMessage);
                    }
                } else {
                    toast.error("Something went wrong. Please try again.");
                }
            });
    
    };

    const handleRemovePlace = (id) => {
        axios.delete(`https://localhost:7066/api/Wishlist/removeitem?id=${id}`)
        .then(() => {
            setPlaces(prevPlaces => prevPlaces.filter(place => place.id !== id));
            toast.success("Wishlist Item Deleted Successfully!");
        })
        // .catch(err => console.error("Error deleting place:", err.response ? err.response.data : err));
        .catch((error) => {
            if (error.response) {
                const status = error.response.status;
                const responseData = error.response.data;

                // Handle validation errors (400 status with specific errors)
                if (status === 400 && responseData.errors) {
                    Object.keys(responseData.errors).forEach((key) => {
                        toast.error(responseData.errors[key][0]); // Show each validation error
                    });
                } else {
                    // Show general error message
                    const errorMessage = responseData.message || "Error in Adding Wishlist Item!";
                    toast.error(errorMessage);
                }
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        });
    };


    return(
        <>
        <ToastContainer position="top-center" autoClose={3000} />
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
    </>
    );
}

export default Wishlist;