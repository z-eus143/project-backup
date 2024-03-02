import axios from "axios"
import { useEffect, useState } from "react"


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
        </>
    )
}

export const Images = () => {
    return(
        <>
        <h1 className="room_form">Images</h1>
        <Imagemulupload/>
        </>
    )
}


// Property Form

// for room
const Propertyroom = () => {

  const [Property,setProperty] = useState('')

  const [formData, setFormData] = useState({
    Property: '',
    Bedrooms: '',
    Bathrooms: '',
    Occupancy: '',
    Description: '',
    Amenities: '',
    Rules: '',
    Additional: '',
  });

  const [message,setmessage] = useState('')
  useEffect(() => {
    axios.post("http://localhost:4000/property/property",{"id" : localStorage.getItem("propertyId")})
    .then((res) => {
        setProperty(res.data.propertyid[0].Type);
    })
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
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
             <input type="text" className="in_txt" name="Property" onChange={handleChange} required value={Property}/>
         </div>
         <div className="for_div">
            <label className="for_lab">Number of Bedrooms: </label>
            <input type="Number" min={1} max={10} className="in_txt" name="Bedrooms" onChange={handleChange} required/>
         </div>
         <div className="for_div">
            <label className="for_lab">Number of Bathrooms: </label>
            <input type="Number" min={1} max={10} className="in_txt" name="Bathrooms" onChange={handleChange} required/>
         </div>
         <div className="for_div">
            <label className="for_lab">Maximum Occupancy: </label>
            <input type="Number" min={1} max={10} className="in_txt" name="Occupancy" onChange={handleChange} required/>
         </div>
         <div className="for_div">
            <label className="for_lab">Description: </label>
            <textarea rows="1" cols="20" className="in_txt" name="Description" onChange={handleChange} required/>
         </div>
         <div className="for_div">
            <label className="for_lab">Amenities: </label>
            <textarea rows="1" cols="20" className="in_txt" name="Amenities" onChange={handleChange} required/>
         </div>
         <div className="for_div">
            <label className="for_lab">House Rules: </label>
            <textarea rows="1" cols="20" className="in_txt" name="Rules" onChange={handleChange} required/>
         </div>
         <div className="for_div">
            <label className="for_lab">Additional info: </label>
            <textarea rows="1" cols="20" className="in_txt" name="Additional" onChange={handleChange} required/>
         </div>
     </form>
     {!(message) ? <button className='btn' style={{marginTop: '10px'}} onClick={handleSubmit}>Submit</button> : <h1>Submitted</h1>}
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
    return (
        <>
        <form className="for_in_data">
            <div className="for_div">
                <label className="for_lab">Property Name / Flat No: </label>
                <input type="text" className="in_txt"/>
            </div>
            <div className="for_div">
                <label className="for_lab">Street Address: </label>
                <input type="text" className="in_txt"/>
            </div>
            <div className="for_div">
                <label className="for_lab">Locatity: </label>
                <input type="text" className="in_txt"/>
            </div>
            <div className="for_div">
                <label className="for_lab">City: </label>
                <input type="text" className="in_txt"/>
            </div>
            <div className="for_div">
                <label className="for_lab">State/Provience: </label>
                <input type="text" className="in_txt"/>
            </div>
            <div className="for_div">
                <label className="for_lab">Area Pincode: </label>
                <input type="text" className="in_txt"/>
            </div>
        </form>
        </>
    )
}

// images

const Imagemulupload = () => {
    const [images, setImages] = useState([]);

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