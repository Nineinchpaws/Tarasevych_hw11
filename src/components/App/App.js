import { useState } from 'react';
import './App.css';
import Modal from '../Modal/Modal';
import Portal from '../Portal/Portal';
import ContextHw from '../ContextHw/ContextHw';


function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <h1>Modal window</h1>

      <p>
        <button onClick={() => setShowModal(!showModal)}>
          Show modal
        </button>  
      </p>

      {showModal && (
        <Portal>
          <Modal onClose={() => setShowModal(false)}/>
        </Portal>
      )}

      <ContextHw />
    </div>
  );
}

export default App;
