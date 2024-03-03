import axios from "axios"
import { useEffect, useState } from "react"
import SubsCard from "./subscription card/SubsCard"


// property listing progress
export const Propertydescribe = (props) => {
    return(
        <>
        <h1 className="room_form">Describe Property</h1>
        {(props.type == "Room") 
        ? <><h1>{props.type}</h1> <Propertyroom/></> 
        : (props.type == "Sharedroom") 
        ? <><h1>{props.type}</h1> <Sharedproperty/></>
        : <><h1>{props.type}</h1></>}
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
        <SubsCard Prices="3000"/>
        </>
    )
}

export const Images = () => {

  const handleChildData = (data) => {
    setDataFromChild(data);
  };
    return(
        <>
        <h1 className="room_form">Upload any five Images regarding to property</h1>
        <Imagemulupload/>
        </>
    )
}


// Property Form

// for room
const Propertyroom = () => {

  const [Property,setProperty] = useState('')
  const [Bedrooms,setBedrooms] = useState('')
  const [Bathrooms,setBathrooms] = useState('')
  const [Occupancy,setOccupancy] = useState('')
  const [Description,setDescription] = useState('')
  const [Amenities,setAmenities] = useState('')
  const [Rules,setRules] = useState('')
  const [Additional,setAdditional] = useState('')
  const [formData, setformData] = useState({
    Property: '',
    Bedrooms: '',
    Bathrooms: '',
    Occupancy: '',
    Description: 'null',
    Amenities: 'null',
    Rules: 'null',
    Additional: 'null',
  });

  const [message,setmessage] = useState('')
  useEffect(() => {
    axios.post("http://localhost:4000/property/property",{"id" : localStorage.getItem("propertyId")})
    .then((res) => {
        setProperty(res.data.propertyid[0].Type)
        setBedrooms(res.data.propertyid[0].NoBedRoom)
        setBathrooms(res.data.propertyid[0].NoBathRoom)
        setOccupancy(res.data.propertyid[0].NoOccupancy)
        setDescription(res.data.propertyid[0].Description)
        setAmenities(res.data.propertyid[0].Amenities)
        setRules(res.data.propertyid[0].HouseRules)
        setAdditional(res.data.propertyid[0].Additionalinfo)
    })
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
      await axios.post("http://localhost:4000/property/propertydata", {formData , "id" : localStorage.getItem("userId")})
      .then((res) => {
        localStorage.setItem('propertyId',res.data.id)
        setmessage(res.data.message)
      })
  } 

    return( <>
     <form className="for_in_data">
         <div className="for_div">
             <label className="for_lab">Property Name</label>
             <input type="text" className="in_txt" name="Property" onChange={handleChange}  placeholder={Property}/>
         </div>
         <div className="for_div">
            <label className="for_lab">Number of Bedrooms: </label>
            <input type="Number" min={1} max={10} className="in_txt" name="Bedrooms" onChange={handleChange}  placeholder={Bedrooms}/>
         </div>
         <div className="for_div">
            <label className="for_lab">Number of Bathrooms: </label>
            <input type="Number" min={1} max={10} className="in_txt" name="Bathrooms" onChange={handleChange}  placeholder={Bathrooms}/>
         </div>
         <div className="for_div">
            <label className="for_lab">Maximum Occupancy: </label>
            <input type="Number" min={1} max={10} className="in_txt" name="Occupancy" onChange={handleChange}  placeholder={Occupancy}/>
         </div>
         <div className="for_div">
            <label className="for_lab">Description: </label>
            <textarea rows="1" cols="20" className="in_txt" name="Description" onChange={handleChange}  placeholder={Description}/>
         </div>
         <div className="for_div">
            <label className="for_lab">Amenities: </label>
            <textarea rows="1" cols="20" className="in_txt" name="Amenities" onChange={handleChange}  placeholder={Amenities}/>
         </div>
         <div className="for_div">
            <label className="for_lab">House Rules: </label>
            <textarea rows="1" cols="20" className="in_txt" name="Rules" onChange={handleChange}  placeholder={Rules}/>
         </div>
         <div className="for_div">
            <label className="for_lab">Additional info: </label>
            <textarea rows="1" cols="20" className="in_txt" name="Additional" onChange={handleChange}  placeholder={Additional}/>
         </div>
     </form>
     {!(Property || message) ? <button className='btn' style={{marginTop: '10px'}} onClick={handleSubmit}>Submit</button> : <h1 style={{marginTop: '10px' , backgroundColor: "lightgreen" , boxShadow: "6px 6px 12px #c5c5c5" , borderRadius: "50px" , marginLeft: "42%" , marginRight : "42%"}}>Submitted</h1>}
     </>)
 }


// for shared room

const Sharedproperty = () => {
    return(<>
    <form className="for_in_data">
         <div className="for_div">
             <label className="for_lab">Property Name</label>
             <input type="text" className="in_txt"/>
         </div>
         <div className="for_div">
            <label className="for_lab">Number of Bedrooms: </label>
            <input type="Number" min={1} max={10} className="in_txt"/>
         </div>
         <div className="for_div">
            <label className="for_lab">Number of Bathrooms: </label>
            <input type="Number" min={1} max={10} className="in_txt"/>
         </div>
         <div className="for_div">
            <label className="for_lab">Maximum Occupancy: </label>
            <input type="Number" min={1} max={10} className="in_txt"/>
         </div>
         <div className="for_div">
            <label className="for_lab">Description: </label>
            <textarea rows="1" cols="20" className="in_txt"/>
         </div>
         <div className="for_div">
            <label className="for_lab">Amenities: </label>
            <textarea rows="1" cols="20" className="in_txt"/>
         </div>
         <div className="for_div">
            <label className="for_lab">House Rules: </label>
            <textarea rows="1" cols="20" className="in_txt"/>
         </div>
         <div className="for_div">
            <label className="for_lab">Additional info: </label>
            <textarea rows="1" cols="20" className="in_txt"/>
         </div>
     </form></>)
}    

// Property Address form

const Roomaddress = () => {
  const [Flat,setFlat] = useState("")
  const [street,setstreet] = useState("")
  const [locality,setlocality] = useState("")
  const [city,setcity] = useState("")
  const [area,setarea] = useState("")
  useEffect(() => {
    axios.post("http://localhost:4000/property/location",{"id" : localStorage.getItem("locationid")})
    .then((res) => {
      setFlat(res.data.propertyid[0].Flat)
      setstreet(res.data.propertyid[0].street)
      setlocality(res.data.propertyid[0].locality)
      setcity(res.data.propertyid[0].city)
      setarea(res.data.propertyid[0].area)
    })
  },[])
  const [message,setmessage] = useState("")
  const [formData, setformData] = useState({
    Flat: '',
    street: '',
    locality: '',
    city: '',
    area: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:4000/property/locationdata", {formData , "id" : localStorage.getItem("propertyId")})
    .then((res) => {
      localStorage.setItem('locationid',res.data.id)
      setmessage(res.data.message)
    })
  } 

    return (
        <>
        <form className="for_in_data">
            <div className="for_div">
                <label className="for_lab">Building Name / Flat No: </label>
                <input type="text" className="in_txt" name="Flat" onChange={handleChange} placeholder={Flat}/>
            </div>
            <div className="for_div">
                <label className="for_lab">Street Address: </label>
                <input type="text" className="in_txt" name="street" onChange={handleChange} placeholder={street}/>
            </div>
            <div className="for_div">
                <label className="for_lab">Locatity: </label>
                <input type="text" className="in_txt" name="locality" onChange={handleChange} placeholder={locality}/>
            </div>
            <div className="for_div">
                <label className="for_lab">City: </label>
                <input type="text" className="in_txt" name="city" onChange={handleChange} placeholder={city}/>
            </div>
            <div className="for_div">
                <label className="for_lab">State/Provience: </label>
                <input type="text" className="in_txt" name="state" onChange={handleChange} placeholder={locality}/>
            </div>
            <div className="for_div">
                <label className="for_lab">Area Pincode: </label>
                <input type="text" className="in_txt" name="area" onChange={handleChange} placeholder={area}/>
            </div>
        </form>
        {!(message || Flat) ? <button className='btn' style={{marginTop: '10px'}} onClick={handleSubmit}>Submit</button> : <h1 style={{marginTop: '10px' , backgroundColor: "lightgreen" , boxShadow: "6px 6px 12px #c5c5c5" , borderRadius: "50px" , marginLeft: "42%" , marginRight : "42%"}}>Submitted</h1>}
        </>
    )
}

// images

const Imagemulupload = ({}) => {
    const [images, setImages] = useState([]);
    const [message,setmessage] = useState('');

    useEffect(() => {
      axios.post("http://localhost:4000/property/imagesfromdb", {"id" : localStorage.getItem("imageid")})
      .then((res) => {
        setImages(res.data.images[0].images)
        setmessage(res.data.message)
      })
    },[])

    const handleImageChange = (e) => {
      const selectedFile = e.target.files[0];
      if (images.length < 5 && selectedFile && selectedFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setImages([...images, event.target.result]);
        };
        reader.readAsDataURL(selectedFile);
      }
    };

    const sendimagetodb = async () => {
      await axios.post("http://localhost:4000/property/images", {images , "id" : localStorage.getItem("propertyId")})
      .then((res) => {
      localStorage.setItem('imageid',res.data.id)
      setmessage(res.data.message)
    })};
  
    return (
      <div>
        <input
          type="file"
          onChange={handleImageChange}
          disabled={images.length >= 5}
        />
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' , justifyContent: 'center'}}>
          {images.map((image, index) => (
            <div key={index} style={{ margin: '5px' }}>
              <UploadedImage image={image} />
            </div>
          ))}
          {images.length < 5 && <PlaceholderImage />}
        </div>
        {!(message) ? <button className='btn' style={{marginTop: '10px'}} onClick={sendimagetodb}>Submit</button> : <h1 style={{marginTop: '10px' , backgroundColor: "lightgreen" , boxShadow: "6px 6px 12px #c5c5c5" , borderRadius: "50px" , marginLeft: "42%" , marginRight : "42%"}}>Submitted</h1>}
      </div>
    );
  }
  
  function PlaceholderImage() {
    return (
      <div style={{ margin: '5px', width: '180px', height: '150px', border: '1px solid #ccc', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <span>Preview</span>
      </div>
    );
  }
  
  function UploadedImage({ image }) {
    return (
      <div style={{ margin: '5px', padding : '5px', borderRadius: '5px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <img src={image} alt="Uploaded" style={{ maxWidth: '200px', maxHeight: '200px', aspectRatio: '3/2', objectFit: 'contain' }} />
      </div>
    );
  }