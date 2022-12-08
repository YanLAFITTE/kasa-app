import logoFooter from '../assets/logo-footer.png';

/**
 *
 * @returns footer
 */

const Footer = () => {
    return (
        <footer className='footer'>
            <img className='footer-img' src={logoFooter} alt='logo blanc de kasa' />
            <h3 className='footer-text'>© 2022 Kasa. All rights reserved</h3>
        </footer>
    );
};

export default Footer;
