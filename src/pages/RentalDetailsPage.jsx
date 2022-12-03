import ImagesSlider from '../components/ImagesSlider';
import Dropdown from '../components/Dropdown';
import classes from './RentalDetailsPage.module.css';

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
            <span className={classes.tagInfos} key={index}>
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
                    <ImagesSlider slides={currentRental.pictures}  />
                    <div className={classes.rentalInfos}>
                        <div className={classes.rentalInfosRight}>
                            <div>
                                <h1 className={classes.titleInfos}>
                                    {currentRental.title}
                                </h1>
                                <h2 className={classes.locationInfos}>
                                    {currentRental.location}
                                </h2>
                            </div>
                            <div className={classes.tagInfosContainer}>
                                {tagElements}
                            </div>
                        </div>
                        <div className={classes.rentalInfosLeft}>
                            <div className={classes.nameImageInfos}>
                                <h3 className={classes.nameInfos}>
                                    {currentRental.host.name}
                                </h3>
                                <img
                                    className={classes.imageInfos}
                                    src={currentRental.host.picture}
                                    alt='avatar'
                                />
                            </div>
                            <div className={classes.starContainer}>
                                {[...new Array(totalStars)].map(
                                    (arr, index) => {
                                        return (
                                            <IoIosStar
                                                key={index}
                                                className={
                                                    index < activeStars
                                                        ? classes.starActive
                                                        : classes.star
                                                }
                                            />
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={classes.dropdownContainer}>
                        <div className={classes.dropRentalDetailsPage}>
                            <Dropdown
                                title={'Description'}
                                text={currentRental.description}
                            />
                        </div>
                        <div className={classes.dropRentalDetailsPage}>
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
