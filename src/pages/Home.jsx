import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import homeBanner from '../assets/banner-home.webp';

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
            <Banner banner={homeBanner} text={true} />
            <section className='cards-container'>
                <div className='cards'>
                    {loaderData.map((card) => (
                        <Cards key={card.id} card={card} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;

export function loader() {
    return fetch(window.location.origin + '/rentalsData.json');
}
