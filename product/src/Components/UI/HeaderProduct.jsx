import './HeaderProduct.css'
import LogoFullMarket from '../../Images/LogoFullMarket.jpeg'

export const HeaderProduct=()=>{
    return(
        <>
            <div className="Header">
                <img src={LogoFullMarket} alt="Logo" className="imgFullMarket"></img>
            </div>
            <div className="container"></div>
        </>
    );
}