import Cards from "../Cards/cards"
import { Header } from "../header/header"
import '../home/style.css'
import search from 'D:/tanmay/client/src/assets/search.png'
import { useState , useEffect } from "react"
import LoadingBar from 'react-top-loading-bar'
import axios from "axios"

export const Home = () => {
    const [progress,setProgress] = useState(100)
    const [state, setstate] = useState("")
    const [city, setcity] = useState("")
    const [num , setnum] = useState("")
    const data = {
        "state" : state,
        "city" : city,
        "num" : num
    }
    const searchData = () =>{
        console.log(data);
    }
    return(
        <>
        <LoadingBar color='#f11946' progress={progress} onLoaderFinished={() => setProgress(0)}/>
        <Header />
        <div className="body_sec">
            <div className="search_sec">
                <input type="text" className="search_txt" placeholder="state" onChange={(e) => setstate(e.target.value)}/>
                <input type="text" className="search_txt" placeholder="city" onChange={(e) => setcity(e.target.value)}/>
                <input type="Number" className="search_txt" placeholder=" No of Guest " min="1" onChange={(e) => setnum(e.target.value)}/>
                <img src={search} alt="search" className="img_search" onClick={searchData}/>
            </div>
                <Post/>
        </div>
        </>
    )
}


const Post = () => {
    const [propertydata,setpropertydata] = useState(JSON.parse(localStorage.getItem('propertydata')))

useEffect(() => {
axios.get("http://localhost:4000/property/properties")
    .then((res) => {
        const mappedData = res.data.properties.map(property => ({
            Type: property.Type,
            NoBedRoom: property.NoBedRoom,
            Amenities: property.Amenities,
            Description : property.Description
        }));
        var jsonString = JSON.stringify(mappedData)
        console.log(jsonString)
        localStorage.setItem('propertydata',jsonString)
    })
},[])

    return(
        <div className="property">{
            propertydata.map((item, index) => {
                return(<div key={index}> 
                    <h1 className="data">Type : {item.Type}</h1>
                    <h1 className="data">BedRooms : {item.NoBedRoom}</h1>
                    <h1 className="data">Amenities : {item.Amenities}</h1>
                    <h1 className="data">Description : {item.Description}</h1>
                </div>)
            })
        }</div>
    )
}