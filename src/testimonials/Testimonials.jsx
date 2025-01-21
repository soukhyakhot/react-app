import List from './List.jsx'


function Testimonials() {

    const testimonials = [{id: 1, name:"Jui & Jayendra", comment:"Travelling has always been our passion. Still we had never travelled to North east frequently, this being our first visit to Gangtok, Pelling and Darjeeling. All thanks to Swaraj Travels and specially to Abhijit Dada who suggested this region for our trip and organizing, guiding us with a great plan and comfortable schedule. Through the mountains, we could see all the views right at the time they were at their peak! It was wonderful to live right upon the valley in Gangtok, to see the Kanchan Ganga right from our hotel at Pelling and the whole city view right outside our Darjeeling stay! Overall, it was a memorable and mesmerizing journey indeed!"},
                          {id: 1, name:"Chandrashekhar and Nadini", comment:"Thanks Swaraj travels for The experience of visiting indore, ujjain, mandu and especially mortakka were great. We had never seen a resort like Reva. On the banks of mother narmada was something very very special for us. Quality food and naturally surrounded by different types of trees.His driver Mukesh is also Very genuine and honest person. Thanks for such a excellent setup of travel."},
                          {id: 1, name:"Mr. Bharat Jethani", comment:"I had booked a family vacation to Sikkim with Abhijit khadilkar in April. Right from the point of arrival at Bagdogra and travel to Penang and Gangtok; every arrangement was done in a systematic way. Travelling with my family; I was kept in touch with the local travel representative till the trip ended. I will always recommend Abhijit Khadilkar to my friends; family and relatives who will be going for a family vacations. All the best for taking care and giving the best of facilities in the trip. Thank"},
                          {id: 1, name:"Mr. Keval Vikam", comment:"I planned my holidays and Contacted Swaraj Travels Pvt Ltd,Abhijit Suggest me Rajashtan ,itinerary and accommodation provided by Swaraj Travels was just amazing with local sightseeing ,the package provided by Swaraj Travels was reasonable as compared to other competitors ,I can Say S-Superior service W-Worthiness A- Affordable Price R-Right Guidence A-Ace J-Joyous"},
                          {id: 1, name:"Mr. Pradeep Shingre", comment:"Thanks Abhijit and Swaraj Travels to make our Honeymoon trip memorable, our First priority to enjoy snow ,which we enjoy lot’s and Candle light dinner on the bank of river bias Add happiness in our trip"}
    ]

    return (
        <>
        <List items={testimonials}/>
        </>

    );
}
export default Testimonials