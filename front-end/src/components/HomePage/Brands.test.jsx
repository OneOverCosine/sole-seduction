import Brands from "./Brands.jsx";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';

describe('Brands Component Tests', () => {
    it('Displays all categories in the array', () => {
        render(
            <MemoryRouter>
                <Brands />
            </MemoryRouter>
        );

        const prada = screen.getByText('Prada')
        const balenciaga = screen.getByText('Balenciaga')
        const gucci = screen.getByText('Gucci')
        const adidas = screen.getByText('Adidas')
        const docMartens = screen.getByText("Doc Marten's")

        expect(prada).toBeInTheDocument();
        expect(balenciaga).toBeInTheDocument();
        expect(gucci).toBeInTheDocument();
        expect(adidas).toBeInTheDocument();
        expect(docMartens).toBeInTheDocument();
    })
})