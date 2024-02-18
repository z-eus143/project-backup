import { useState } from "react"
import { Header } from "../header/header"
import axios from 'axios'
import '../Wishlist/style.css'


export const Wishlist = () => {
    const [propertydata,setpropertydata] = useState("")
    axios.get("http://localhost:4000/property/properties")
    .then((res) => {
        const properties = res.data.properties
        console.log(properties[0])
        console.log(properties[1])
        console.log(properties[2])
    })

    return (
    <>
    <Header />
    <h1 className="property">{propertydata}</h1>
    </>
)}