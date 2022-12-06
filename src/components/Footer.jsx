import logoFooter from '../assets/logo-footer.png';

export default function Footer() {
    return (
        <footer className='footer'>
            <img className='footer-img' src={logoFooter} alt='logo' />
            <h3 className='footer-text'>© 2022 Kasa. All rights reserved</h3>
        </footer>
    );
}
