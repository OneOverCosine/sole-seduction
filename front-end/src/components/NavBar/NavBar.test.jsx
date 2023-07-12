import NavBar from "./NavBar.jsx";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { ShopContext } from "../../context/ShopContext.jsx";

describe('NavBar Component Tests', () => {

    const emptyCart = { cartItems: {} }

    const cartWithItems = {
        cartItems: {
            'Item 1': 'name',
            'Item 2': 'name',
            'Item 3': 'name',
            'Item 4': 'name',
        }
    }

    it('Displays all top-level options', () => {
        render(
            <ShopContext.Provider value={emptyCart}>
                <MemoryRouter>
                    <NavBar />
                </MemoryRouter>
            </ShopContext.Provider>
        )

        const home = screen.getByText('Home');
        const women = screen.getByText('Women');
        const men = screen.getByText('Men');

        expect(home).toBeInTheDocument();
        expect(women).toBeInTheDocument();
        expect(men).toBeInTheDocument();
    })


    it('Displays Zero when cart is empty', () => {
        render(
            <ShopContext.Provider value={emptyCart}>
                <MemoryRouter>
                    <NavBar />
                </MemoryRouter>
            </ShopContext.Provider>
        )

        const cart = screen.getByText('( 0 )');

        expect(cart).toBeInTheDocument();
    })

    it('Displays number of items in the cart', () => {
        render(
            <ShopContext.Provider value={cartWithItems}>
                <MemoryRouter>
                    <NavBar />
                </MemoryRouter>
            </ShopContext.Provider>
        )

        const cart = screen.getByText('( 4 )');

        expect(cart).toBeInTheDocument();
    })
})