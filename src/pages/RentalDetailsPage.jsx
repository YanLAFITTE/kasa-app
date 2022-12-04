import ImagesSlider from '../components/ImagesSlider';
import Dropdown from '../components/Dropdown';
import { useParams } from 'react-router-dom';
import { useFetch } from '../utils/useFetch';
import { IoIosStar } from 'react-icons/io';

export default function RentalDetailsPage() {
    const { id } = useParams();
    const rentals = useFetch(window.location.origin + '/rentalsData.json');

    let currentRental;
    if (rentals.data) {
        currentRental = rentals.data.find((el) => el.id === id);
    }

    if (currentRental) {
        document.title = '- KASA - ' + currentRental.title;
    }

    let tags;
    if (currentRental) {
        tags = currentRental.tags;
    }

    let tagElements;
    if (currentRental) {
        tagElements = tags.map((tag, index) => (
            <span className='tag-infos' key={index}>
                {tag}
            </span>
        ));
    }

    const totalStars = 5;
    let activeStars;
    if (currentRental) {
        activeStars = currentRental.rating;
    }

    return (
        <>
            {rentals.isLoading && (
                <p style={{ textAlign: 'center', padding: '2rem' }}>
                    Loading...
                </p>
            )}
            {rentals.error && <p>{rentals.error}</p>}
            {!rentals.error && currentRental && (
                <div>
                    <ImagesSlider
                        slides={currentRental.pictures}
                        currentRental={currentRental}
                    />
                    <div className='rental-infos'>
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
                                {tagElements}
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
                            <div className='star-container'>
                                {[...new Array(totalStars)].map(
                                    (arr, index) => {
                                        return (
                                            <IoIosStar
                                                key={index}
                                                className={
                                                    index < activeStars
                                                        ? 'star-active'
                                                        : 'star'
                                                }
                                            />
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='drop-rental-container'>
                        <div className='drop-rental'>
                            <Dropdown
                                title={'Description'}
                                text={currentRental.description}
                            />
                        </div>
                        <div className='drop-rental'>
                            <Dropdown
                                title={'Equipments'}
                                equipements={currentRental.equipments}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
