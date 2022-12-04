import { useFetch } from '../utils/useFetch';

import Banner from '../components/Banner';
import Cards from '../components/Cards';
import homeBanner from '../assets/banner-home.png';

export default function Home() {
    document.title = '- KASA - Accueil';
    const rentals = useFetch(window.location.origin + '/rentalsData.json');
    return (
        <>
            <Banner banner={homeBanner} text={true} />
            {rentals.isLoading && (
                <p style={{ textAlign: 'center', padding: '2rem' }}>
                    Loading...
                </p>
            )}
            {rentals.error && <p>{rentals.error}</p>}
            <section className='cards-container'>
                <div className='cards'>
                    {!rentals.error && rentals.data && (
                        <Cards cards={rentals.data} />
                    )}
                </div>
            </section>
        </>
    );
}
