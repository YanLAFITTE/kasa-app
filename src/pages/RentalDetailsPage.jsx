import { useParams, useLoaderData } from 'react-router-dom';
import ImagesSlider from '../components/ImagesSlider';
import Dropdown from '../components/Dropdown';
import Tags from '../components/Tags';
import Stars from '../components/Stars';
import ErrorElement from '../components/ErrorElement';

/**
 *
 * @returns  rental details page
 */

/**
 * React-router-dom provides conventional data loading hooks to initiate data loading during a navigation
 * The "useloaderData" hook allows to load the data when browsing the page
 */

const RentalDetailsPage = () => {
    const loaderData = useLoaderData();
    const { id } = useParams();
    const currentRental = loaderData.find((el) => el.id === id);
    if (!currentRental) {
        return <ErrorElement />;
    }
    document.title = '- KASA - ' + currentRental.title;

    return (
        <>
            <ImagesSlider slides={currentRental.pictures} />
            <section className='rental-infos'>
                <div className='rental-infos-right'>
                    <div>
                        <h1 className='rental-infos-title'>
                            {currentRental.title}
                        </h1>
                        <h2 className='rental-infos-location'>
                            {currentRental.location}
                        </h2>
                    </div>
                    <div className='tag-infos-container'>
                        {currentRental.tags.map((tag, index) => (
                            <Tags tag={tag} key={index} />
                        ))}
                    </div>
                </div>
                <div className='rental-infos-left'>
                    <div className='name-image-infos'>
                        <h3 className='name-infos'>
                            {currentRental.host.name}
                        </h3>
                        <img
                            className='image-infos'
                            src={currentRental.host.picture}
                            alt='avatar'
                        />
                    </div>
                    <div className='stars-container'>
                        <Stars rating={currentRental.rating} />
                    </div>
                </div>
            </section>
            <section className='drop-rental-container'>
                <div className='drop-rental'>
                    <Dropdown
                        title={'Description'}
                        text={currentRental.description}
                    />
                </div>
                <div className='drop-rental'>
                    <Dropdown
                        title={'Équipements'}
                        equipments={currentRental.equipments}
                    />
                </div>
            </section>
        </>
    );
};

export default RentalDetailsPage;
