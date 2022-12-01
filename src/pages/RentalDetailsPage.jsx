import ImagesSlider from '../components/ImagesSlider';
import Dropdown from '../components/Dropdown';
import classes from './RentalDetailsPage.module.css';

import { useParams } from 'react-router-dom';
import { getRentals } from '../utils/rentalsData.js';
import { IoIosStar } from 'react-icons/io';

export default function RentalDetailsPage() {
    const params = useParams();

    const { id } = params;
    const rentals = getRentals();

    const currentRentalArray = rentals.filter((rental) => rental.id === id);
    const currentRental = currentRentalArray[0];
    document.title = '- KASA - ' + currentRental.title;

    const tags = currentRental.tags;
    const tagElements = tags.map((tag, index) => (
        <span className={classes.tagInfos} key={index}>
            {tag}
        </span>
    ));

    const totalStars = 5;
    const activeStars = currentRental.rating;

    return (
        <>
            <div>
                <ImagesSlider slides={currentRental.pictures} />
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
                            {[...new Array(totalStars)].map((arr, index) => {
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
                            })}
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
        </>
    );
}
