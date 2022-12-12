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
 * The "loader" function sends the data to the router and "useloaderData" allows to load the data when browsing the page
 */
const Home = () => {
    const loaderData = useLoaderData();
    document.title = '- KASA - Accueil';

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Await>
                    <Banner banner={homeBanner} text={true} />
                    <section className='cards-container'>
                        <div className='cards'>
                            {loaderData.map((card) => (
                                <Cards key={card.id} card={card} />
                            ))}
                        </div>
                    </section>
                </Await>
            </Suspense>
        </>
    );
};

export default Home;

export async function loader() {
    const dataLoad = fetch(window.location.origin + '/rentalsData.json');
    return  await( dataLoad);
}
