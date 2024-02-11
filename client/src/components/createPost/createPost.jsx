import { Header } from "../header/header"
import '../createPost/style.css'
import { Room, Sharedroom, Type, Wholeroom } from "./formcomponent/type"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const CreatePost = () => {
    const navigate = useNavigate();
    const [change,setchanege] = useState(0)
    return(
    <>
        <Header/>
        {(change == 0) ? <Type/> : (change == 1) ? <Room/> : (change == 2) ? <Sharedroom/> : <Wholeroom/>}
        {/* <Type/> */}
        {/* progress bar */}

        <div className="progress_bar">
            <div className="prograss"></div>
            <div className="prograss"></div>
            <div className="prograss"></div>
            <div className="prograss"></div>
        </div>
        {/* navigation button */}
        <div className="div_nav">
            {(!change == 0) && <div className="nav_back" onClick={ () => {setchanege(change-1)}}>Back</div>}
            {(change == 4) ? <button className="nav_for" onClick={()=>{navigate("/")}}>Submit</button> : <button className="nav_for" onClick={ () => setchanege(change+1) }>Next</button>}
        </div>
    </>
    )
}