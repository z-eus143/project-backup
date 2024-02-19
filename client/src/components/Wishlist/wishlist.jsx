import { useEffect, useState } from "react"
import { Header } from "../header/header"
import axios from 'axios'
import '../Wishlist/style.css'
import LoadingBar from 'react-top-loading-bar'

export const Wishlist = () => {
    const [progress,setProgress] = useState(100)
    const [propertydata,setpropertydata] = useState(JSON.parse(localStorage.getItem('propertydata')))
    
useEffect(() => {
    axios.get("http://localhost:4000/property/properties")
        .then((res) => {
            const mappedData = res.data.properties.map(property => ({
                Type: property.Type,
                NoBedRoom: property.NoBedRoom,
                Amenities: property.Amenities
            }));
            var jsonString = JSON.stringify(mappedData)
            console.log(jsonString)
            localStorage.setItem('propertydata',jsonString)
        })
},[])
        




    
        
        
   

    return (
    <>
    <LoadingBar color='#f11946' progress={progress} onLoaderFinished={() => setProgress(0)}/>
    <Header />
    <div className="property">{
        propertydata.map((item, index) => {
            // return(<h1 key={index}>Type: {item.Type}, BedRooms: {item.NoBedRoom}, Amenities: {item.Amenities}</h1>)
            return(<div key={index}>
                <h1>Type: {item.Type}</h1>
                <h1>BedRooms: {item.NoBedRoom}</h1>
                <h1>Amenities: {item.Amenities}</h1>
            </div>)
        })
    }</div>
    </>
)}