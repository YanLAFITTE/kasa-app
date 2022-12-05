import { IoIosStar } from 'react-icons/io';

export default function Stars({ currentRental }) {
    const totalStars = 5;
    let activeStars;
    if (currentRental) {
        activeStars = currentRental.rating;
    }
    const tagsElements = [...new Array(totalStars)].map((arr, index) => {
        return (
            <IoIosStar
                key={index}
                className={index < activeStars ? 'star-active' : 'star'}
            />
        );
    });

    return <>{tagsElements}</>;
}
