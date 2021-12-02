import './MainProduct.css'


export const MainProduct=()=>{
    return(
        <>
            <div className="name">
                <h1>Add Product</h1>
            </div>
            <div className="container"></div>  
            <div className="descriptionProduct">
                <p className="nameProduct">Name of product</p>
                <input type="text" className="textName"></input>
                <p className="description">Description</p>
                <textarea className="taskField"></textarea>
                <p className="status">Select the status of your product to publish</p>
                <select className="statusProduct">
                    <option className="statusName">Exchange</option>
                    <option className="statusName">Present</option>
                </select>
                <div className="buttonProduct">
                    <a>To Post</a>
                </div>
                
       
            </div>
            
        </>
    );
}