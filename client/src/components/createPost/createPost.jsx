import { useState } from "react"
import { Header } from "../header/header"
import '../createPost/style.css'

export const CreatePost = () => {
    const [selectedImages, setselectedImages] = useState([]);

    // const handleImageChange = (e) => {
    //     const files = Array.from(e.target.files);
    //     setselectedImages(files);
    //     console.log(files)
    // };
    return(
    <div>
        <Header/>
        <div className="createpost">
            {/* <input type="file" multiple onChange={handleImageChange} />
            {selectedImages.map((image, index) => (
                <img key={index} src={URL.createObjectURL(image)} alt={`image-${index}`} style={{ maxWidth: '100px', maxHeight: '100px', margin: '5px'}} />
            ))} */}
        </div>
    </div>
    )
}