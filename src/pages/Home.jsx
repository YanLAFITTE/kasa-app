import Banner from '../components/Banner';
import Cards from '../components/Cards';
import homeBanner from '../assets/banner-home.webp';
import { useLoaderData, Await } from 'react-router-dom';
import { Suspense } from 'react';

/**
 *
 * @returns  home page
 */

/**
 * React-router-dom provides conventional data loading hooks to initiate data loading during a navigation
 * The "useloaderData" hook allows to load the data when browsing the page
 */
const Home = () => {
    const loaderData = useLoaderData();
    document.title = '- KASA - Accueil';

    return (
        <>
            <Banner banner={homeBanner} text={true} />
            <section className='cards-container'>
                <Suspense fallback={<div>Loading...</div>}>
                    <Await>
                        <div className='cards'>
                            {loaderData.map((card) => (
                                <Cards key={card.id} card={card} />
                            ))}
                        </div>
                    </Await>
                </Suspense>
            </section>
        </>
    );
};

export default Home;
