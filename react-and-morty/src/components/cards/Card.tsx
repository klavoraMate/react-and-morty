import React from 'react';
import { Link } from 'react-router-dom';
import { mainUrls } from '../../api/dataRoutes';

import '../../style/cards.css';

interface CardProps {
    img: string;
    name: string;
    url: string;
    style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ img, name, url, style }) => {
    const imgSrc = typeof img === 'string' ? img : mainUrls.planetImg;

    return (
        <Link to={url}>
            <div className='inner-card'>
                <h3>{name}</h3>
                <img
                    src={imgSrc}
                    alt={name}
                    style={style}
                />
            </div>
        </Link>
    );
};

export default Card;
