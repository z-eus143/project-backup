import Cards from "../Cards/cards"
import { Header } from "../header/header"
import '../home/style.css'
import search from 'D:/tanmay/client/src/assets/search.png'
import { useState } from "react"
import logo from '../../assets/profile.jpg'

export const Home = () => {
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
        <Header />
        <div className="body_sec">
            <div className="search_sec">
                <input type="text" className="search_txt" placeholder="state" onChange={(e) => setstate(e.target.value)}/>
                <input type="text" className="search_txt" placeholder="city" onChange={(e) => setcity(e.target.value)}/>
                <input type="Number" className="search_txt" placeholder=" No of Guest " min="1" onChange={(e) => setnum(e.target.value)}/>
                <img src={search} alt="search" className="img_search" onClick={searchData}/>
            </div>
            <div className="body_post">
                <Cards title='Egypt'
                imgSrc={logo}
                imgAlt='Card Image'
                description='This is the card description'
                buttontext='$700/ Month'
                link='CardPage'/>
                <Cards title='Egypt'
                imgSrc={logo}
                imgAlt='Card Image'
                description='This is the card description'
                buttontext='$700/ Month'
                link='CardPage'/>
                <Cards title='Egypt'
                imgSrc={logo}
                imgAlt='Card Image'
                description='This is the card description'
                buttontext='$700/ Month'
                link='CardPage'/>
                <Cards title='Egypt'
                imgSrc={logo}
                imgAlt='Card Image'
                description='This is the card description'
                buttontext='$700/ Month'
                link='CardPage'/>
                <Cards title='Egypt'
                imgSrc={logo}
                imgAlt='Card Image'
                description='This is the card description'
                buttontext='$700/ Month'
                link='CardPage'/>
                <Cards title='Egypt'
                imgSrc={logo}
                imgAlt='Card Image'
                description='This is the card description'
                buttontext='$700/ Month'
                link='CardPage'/>
                <Cards title='Egypt'
                imgSrc={logo}
                imgAlt='Card Image'
                description='This is the card description'
                buttontext='$700/ Month'
                link='CardPage'/>
                <Cards title='Egypt'
                imgSrc={logo}
                imgAlt='Card Image'
                description='This is the card description'
                buttontext='$700/ Month'
                link='CardPage'/>
            </div>
        </div>
        </>
    )
}