import { Header } from "../header/header"
import '../createPost/style.css'
import { Payment , Address , Images, Propertydescribe } from "./formcomponent/type"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const CreatePost = () => {
    const navigate = useNavigate();
    const [type,settype] = useState("")
    const [change,setchanege] = useState(0)

    const items = []
    for (let i = 0; i < change; i++) {
        items.push(<div className="prograss"></div>);
      }

    return(
    <>
        <Header/> 
        {(change == 0) ? 
            <div className="createpost">
                <div className="select_type">
                    <div className="question_txt">What type of place will guests have?</div>
                    <div className="room" onClick={ () => {setchanege(change+1);settype("Sharedroom")} }><h1 className="room_txt" >A shared room</h1><p className="room_txt_p">Occupant live in a room or common area that may be shared with you or others.</p></div>
                    <div className="room" onClick={ () => {setchanege(change+1);settype("Room")} }><h1 className="room_txt">A room</h1><p className="room_txt_p">Occupant have their own room in a home, plus access to shared spaces.</p></div>
                    <div className="room" onClick={ () => {setchanege(change+1);settype("Wholeroom")} }><h1 className="room_txt">A entire place</h1><p className="room_txt_p">Occupant have the whole place to themselves.</p></div>
                </div>
            </div> 
            : (change == 1) ? <Propertydescribe type={type}/>
            : (change == 2) ? <Address/> 
            : (change == 3) ? <Images/> 
            : <Payment/>}
        {/* <Type/> */}
        {/* progress bar */}
        <div className="progress_bar">
            {items}
        </div>
        {/* navigation button */}
        <div className="div_nav">
            {(!change == 0) && <div className="nav_back" onClick={ () => {setchanege(change-1)}}>Back</div>}
            {(change == 4) ? <button className="nav_for" onClick={()=>{navigate("/")}}>Submit</button> : <button className="nav_for" onClick={ () => setchanege(change+1) }>Next</button>}
        </div>
    </>
    )
}