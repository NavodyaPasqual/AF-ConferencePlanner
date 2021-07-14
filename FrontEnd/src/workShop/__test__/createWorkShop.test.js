import CreateWorkShop from "../createWorkShop";
import {getByTestId, render} from '@testing-library/react'
import '@testing-library/jest-dom';

let container = null;

describe('Testing Create WorkShop that contain a form ', () => {
    beforeEach (() => {
        container = render(<CreateWorkShop/>).container;
    });
    it('Should render form tag', () => {
        expect(getByTestId(container, 'form-tag')).toBeTruthy();
    });
    it('should render Title', () =>{
        expect(getByTestId(container, 'title-field')).toBeTruthy();
        expect(getByTestId(container, 'title-field').textContent).toBe('WorkShop Registration');
    });
    it('should render Input Field Organizer name', () =>{
        expect(getByTestId(container, 'organizer-name-field')).toBeTruthy();
    });
    it('should render Input Field Organizer contact number', () =>{
        expect(getByTestId(container, 'organizer-contact-no-field')).toBeTruthy();
    });
    it('should render Input Field Organizer email', () =>{
        expect(getByTestId(container, 'organizer-email-field')).toBeTruthy();
    });
    it('should render Input Field workshop title', () =>{
        expect(getByTestId(container, 'workshop-title-field')).toBeTruthy();
    });
    it('should render Input Field description', () =>{
        expect(getByTestId(container, 'description-field')).toBeTruthy();
    });
    it('should render Input Field proposal url', () =>{
        expect(getByTestId(container, 'proposal-url-field')).toBeTruthy();
    });
    it('should render Input Field presenter field', () =>{
        expect(getByTestId(container, 'presenter-field')).toBeTruthy();
    });
    it('should render Input Field estimated duration', () =>{
        expect(getByTestId(container, 'estimated-duration-field')).toBeTruthy();
    });
    it('should render Input Field payment amount field', () =>{
        expect(getByTestId(container, 'payment-amount-field')).toBeTruthy();
    });
    it('should render Submit Button', () =>{
        expect(getByTestId(container, 'submit-button')).toBeTruthy();
    });
});