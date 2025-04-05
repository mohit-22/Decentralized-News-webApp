import React,{useState, useEffect} from 'react'
import Page from './Page'

export default function City() {
    const [newart,setNewart] = useState([])
    const [text,setText] = useState("enter the name of your city")
    const [lati,setLati] = useState("26.8467")
    const [long,setLong] = useState("80.9462")
    const [City,setCity] = useState("Lucknow")
    const dimension = async(city)=>{
        const cityurl = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=9c6a28abc3236f02ec088cf285cb224f&units=metric`
        const data = await fetch(cityurl)
        let parsedData = await data.json()
        setNewart(parsedData)
        setLati(newart?.coord?.lat)
        setLong(newart?.coord?.lon)
     }
    useEffect(()=>{
            dimension(City)    
    },[City]);
    const yourcity = () =>{
        setCity(text)
        getData()
    }
    const getData = ()=>{
        console.log(newart?.coord?.lat)
        console.log(newart?.coord?.lon)
        // setLati(newart?.coord?.lat)
        // setLong(newart?.coord?.lon)
    }
    const handleOnChange = async(event)=>{
            setText(event.target.value)
    }
  return (
    <div className="container" style={{marginTop: "90px"}}>
        <form>
  <div className="mb-3">
  <div className="mb-3">
 <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>Enter Your City</h1></label>
<textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
</div> 
  <button type="button" className="btn btn-primary" onClick={()=> {yourcity();}}>Submit</button>
</form>
      <Page article={newart} City={City}/>
    </div> 
  )
}

