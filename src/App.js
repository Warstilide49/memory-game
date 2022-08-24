import React, {useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import Modal from './components/Modal'
import './styles/main.css'

function App() {

  const [modalOpen, setModal] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="App">
      <Header/>
      <Content setModal={setModal} setMessage={setMessage}/>
      <Footer/>
      {modalOpen && <Modal setModal={setModal} message={message}/>}
    </div>
  );
}

export default App;
