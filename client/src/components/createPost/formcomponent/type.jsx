export const Type = () => {
    return (
        <>
        <div className="createpost">
            <div className="select_type">
                <div className="question_txt">What type of place will guests have?</div>
                <div className="room"><h1 className="room_txt" onClick={ () => {setchange(change+1)} }>A shared room</h1><p className="room_txt_p">Guests live in a room or common area that may be shared with you or others.</p></div>
                <div className="room"><h1 className="room_txt">A room</h1><p className="room_txt_p">Guests have their own room in a home, plus access to shared spaces.</p></div>
                <div className="room"><h1 className="room_txt">A entire place</h1><p className="room_txt_p">Guests have the whole place to themselves.</p></div>
            </div>
        </div>
        </>
    )
}

export const Room = () => {
    return(
        <>
        <h1 className="room_form">Room Type/Address</h1>
        </>
    )
}

export const Wholeroom = () => {
    return(
        <>
        <h1 className="room_form">Payment</h1>
        </>
    )
}

export const Sharedroom = () => {
    return(
        <>
        <h1 className="room_form">Images</h1>
        </>
    )
}