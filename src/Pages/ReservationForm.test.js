import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReservationForm from './Bookatable';

describe('ReservationForm', () => {
    it('renders correctly', () => {
        const { getByText, getByLabelText } = render(<ReservationForm />);

        // Check if elements are present
        expect(getByText('Choose date')).toBeInTheDocument();
        expect(getByLabelText('Choose date')).toBeInTheDocument();
        expect(getByText('Choose time')).toBeInTheDocument();
        expect(getByLabelText('Choose time')).toBeInTheDocument();
        expect(getByText('Number of guests')).toBeInTheDocument();
        expect(getByLabelText('Number of guests')).toBeInTheDocument();
        expect(getByText('Occasion')).toBeInTheDocument();
        expect(getByLabelText('Occasion')).toBeInTheDocument();
        expect(getByText('Make Your reservation')).toBeInTheDocument();
    });

    it('handles user input and form submission', () => {
        const { getByLabelText, getByText } = render(<ReservationForm />);

        // Simulate user input
        fireEvent.change(getByLabelText('Choose date'), { target: { value: '2023-12-31' } });
        fireEvent.change(getByLabelText('Choose time'), { target: { value: '19:00' } });
        fireEvent.change(getByLabelText('Number of guests'), { target: { value: '4' } });
        fireEvent.change(getByLabelText('Occasion'), { target: { value: 'Anniversary' } });

        // Verify that the input values have been updated
        expect(getByLabelText('Choose date').value).toBe('2023-12-31');
        expect(getByLabelText('Choose time').value).toBe('19:00');
        expect(getByLabelText('Number of guests').value).toBe('4');
        expect(getByLabelText('Occasion').value).toBe('Anniversary');

        // Simulate form submission
        fireEvent.click(getByText('Make Your reservation'));

        // You can add assertions here to check if the form submission is handled correctly
        // For example, you can check if a function is called or if an API request is made
    });
});
