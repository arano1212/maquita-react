import { useState } from 'react';

const Prompt = ({ setName }) => {
  const [inputName, setInputName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(inputName); // Enviar el nombre al componente padre
  };

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box">
          <h2 className="title">Welcome to Adventures!</h2>
          <p className="subtitle">Whats your name?</p>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <div className="control">
                <input 
                  className="input" 
                  type="text" 
                  placeholder="Enter your name" 
                  value={inputName} 
                  onChange={(e) => setInputName(e.target.value)} 
                  required 
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button type="submit" className="button is-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={() => setName(inputName)}></button>
    </div>
  );
};

export default Prompt;
