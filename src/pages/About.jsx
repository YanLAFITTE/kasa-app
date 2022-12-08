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

            <section className='about-drop-container'>
                {loaderData.map((data, index) => (
                    <div className='drop-about' key={`${data.id}-${index}`}>
                        <Dropdown title={data.title} text={data.text} />
                    </div>
                ))}
            </section>
        </>
    );
};

export default About;

export function loader() {
    return fetch(window.location.origin + '/aboutData.json');
}
