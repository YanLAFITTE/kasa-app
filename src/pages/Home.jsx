import Banner from '../components/Banner';
import Cards from '../components/Cards';
import { useLoaderData } from 'react-router-dom';

/**
 *
 * @returns  home page
 */

/**
 * React-router-dom provides conventional data loading hooks to initiate data loading during a navigation
 * The "useloaderData" hook allows to load the data when browsing the page
 */

const Home = ({ banner }) => {
    const loaderData = useLoaderData();
    document.title = '- KASA - Accueil';

    return (
        <>
            <Banner banner={banner} text={true} />
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
