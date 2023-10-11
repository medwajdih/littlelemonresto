// BookingTracker.js
import React, { useState, useEffect } from 'react';

function BookingTracker({ onBookingSubmit, defaultTimes, bookings }) {
    const [availableTimes, setAvailableTimes] = useState(defaultTimes);

    useEffect(() => {
        // Filter available times based on booked times
        const filteredTimes = availableTimes.filter(
            (time) => !bookings.some((booking) => booking.time === time)
        );

        setAvailableTimes(filteredTimes);
    }, [bookings]);

    return (
        <div>
            <p>Choose a time:</p>
            <select
                value={availableTimes[0]}
                onChange={(e) => onBookingSubmit(e.target.value)}
            >
                {availableTimes.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default BookingTracker;
