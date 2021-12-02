import App from "../../../App";
import { MainProduct } from "../MainProduct/MainProduct";
import './MainImg.css'

export const MainImgProduct=()=>{
    return(
        <>
            <div className="imgPro">
                <MainProduct/>
                 <App/>
            </div>
           
        </>
    );
}