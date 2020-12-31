import React from "react";

const HourlyFive = props => (
    <div className="Hourly">
        {  props.hourlist  && <div className="col-xs-2 hour"> 
            { props.hourlist[0] && <p>Time:&nbsp;{props.hourlist[0].time}</p> }
            { props.hourlist[0] && <p>Temparature:&nbsp; {props.hourlist[0].temp} </p>}
            { props.hourlist[0] && <p>Humidity:&nbsp; {props.hourlist[0].humidity} </p>}
        </div> }

        {  props.hourlist  && <div className="col-xs-2 hour"> 
            { props.hourlist[1] && <p>Time:&nbsp;{props.hourlist[1].time}</p> }
            { props.hourlist[1] && <p>Temparature:&nbsp; {props.hourlist[1].temp} </p>}
            { props.hourlist[1] && <p>Humidity:&nbsp; {props.hourlist[1].humidity} </p>}
        </div> }

        { props.hourlist && <div className="col-xs-2 hour">
        
        {   props.hourlist[2] && <p>Time:&nbsp;{props.hourlist[2].time}</p> }
        {   props.hourlist[2] && <p>Temparature:&nbsp;{props.hourlist[2].temp} </p>}
        {  props.hourlist[2] && <p>Humidity:&nbsp;{props.hourlist[2].humidity} </p>}
        </div> }

        { props.hourlist && <div className="col-xs-2 hour">
        
        {   props.hourlist[3] && <p>Time:&nbsp;{props.hourlist[3].time}</p> }
        {   props.hourlist[3] && <p>Temparature:&nbsp;{props.hourlist[3].temp} </p>}
        {  props.hourlist[3] && <p>Humidity:&nbsp;{props.hourlist[3].humidity} </p>}
        </div> }

        { props.hourlist && <div className="col-xs-2 hour">
        
        {   props.hourlist[4] && <p>Time:&nbsp;{props.hourlist[4].time}</p> }
        {   props.hourlist[4] && <p>Temparature:&nbsp;{props.hourlist[4].temp} </p>}
        {  props.hourlist[4] && <p>Humidity:&nbsp;{props.hourlist[4].humidity} </p>}
        </div> }

        { props.hourlist && <div className="col-xs-2 hour">
        
        {   props.hourlist[5] && <p>Time:&nbsp;{props.hourlist[5].time}</p> }
        {   props.hourlist[5] && <p>Temparature:&nbsp;{props.hourlist[5].temp} </p>}
        {  props.hourlist[5] && <p>Humidity:&nbsp;{props.hourlist[5].humidity} </p>}
        </div> }

        { props.hourlist && <div className="col-xs-2 hour">
        
        {   props.hourlist[6] && <p>Time:&nbsp;{props.hourlist[6].time}</p> }
        {   props.hourlist[6] && <p>Temparature:&nbsp;{props.hourlist[6].temp} </p>}
        {  props.hourlist[6] && <p>Humidity:&nbsp;{props.hourlist[6].humidity} </p>}
        </div> }

        { props.hourlist && <div className="col-xs-2 hour">
        
        {   props.hourlist[7] && <p>Time:&nbsp;{props.hourlist[7].time}</p> }
        {   props.hourlist[7] && <p>Temparature:&nbsp;{props.hourlist[7].temp} </p>}
        {  props.hourlist[7] && <p>Humidity:&nbsp;{props.hourlist[7].humidity} </p>}
        </div> }

    </div>
);

export default HourlyFive;