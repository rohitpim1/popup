import React from 'react'
import cokie from './cokie.jpg'
import './App.css'
const App = () => {
  const openPop = () =>{
    document.querySelector('.cookies-box').classList.add('active');
  }
  const closePop = () =>{
    document.querySelector('.cookies-box').classList.remove('active');
  }
  return(
    <>
<div className="container">
  <button className="open_btn" onClick={openPop}>popup</button>
</div>
<div className="cookies-box">
  <span className="close_btn" onClick={closePop}>&times;</span>
  <img src={cokie} alt="cokies"/>
  <h3>cookies and privacy</h3>
  <p>this website use cookies to ensure you to get the best experience on our website</p>
  <a href="#"  className="accept">accept all</a>
  <a href="#" className="setting">Coustmize settings</a>

</div>
    </>
  )
}
export default App;