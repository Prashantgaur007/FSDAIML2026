import React from 'react';
import img from './Images/prashant.jpg';

function ICard() {
    return (
        <div
            style={{
                border: '10px solid red',
                height: '350px',
                width: '250px',
                padding: '20px',
                backgroundColor: 'lightblue',
                marginLeft: '200px'
            }}
        >
            <img
                src={img}
                alt="Prashant Gaur"
                style={{ width: '100%', height: 'auto' }}
            />

            <h2 style={{ backgroundColor: 'white', color: 'black' }}>
                ABES Engineering College
            </h2>

            <h2 style={{ backgroundColor: 'white', color: 'black' }}>
                Welcome to Vite
            </h2>

            <h2 style={{ backgroundColor: 'white', color: 'black' }}>
                NAME = Prashant Gaur
            </h2>

            <h2 style={{ backgroundColor: 'white', color: 'black' }}>
                ROLL NO = 147
            </h2>

            <h2 style={{ backgroundColor: 'white', color: 'black' }}>
                BRANCH = AIML
            </h2>

            <h2 style={{ backgroundColor: 'white', color: 'black' }}>
                YEAR = 2024-28
            </h2>

            <div>
                <img
                    src={img}
                    alt="Prashant Gaur"
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
        </div>
    );
}

export default ICard;