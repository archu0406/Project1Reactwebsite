import React from 'react';
import '../css/Card.css';
import CardItem from '../Components/CardItem';
import amazonion from '../img/amazonion.jpg';
import bali from '../img/bali.jpg';
import germany from '../img/germany.jpg';
import Italy from '../img/Italy.jpg';
import india from '../img/india.jpg';
import male from '../img/male.jpg';



class Card extends React.Component {
    render() 
    {
    return(
        <div className='cards'>
            <h1>Explore New Destinations!!</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                            src={germany}
                            text='Germany'
                            />
                            <CardItem
                            src={amazonion}
                            text='Amazon Jungle'
                            />
                            <CardItem
                            src={bali}
                            text='Indonesia'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                            src={india}
                            text='India'
                            />
                            <CardItem
                            src={male}
                            text='Maldives'
                            />
                            <CardItem
                            src={Italy}
                            text='Italy'
                            />
                        </ul>
                </div>
            </div>
            <div className='travel_quote'>
                <h2>"Explore into our destination travel around 
                    the world filled with new exemplary ideas, 
                    travel tips and recommendations for places to travel...!!"</h2>
            </div>

        </div>
    );
}

};

export default Card;