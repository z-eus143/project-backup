import '../header/style.css'
import logo from 'D:/tanmay/client/src/assets/profile.jpg'
import logo1 from 'D:/tanmay/client/src/assets/logo.png'
import {login , logout} from '../../store'
import { useDispatch , useSelector} from 'react-redux'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {Magic} from 'magic-sdk'
import Cookies from 'js-cookie'
import axios from 'axios'
export const Header = () => {
    const [open,setOpen] = useState(false);
    const [open1,setOpen1] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const User = useSelector((state) => state.user.value.firstname)
    const base64Image = useSelector((state) => state.user.value.image)


    const handleLogin = async (e) => {
        e.preventDefault();
        const email = new FormData(e.target).get("email");
        if (email) {
          const magic = new Magic("pk_live_C120C0494B8BADC7");
          await magic.auth.loginWithEmailOTP({ email });
          const userMetadata = await magic.user.getInfo();
          const emailreceived = userMetadata.email
          await axios.post("http://localhost:4000/auth/authanticate",{"email" : emailreceived})
          .then((res) => {
            const resemail = res.data.user.email
            if(resemail)
            {
              dispatch(login({
                firstname : res.data.user.firstname,
                lastname : res.data.user.lastname,
                email : res.data.user.email,
                mobileno : res.data.user.mobileno,
                image : res.data.user.image.toString()
              }))
              navigate("/")
              setOpen1(!open1)
            }
          }).catch(err => {navigate("/signup") ; Cookies.set('email',emailreceived)})
        }
        else{
            console.log("Failled")
        }
      };


      
    return (
        <div>
        <div className="header_sec">
            <div className="text" onClick={() => navigate("/")}>
                <div className="logo">
                    <img className="logo_img" src={logo1} alt="logo" />
                </div>
                <div>
                    <h1 className="name">RentalArc</h1>
                    <p className="slogen">Rent the Life You've Always Imagined</p>
                </div>
            </div>
            <div className='Account'>
                <div>
                    {/* <img className='acc_img' src={logo} alt='profile'></img> */}
                    {(base64Image) ? <img className='acc_img' src={base64Image} alt='profile'></img> : <img className='acc_img' src={logo} alt='profile'></img>}
                </div>
                {(User) ?<div onClick={() => {setOpen(!open)}}>{User}</div> : <div onClick={() => {setOpen1(!open1)}}>Signin</div>}
            </div>
        </div> 
            {
                (open) &&
                <div className='dropdownlist'><ul className='ul_list'>
                <div onClick={() => navigate("/")}><Dropdownlist text ={"Home"}/></div>
                <Dropdownlist text ={"Account"}/>
                <div onClick={() => navigate("/wishlist")}><Dropdownlist text ={"Whislist"}/></div>
                <div onClick={() => navigate("/createPost")}><Dropdownlist text ={"List Propery"}/></div>
                <div onClick={() => {dispatch(logout()); setOpen(!open); navigate("/")}}><Dropdownlist text ={"Logout"}/></div>
                </ul></div>
            }
            {
                (open1) &&
                <div className='dropdownform'><h2>Enter your e-mail to verify</h2>
                <form onSubmit={handleLogin}>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className='signInput'
                  />
                  <button type="submit" className='signbtn'>Verify</button>
                </form></div>
            }
        </div>
    )
}

function Dropdownlist(props) {
    return(
      <li className='dropdown_item'>
        <h1>{props.text}</h1>
      </li>
    );
  }