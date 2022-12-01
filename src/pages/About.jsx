import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';
import aboutBanner from '../assets/banner-about.png';
import aboutData from '../utils/aboutData.json';

const About = () => {
    document.title = '- KASA - A propos';

    return (
        <>
            <Banner banner={aboutBanner} />

            <div>
                {aboutData.map((data, index) => (
                    <Dropdown key={index} title={data.title} text={data.text} />
                ))}
            </div>
        </>
    );
};

export default About;
