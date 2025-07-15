import React from 'react';
import block from '../info_block.module.css';

import img1 from '../../images/img1.webp';
import img2 from '../../images/img2.webp';

const sliderData = [
    {
        text: 'Integrate new hires into the team more quickly',
        img: img1,
    },
    {
        text: 'Design personal welcome experiences',
        img: img2,
    },
    {
        text: 'Apply consistent and fair processes',
        img: img1,
    },
    {
        text: 'Keep everything moving forward with automated tasks',
        img: img2,
    },
    {
        text: 'Build a foundation for constant improvement',
        img: img1,
    },
];

const SliderButtons = ({ setImage }) => {
    return (
        <div className={block.slider_container}>
            {sliderData.map(({ text, img }, index) => (
                <div key={index} onClick={() => setImage(img)} className={block.slider_button}>
                    <p>{text}</p>
                </div>
            ))}
        </div>
    );
};

export default SliderButtons;
