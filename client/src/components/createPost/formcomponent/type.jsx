
// property listing progress
export const Propertydescribe = (props) => {
    return(
        <>
        <h1 className="room_form">Describe Property</h1>
        {(props.type == "Room") 
        ? <><h1>{props.type}</h1> <Propertyroom/></> 
        : (props.type == "Sharedroom") ? <h1>{props.type}</h1> 
        : <h1>{props.type}</h1>}
        </>
    )
}


export const Address = () => {
    return(
        <>
        <h1 className="room_form">Address</h1>
        <Roomaddress/>
        </>
    )
}

export const Payment = () => {
    return(
        <>
        <h1 className="room_form">Payment</h1>
        </>
    )
}

export const Images = () => {
    return(
        <>
        <h1 className="room_form">Images</h1>
        </>
    )
}


// Property Form

// for room
const Propertyroom = () => {
    return( <>
     <form>
         <div>
             <label>Property Name</label>
             <input type="text"/>
         </div>
         <div>
            <label>Number of Bedrooms: </label>
            <input type="Number" min={1} max={10}/>
         </div>
         <div>
            <label>Number of Bathrooms: </label>
            <input type="Number" min={1} max={10}/>
         </div>
         <div>
            <label>Maximum Occupancy: </label>
            <input type="Number" min={1} max={10}/>
         </div>
         <div>
            <label>Description: </label>
            <textarea rows="2" cols="20" />
         </div>
         <div>
            <label>Amenities: </label>
            <textarea rows="2" cols="20"/>
         </div>
         <div>
            <label>House Rules: </label>
            <textarea rows="2" cols="20"/>
         </div>
         <div>
            <label>Additional info: </label>
            <textarea rows="2" cols="20"/>
         </div>
     </form>
     </>)
 }


// for shared room


// Property Address form

const Roomaddress = () => {
    return (
        <>
        <form>
            <div>
                <label>Property Name / Flat No: </label>
                <input type="text"/>
            </div>
            <div>
                <label>Street Address: </label>
                <input type="text"/>
            </div>
            <div>
                <label>Locatity: </label>
                <input type="text"/>
            </div>
            <div>
                <label>City: </label>
                <input type="text"/>
            </div>
            <div>
                <label>State/Provience: </label>
                <input type="text"/>
            </div>
            <div>
                <label>Area Pincode: </label>
                <input type="text"/>
            </div>
        </form>
        </>
    )
}

