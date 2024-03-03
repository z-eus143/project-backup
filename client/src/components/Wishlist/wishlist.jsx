import { useEffect, useState } from "react"
import { Header } from "../header/header"
import axios from 'axios'
import '../Wishlist/style.css'
import LoadingBar from 'react-top-loading-bar'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const Wishlist = () => {
    const [progress,setProgress] = useState(100)
    return (
    <>
    <LoadingBar color='#f11946' progress={progress} onLoaderFinished={() => setProgress(0)}/>
    <Header />
    </>
)}