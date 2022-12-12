import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';
import aboutBanner from '../assets/banner-about.webp';
import { useLoaderData, Await } from 'react-router-dom';
import { Suspense } from 'react';

/**
 *
 * @returns  about page
 */

/**
 * React-router-dom provides conventional data loading hooks to initiate data loading during a navigation
 * The "loader" function sends the data to the router and "useloaderData" allows to load the data when browsing the page
 */

const About = () => {
    const loaderData = useLoaderData();
    document.title = '- KASA - A propos';

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Await>
                    <Banner banner={aboutBanner} />

                    <section className='about-drop-container'>
                        {loaderData.map((data, index) => (
                            <div
                                className='drop-about'
                                key={`${data.id}-${index}`}
                            >
                                <Dropdown title={data.title} text={data.text} />
                            </div>
                        ))}
                    </section>
                </Await>
            </Suspense>
        </>
    );
};

export default About;

export async function loader() {
    return await( fetch(window.location.origin + '/aboutData.json'));
}
