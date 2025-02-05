import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../Login';

// Mock do useNavigate
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('Login Component', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );
    });

    test('renders login form', () => {
        expect(screen.getByPlaceholderText(/Login/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Senha/i)).toBeInTheDocument();
        expect(screen.getByText(/Acessar/i)).toBeInTheDocument();
    });

    test('navigates to /bem-vindo with correct credentials', () => {
        fireEvent.change(screen.getByPlaceholderText(/Login/i), { target: { value: 'admin' } });
        fireEvent.change(screen.getByPlaceholderText(/Senha/i), { target: { value: '1234' } });
        fireEvent.click(screen.getByText(/Acessar/i));

        expect(mockNavigate).toHaveBeenCalledWith('/bem-vindo');
    });

    test('shows alert for invalid credentials', () => {
        // Mocks o alert
        window.alert = jest.fn();

        fireEvent.change(screen.getByPlaceholderText(/Login/i), { target: { value: 'user' } });
        fireEvent.change(screen.getByPlaceholderText(/Senha/i), { target: { value: 'wrongpassword' } });
        fireEvent.click(screen.getByText(/Acessar/i));

        expect(window.alert).toHaveBeenCalledWith('Credenciais inválidas!');
    });
});
