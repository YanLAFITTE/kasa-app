import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { useState } from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param {*} props create drop-down component
 * @returns dropdown
 */

/** Uses state to keep drop-down menus open or closed, in order to make a conditional rendering */

const Dropdown = ({ title, text, equipments }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='dropdown'>
            <button className='drop-btn' onClick={handleOpen}>
                {title}
                {!isOpen && <IoChevronDown className='drop-icon' />}
                {isOpen && <IoChevronUp className='drop-icon' />}
            </button>
            {isOpen && text && <p className='drop-p'>{text}</p>}
            {isOpen && equipments && (
                <ul className='drop-p'>
                    {equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

/** PropTypes ensure the typing of the data */

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    equipments: PropTypes.array,
};

export default Dropdown;
