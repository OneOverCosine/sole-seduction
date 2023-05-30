import CategoryPage from "./CategoryPage.jsx";
//import { mockProductData } from "../../mockProducts";
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
        const style1 = screen.getByText("1460 SMOOTH LEATHER LACE UP BOOTS");
        const style2 = screen.getByText("Crochet wedge sandals");
        const price1 = screen.getByText("£100");
        const price2 = screen.getByText("£920");

        expect(brand1).toBeTruthy();
        expect(brand2).toBeTruthy();
        expect(style1).toBeTruthy();
        expect(style2).toBeTruthy();
        expect(price1).toBeTruthy();
        expect(price2).toBeTruthy();

    })
});