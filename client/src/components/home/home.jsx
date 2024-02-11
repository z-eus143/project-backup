import Cards from "../Cards/cards"
import { Header } from "../header/header"
import '../home/style.css'
import search from 'D:/tanmay/client/src/assets/search.png'
import { useState } from "react"
import image1 from '../../assets/ajuna india/5.webp'
import image2 from '../../assets/bhayandar india/img2.webp'
import image3 from 'D:/tanmay/client/src/assets/Kihim india/img3.webp'
import image4 from 'D:/tanmay/client/src/assets/sahan ,india/img4.webp'
import image5 from 'D:/tanmay/client/src/assets/virtasaral india/6ca9378b-5ee7-4c86-9368-f78f05e99d10.webp'

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
                imgSrc={image1}
                imgAlt='Card Image'
                description='This is the card description'
                buttontext='$700/ Month'
                link='CardPage'/>


                <Cards title='Egypt'
                imgSrc={image2}
                imgAlt='Card Image'
                description='This is the card description'
                buttontext='$1400/ Month'
                link='CardPage'/>


                <Cards title='Egypt'
                imgSrc={image3}
                imgAlt='Card Image'
                description='This is the card description'
                buttontext='$800/ Month'
                link='CardPage'/>


                <Cards title='Egypt'
                imgSrc={image4}
                imgAlt='Card Image'
                description='This is the card description'
                buttontext='$600/ Month'
                link='CardPage'/>


                <Cards title='Egypt'
                imgSrc={image5}
                imgAlt='Card Image'
                description='This is the card description'
                buttontext='$700/ Month'
                link='CardPage'/>


                <Cards title='Egypt'
                imgSrc={image1}
                imgAlt='Card Image'
                description='This is the card description'
                buttontext='$700/ Month'
                link='CardPage'/>


                <Cards title='Egypt'
                imgSrc={image4}
                imgAlt='Card Image'
                description='This is the card description'
                buttontext='$500/ Month'
                link='CardPage'/>

                
                <Cards title='Egypt'
                imgSrc={image2}
                imgAlt='Card Image'
                description='This is the card description'
                buttontext='$700/ Month'
                link='CardPage'/>
            </div>
        </div>
        </>
    )
}