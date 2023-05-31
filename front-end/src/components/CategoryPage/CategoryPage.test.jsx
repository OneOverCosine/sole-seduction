import CategoryPage from "./CategoryPage.jsx";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react'

describe('Category Page Tests', () => {
    it('Should show product style, price, brand', () => {
        // need to know how the data is passed in
        render(
            <MemoryRouter>
                <CategoryPage />
            </MemoryRouter>
        );

        const brand1 = screen.getByText("Doc Marten's");
        const brand2 = screen.getByText("Prada");
        const style1 = screen.getByText(/SMOOTH LEATHER/i);
        const style2 = screen.getByText("Crochet wedge sandals");
        const price1 = screen.getByText("£100");
        const price2 = screen.getByText("£920");

        expect(brand1).toBeInTheDocument();
        expect(brand2).toBeInTheDocument();
        expect(style1).toBeInTheDocument();
        expect(style2).toBeInTheDocument();
        expect(price1).toBeInTheDocument();
        expect(price2).toBeInTheDocument();

    })
});