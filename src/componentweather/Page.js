import React from 'react'

export default function Page(props) {
  // console.log(props.article?.main?.temp);
  return (
    <div className="container"  style={{marginTop: "90px"}} >
      <div style={{ display: "flex",marginLeft: "150px"}}>
        <div>
        <p>the temprature in {props.City} is {props.article?.main?.temp}</p>
        <p>the humidity in {props.City} is {props.article?.main?.humidity}</p>
        <p>the wind speed in {props.City} is {props.article?.wind?.speed}</p>
        </div>
        {/* <div style={{marginLeft: "500px"}}>
        <img style={{height: "100px", width: "100px", backgroundColor: "#add8e6"}} src={`http://openweathermap.org/img/wn/${props.article?.weather[0]?.icon}@2x.png`}/>
        <br/>
        {/* <p>description: {props.article?.weather[0]?.description}</p> */}
        {/* </div> */}
      </div>
    </div>
  )
}
// 58661a67935a29b8ec1865ea33d8d43c
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}  geocoding api