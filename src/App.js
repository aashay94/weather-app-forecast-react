import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import HourlyOne from "./components/DayOne";
import HourlyTwo from "./components/DayTwo";
import HourlyThree from "./components/DayThree";
import HourlyFour from "./components/DayFour";
import HourlyFive from "./components/DayFive";
import { BrowserRouter as Router, Route } from "react-router-dom";

const API_KEY = "85d5ff9d688a6805d8ef1a9b0479f011";

class App extends React.Component{
  state ={
    //
    minvalue:undefined,
    maxvalue:undefined,
    //
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
  }

  getWeather = async(e) => {
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api_call=await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);
    //Converting object(json) into readable format
    const data = await api_call.json();
    let minvalueOf1=0;
    let maxvalueOf1=0;
    let minvalueOf2=0;
    let maxvalueOf2=0;
    let minvalueOf3=0;
    let maxvalueOf3=0;
    let minvalueOf4=0;
    let maxvalueOf4=0;
    let minvalueOf5=0;
    let maxvalueOf5=0;
    
    if(city && country){
      console.log(data);
      var list1=[],list2=[],list3=[],list4=[],list5=[];
      var date =new Date();
      console.log(date);
      var day=(data.list[0].dt_txt).substring(8,10);
      let i=0;
      let count1=0,count2=0,count3=0,count4=0,count5=0;
      while(((data.list[i].dt_txt).substring(8,10)) === day){
        minvalueOf1 += data.list[i].main.temp_min;
        maxvalueOf1 += data.list[i].main.temp_max;
        i++;
      }
      for(let j=0;j<i;j++){
        list1.push({
          time:(data.list[j].dt_txt).substring(11,19),
          temp:data.list[j].main.temp,
          humidity:data.list[j].main.humidity
        })
      }
      console.log(list1);
      count1=i;
      console.log(count1);
      if(Number(day) >= 10){
        day=(Number(day)+1).toString();
      }else{
        day=('0'+((Number(day)+1).toString()));
      }
      while(((data.list[i].dt_txt).substring(8,10)).localeCompare(day) === 0){
         minvalueOf2 += data.list[i].main.temp_min;
         maxvalueOf2 += data.list[i].main.temp_max;
         i++;
      }
      count2=(i-count1);
      console.log("c1 "+count1);
      console.log('i '+i);
      for(let j=count1;j<i;j++){
        list2.push({
          time:(data.list[j].dt_txt).substring(11,19),
          temp:data.list[j].main.temp,
          humidity:data.list[j].main.humidity
        })
      }
      console.log(list2);
      //
      if(Number(day) >= 9){
        day=(Number(day)+1).toString();
      }else{
        day=('0'+((Number(day)+1).toString()));
      }
      console.log("m:"+data.list[i]);
      while(((data.list[i].dt_txt).substring(8,10)).localeCompare(day) === 0){
        minvalueOf3 += data.list[i].main.temp_min;
        maxvalueOf3 += data.list[i].main.temp_max;
        i++;
     }
     count3=(i-count2);
     console.log("c "+count2);
     console.log("i "+i);
     for(let j=(count1+count2);j<i;j++){
      list3.push({
        time:(data.list[j].dt_txt).substring(11,19),
        temp:data.list[j].main.temp,
        humidity:data.list[j].main.humidity
      })
    }
    console.log(list3);
     if(Number(day) >= 9){
      day=(Number(day)+1).toString();
      }else{
      day=('0'+((Number(day)+1).toString()));
      }

     while(((data.list[i].dt_txt).substring(8,10)).localeCompare(day) === 0){
      minvalueOf4 += data.list[i].main.temp_min;
      maxvalueOf4 += data.list[i].main.temp_max;
      i++;
      }
      count4=(i-count3);
      console.log("4th "+(count1+count2+count3))
      console.log(i)
      for(let j=(count2+count3);j<i;j++){
        list4.push({
          time:(data.list[j].dt_txt).substring(11,19),
          temp:data.list[j].main.temp,
          humidity:data.list[j].main.humidity
        })
      }
      console.log(list4);
     if(Number(day) >= 9){
      day=(Number(day)+1).toString();
      }else{
      day=('0'+((Number(day)+1).toString()));
     }
     console.log(data.list[i].dt_txt);

     while(((data.list[i].dt_txt).substring(8,10)).localeCompare(day) === 0){
      minvalueOf5 += data.list[i].main.temp_min;
      maxvalueOf5 += data.list[i].main.temp_max;
      i++;
      if(i===40){
        break;
      }
      }
      count5=(i-count4);
      for(let j=(count3+count4);j<i;j++){
        list5.push({
          time:(data.list[j].dt_txt).substring(11,19),
          temp:data.list[j].main.temp,
          humidity:data.list[j].main.humidity
        })
      }
      this.setState({
          minvalue1:(minvalueOf1/count1).toFixed(2),
          maxvalue1:(maxvalueOf1/count1).toFixed(1),
          minvalue2:(minvalueOf2/count2).toFixed(2),
          maxvalue2:(maxvalueOf2/count2).toFixed(2),
          minvalue3:(minvalueOf3/count3).toFixed(2),
          maxvalue3:(maxvalueOf3/count3).toFixed(2),
          minvalue4:(minvalueOf4/count4).toFixed(2),
          maxvalue4:(maxvalueOf4/count4).toFixed(2),
          minvalue5:(minvalueOf5/count5).toFixed(2),
          maxvalue5:(maxvalueOf5/count5).toFixed(2),
          hourlistone:list1,
          hourlisttwo:list2,
          hourlistthree:list3,
          hourlistfour:list4,
          hourlistfive:list5,
          error:""
      });
    }else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity:undefined,
        description: undefined,
        error:"Please enter the values!"
      });
    }
  }


  render(){
    return(
      <Router>
        <div>
          <div className="wrapper">
            <div className="main">
              <div className="container">
                  <div className="row">
                    <div className="col-xs-5 title-container">
                      <Titles />
                    </div>
                    <div className="col-xs-7 form-container">
                      <Form getWeather={this.getWeather}/>
                      <Weather 
                      temperature = {this.state.temperature}
                      city={this.state.city}
                      country={this.state.country}
                      humidity={this.state.humidity}
                      description={this.state.description}
                      error={this.state.error}
                      minvalue1={this.state.minvalue1}
                      maxvalue1={this.state.maxvalue1}
                      minvalue2={this.state.minvalue2}
                      maxvalue2={this.state.maxvalue2}
                      minvalue3={this.state.minvalue3}
                      maxvalue3={this.state.maxvalue3}
                      minvalue4={this.state.minvalue4}
                      maxvalue4={this.state.maxvalue4}
                      minvalue5={this.state.minvalue5}
                      maxvalue5={this.state.maxvalue5}
                      hourlist={this.state.hourlist}
                      />
                    </div>
                  </div>
                  <h3 className="hourlyHead">Hourly data will be listed below</h3>
                  <Route path="/day1" render={
                    () => {
                      return(<div><HourlyOne hourlist={this.state.hourlistone}/></div>);
                    }
                  }/>
                  <Route path="/day2" render={
                    () => {
                      return(<div><HourlyTwo hourlist={this.state.hourlisttwo}/></div>);
                    }
                  }/>
                  <Route path="/day3" render={
                    () => {
                      return(<div><HourlyThree hourlist={this.state.hourlistthree}/></div>);
                    }
                  }/>
                  <Route path="/day4" render={
                    () => {
                      return(<div><HourlyFour hourlist={this.state.hourlistfour}/></div>);
                    }
                  }/>
                  <Route path="/day5" render={
                    () => {
                      return(<div><HourlyFive hourlist={this.state.hourlistfive}/></div>);
                    }
                  }/>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;