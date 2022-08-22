import React, {useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import Modal from './components/Modal'
import './styles/main.css'

function App() {

  const [modalOpen, setModal] = useState(false);

  return (
    <div className="App">
      <Header/>
      <Content setModal={setModal}/>
      <Footer/>
      {modalOpen && <Modal setModal={setModal}/>}
    </div>
  );
}

export default App;
