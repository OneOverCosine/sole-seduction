import React from 'react'
import Image from 'react-bootstrap/Image';
import './HeroImage.css';
import converse from '../../assets/hero-converse.jpg';
import heels from '../../assets/hero-heels.jpg';
import nike from '../../assets/hero-nike.jpg';

const HeroImage = () => {

    const randomImage = () => {
        const rand = Math.floor(Math.random() * 3);

        if (rand === 0)
            return converse;
        if (rand === 1)
            return heels;
        else return nike;
    }

    return (
        <>
            <Image fluid='true' className='hero-image' src={randomImage()} />
        </>
    )
}

export default HeroImage