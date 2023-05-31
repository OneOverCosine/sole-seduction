import NavBar from "./NavBar.jsx";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';

describe('NavBar Component Tests', () => {
    it('Displays all top-level options', () => {
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        )

        const home = screen.getByText('Home');

        expect(home).toBeInTheDocument();
    })
})