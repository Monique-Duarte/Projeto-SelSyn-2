import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../Login/Login.jsx'; 
import '@testing-library/jest-dom';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate,
}));

describe('Login Component', () => {
    beforeEach(() => {
        render(<Login />);
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
        window.alert = jest.fn();

        fireEvent.change(screen.getByPlaceholderText(/Login/i), { target: { value: 'user' } });
        fireEvent.change(screen.getByPlaceholderText(/Senha/i), { target: { value: 'wrongpassword' } });
        fireEvent.click(screen.getByText(/Acessar/i));

        expect(window.alert).toHaveBeenCalledWith('Credenciais inválidas!');
    });
});
