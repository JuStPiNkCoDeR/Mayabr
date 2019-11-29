import React from 'react';

const City = (props) => {
    return(
        <div className="city">
            <p>{props.city}</p>
            <div>
                <img src={props.weather.icon} alt="Изображение погоды"/>
                <p className="plus">{props.weather.temperature} &#8451;</p>
            </div>
            <p>Ветер: {props.weather.wind} м/с</p>
            <p>Давление: {props.weather.pressure} мм</p>
            <span className='crossIcon' onClick={() => props.handleDelete(props.city)}/>
        </div>
    );
};

export default City;