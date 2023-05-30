import CheckoutPage from './CheckoutPage.jsx';
import { MemoryRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react'

describe('Checkout Page Tests', () => {
    it('Shows title Shopping Cart', () => {
        render(
            <MemoryRouter>
                <CheckoutPage />
            </MemoryRouter>
        );

        const title = screen.getByText(/Shopping Cart/i);

        expect(title).toBeInTheDocument();
    });
})