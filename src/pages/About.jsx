import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';
import aboutBanner from '../assets/banner-about.png';
import { useFetch } from '../utils/useFetch';

const About = () => {
    document.title = '- KASA - A propos';
    const about = useFetch(window.location.origin + '/aboutData.json');

    return (
        <>
            <Banner banner={aboutBanner} />
            {about.isLoading && (
                <p style={{ textAlign: 'center', padding: '2rem' }}>
                    Loading...
                </p>
            )}
            {about.error && <p>{about.error}</p>}
            {about.data && (
                <div>
                    {about.data.map((data, index) => (
                        <Dropdown
                            key={index}
                            title={data.title}
                            text={data.text}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default About;
