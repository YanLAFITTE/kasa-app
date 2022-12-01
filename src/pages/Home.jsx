import { useEffect, useState } from 'react';
import { getRentals } from '../utils/rentalsData.js';
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import homeBanner from '../assets/banner-home.png';

export default function Home() {
    document.title = '- KASA - Accueil';
    const [getRentalsData, setGetRentalsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        async function loadCards() {
            setIsLoading(true);
            try {
                const getRentalsData = await getRentals();
                setGetRentalsData(getRentalsData);
            } catch (err) {
                setError(err.message);
            }
            setIsLoading(false);
        }

        loadCards();
    }, []);

    return (
        <>
            <Banner banner={homeBanner} text={true} />
            {isLoading && (
                <p style={{ textAlign: 'center', padding: '2rem' }}>
                    Loading...
                </p>
            )}
            {error && <p>{error}</p>}
            {!error && getRentalsData && <Cards cards={getRentalsData} />}
        </>
    );
}
