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
 * The "useloaderData" hook allows to load the data when browsing the page
 */

const About = () => {
    const loaderData = useLoaderData();
    document.title = '- KASA - A propos';

    return (
        <>
            <Banner banner={aboutBanner} />

            <Suspense fallback={<div>Loading...</div>}>
                <Await>
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
