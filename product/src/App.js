import React, {useState} from 'react';
import './App.css'

function App() {

  const [file, setFile] = useState(null)

  const selectImg = e => {
    setFile(e.target.files[0])
  }

  const remove = () => {
    if(!file){
      alert('you must upload file')
      return
    }
  }

  return (
    <>
      <div className="addProduct">
        <div className="containerImg">
          <p>Add image of your product</p>
        </div>
        <div className="containerIma">
          <div className="insertImg">
            <input onChange={selectImg} className="insertIm" type="file"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


