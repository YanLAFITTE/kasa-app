import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';
import { useLoaderData } from 'react-router-dom';

/**
 *
 * @returns  about page
 */

/**
 * React-router-dom provides conventional data loading hooks to initiate data loading during a navigation
 * The "useloaderData" hook allows to load the data when browsing the page
 */

const About = ({ banner }) => {
    const loaderData = useLoaderData();
    document.title = '- KASA - A propos';

    return (
        <>
            <Banner banner={banner} />
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
