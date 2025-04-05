import React,{useState, useEffect} from 'react'
import Page from './Page'

export default function Geocoding(props) {
  const [article,setArticle] = useState(null)
  const weather = async ()=>{
    const urlweather = `https://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=58661a67935a29b8ec1865ea33d8d43c&units=metric`;
    let data = await fetch(urlweather);
    let parsedData = await data.json()
    setArticle(parsedData)
  }
  useEffect(()=>{
    weather()
  },[props.latitude,props.longitude])
  return (
    < div className="container">
        <Page article={article} />
    </div>
  )
}
