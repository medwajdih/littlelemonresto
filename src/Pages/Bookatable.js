import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './Bookatable.css';

function ReservationForm() {
    const [resDate, setResDate] = useState('');
    const [resTime, setResTime] = useState('17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const [bookings, setBookings] = useState([]);
    const [availableTimes, setAvailableTimes] = useState([
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ]); // Default times
    const [isSubmitted, setIsSubmitted] = useState(false); // New state variable

    useEffect(() => {
        const savedBookings = localStorage.getItem('userBookings');
        if (savedBookings) {
            setBookings(JSON.parse(savedBookings));
        }

        // Fetch available times from the API when the component mounts
        fetchAvailableTimes();
    }, []);

    useEffect(() => {
        localStorage.setItem('userBookings', JSON.stringify(bookings));
    }, [bookings]);

    useEffect(() => {
        // Clear selected times when a new day starts
        const today = new Date().toLocaleDateString();
        const storedDate = localStorage.getItem('selectedDate');
        if (storedDate !== today) {
            localStorage.removeItem('selectedTimes');
            localStorage.setItem('selectedDate', today);
        }
    }, []);

    const fetchAvailableTimes = async () => {
        try {
            // Make a GET request to the API (replace 'API_URL_HERE' with the actual API URL)
            const response = await fetch('https://example.com/api/available-times'); // Replace with your API URL

            if (!response.ok) {
                throw new Error('Failed to fetch available times');
            }

            // Parse the JSON response
            const data = await response.json();

            // Extract the available times from the data (adjust this based on your API response structure)
            const times = data.times;

            // Filter out selected times for the same date
            const selectedTimes = JSON.parse(localStorage.getItem('selectedTimes')) || [];
            const filteredTimes = times.filter((time) => !selectedTimes.includes(time));

            setAvailableTimes(filteredTimes);
        } catch (error) {
            console.error('Error fetching available times:', error);

            // If API request fails, remove selected times from the default times
            const selectedTimes = JSON.parse(localStorage.getItem('selectedTimes')) || [];
            const updatedDefaultTimes = availableTimes.filter((time) => !selectedTimes.includes(time));

            setAvailableTimes(updatedDefaultTimes);
        }
    };

    const handleResTimeChange = (event) => {
        const selectedTime = event.target.value;
        const selectedTimes = JSON.parse(localStorage.getItem('selectedTimes')) || [];
        selectedTimes.push(selectedTime);
        localStorage.setItem('selectedTimes', JSON.stringify(selectedTimes));

        // Filter out the selected time
        const updatedAvailableTimes = availableTimes.filter((time) => time !== selectedTime);
        setAvailableTimes(updatedAvailableTimes);

        setResTime(selectedTime);
    };

    const handleResDateChange = (event) => {
        setResDate(event.target.value);
    };

    const handleGuestsChange = (event) => {
        setGuests(event.target.value);
    };

    const handleOccasionChange = (event) => {
        setOccasion(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if all fields are filled
        if (resDate && resTime && guests && occasion) {
            const newBooking = {
                date: resDate,
                time: resTime,
                guests,
                occasion,
            };

            setBookings([...bookings, newBooking]);

            setResDate('');
            setResTime('17:00');
            setGuests(1);
            setOccasion('Birthday');

            // Set isSubmitted to true when the form is successfully submitted
            setIsSubmitted(true);
        }
    };

    return (
        <div className="App">
            <Header />
            <div className="container-form">
                <div className="form-header">
                    <h1>Just Reserve your Table!</h1>
                </div>
                {isSubmitted ? ( // Conditional rendering based on isSubmitted state
                    <div className="confirmation-message">
                        <p>Your Reservation has been Confirmed! Thank you.</p>
                    </div>
                ) : (
                    <form className="my-form" style={{ display: 'grid', maxWidth: '300px', gap: '20px' }} onSubmit={handleSubmit}>
                        <label htmlFor="res-date">Choose a date</label>
                        <input type="date" id="res-date" value={resDate} onChange={handleResDateChange} required />

                        <label htmlFor="res-time">Choose a time</label>
                        <select id="res-time" value={resTime} onChange={handleResTimeChange} required>
                            {availableTimes.map((time) => (
                                <option key={time} value={time}>
                                    {time}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="guests">Number of guests</label>
                        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} required />

                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" value={occasion} onChange={handleOccasionChange} required>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>

                        <input type="submit" className="book-button" value="Make Your reservation" />
                    </form>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default ReservationForm;
