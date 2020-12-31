import React from "react";
import {Link} from  "react-router-dom";

const Weather = props => (
    <div>
         {
            <div>
             { props.minvalue1 && props.maxvalue1 && <p><label className="weather__key">Day1</label> 
             <label className="weather__value">&nbsp;&nbsp;&nbsp;&nbsp;Minimum Temp: {props.minvalue1}</label>
             <label className="weather__value">&nbsp;&nbsp;&nbsp;&nbsp;Maximum Temp: {props.maxvalue1}&nbsp;&nbsp;</label>
             <img src="http://openweathermap.org/img/w/01n.png" alt="Smiley face" height="42" width="42"></img>
             <Link to='/day1'>
             <button className="favorite__styled" type="button">More!</button>
             </Link>
             </p> }
             { props.minvalue1 && props.maxvalue1 && <p><label className="weather__key">Day2</label>
             <label className="weather__value">&nbsp;&nbsp;&nbsp;&nbsp;Minimum Temp: {props.minvalue2}</label>
             <label className="weather__value">&nbsp;&nbsp;&nbsp;&nbsp;Maximum Temp: {props.maxvalue2}&nbsp;&nbsp;</label>
             <img src="http://openweathermap.org/img/w/10n.png" alt="Smiley face" height="42" width="42"></img>
             <Link to='/day2'>
             <button className="favorite__styled" type="button">More!</button>
             </Link>
             </p> }
             { props.minvalue1 && props.maxvalue1 && <p><label className="weather__key">Day3</label>
             <label className="weather__value">&nbsp;&nbsp;&nbsp;&nbsp;Minimum Temp: {props.minvalue3}</label>
             <label className="weather__value">&nbsp;&nbsp;&nbsp;&nbsp;Maximum Temp: {props.maxvalue3}&nbsp;&nbsp;</label>
             <img src="http://openweathermap.org/img/w/04d.png" alt="Smiley face" height="42" width="42"></img>
             <Link to='/day3'>
             <button className="favorite__styled" type="button">More!</button>
             </Link>
             </p> }
             { props.minvalue1 && props.maxvalue1 && <p><label className="weather__key">Day4</label>
             <label className="weather__value">&nbsp;&nbsp;&nbsp;&nbsp;Minimum Temp: {props.minvalue4}</label>
             <label className="weather__value">&nbsp;&nbsp;&nbsp;&nbsp;Maximum Temp: {props.maxvalue4}&nbsp;&nbsp;</label>
             <img src="http://openweathermap.org/img/w/11d.png" alt="Smiley face" height="42" width="42"></img>
             <Link to='/day4'>
             <button className="favorite__styled" type="button">More!</button>
             </Link>
             </p> }
             { props.minvalue1 && props.maxvalue1 &&<p><label className="weather__key">Day5</label>
             <label className="weather__value">&nbsp;&nbsp;&nbsp;&nbsp;Minimum Temp: {props.minvalue5}</label>
             <label className="weather__value">&nbsp;&nbsp;&nbsp;&nbsp;Maximum Temp: {props.maxvalue5}&nbsp;&nbsp;</label>
             <img src="http://openweathermap.org/img/w/10n.png" alt="Smiley face" height="42" width="42"></img>
             <Link to='/day5'>
             <button className="favorite__styled" type="button">More!</button>
             </Link>
             </p> }
             </div> 
         }
         { 
             props.city && props.country && <p className="weather__key">Location: 
             <span className="weather__value">{props.city},{props.country}</span>
             </p>
         }
         { 
             props.temperature && <p className="weather__key">Temperature: 
             <span className="weather__value"> {props.temperature}</span>
             </p>
         }
         { 
             props.humidity && <p className="weather__key">Humidity: 
             <span className="weather__value"> {props.humidity}</span>
             </p>
         }
         { 
             props.description && <p className="weather__key">Conditions: 
             <span className="weather__value"> {props.description}</span>
             </p>
         }
         {  
             props.error && <p className="weather__error">{props.error}</p>
         }
        </div>
);
export default Weather;