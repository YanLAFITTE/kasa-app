import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';
import aboutBanner from '../assets/banner-about.png';
// import { useFetch } from '../utils/useFetch';
import { useLoaderData } from 'react-router-dom';

/**
 *
 * @returns  about page
 */

const About = () => {
    const loaderData = useLoaderData();
    document.title = '- KASA - A propos';

    return (
        <>
            <Banner banner={aboutBanner} />

            <div className='about-drop-container'>
                {loaderData.map((data, index) => (
                    <div className='drop-about'>
                        <Dropdown
                            key={index}
                            title={data.title}
                            text={data.text}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default About;

export function loader() {
    return fetch(window.location.origin + '/aboutData.json');
}
