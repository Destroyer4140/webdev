import { render, screen} from '@testing-library/react'
import Contact from '../Contact';
import "@testing-library/jest-dom"

test("Should load contact us componenet", () => {
    render(<Contact/>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

test("Should load button inside contact componenet", () => {
    render(<Contact/>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});

test("Should load form inside contact componenet", () => {
    render(<Contact/>);
    const form = screen.getByRole("form", {name: /contact-us/i});
    expect(form).toBeInTheDocument();
});

test("Should load two input box on the contact componenet", () => {
    render(<Contact/>);
    const inputBox = screen.getAllByRole("textbox");
    
    expect(inputBox.length).toBe(2);
});