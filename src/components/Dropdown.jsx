import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { useState } from 'react';

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='dropdown'>
            <button className='drop-btn' onClick={handleOpen}>
                {props.title}
                {!isOpen && <IoChevronDown className='drop-icon' />}
                {isOpen && <IoChevronUp className='drop-icon' />}
            </button>
            {isOpen && props.text && <p className='drop-p'>{props.text}</p>}
            {isOpen && props.equipements && (
                <ul className='drop-p'>
                    {props.equipements.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
