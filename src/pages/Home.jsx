// import { useFetch } from '../utils/useFetch';
import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import homeBanner from '../assets/banner-home.png';

export default function Home() {
    const loaderData = useLoaderData();
    document.title = '- KASA - Accueil';

    return (
        <>
            <Banner banner={homeBanner} text={true} />
            <section className='cards-container'>
                <div className='cards'>
                    <Cards cards={loaderData} />
                </div>
            </section>
        </>
    );
}

export function loader() {
    return fetch(window.location.origin + '/rentalsData.json');
}
