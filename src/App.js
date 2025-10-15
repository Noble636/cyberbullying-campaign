
import React, { useState } from 'react';
import './App.css';

function App() {
  const [modal, setModal] = useState(null);

  const handleLearnClick = () => setModal('cyberbullying');
  const handleSupportClick = () => setModal('help');
  const handleClose = () => setModal(null);

  return (
    <div className="App">
      <header className="App-header animated-bg">
        <h1 className="title">Cyberbullying Awareness Campaign</h1>
        <p className="subtitle">
          Let&apos;s work together to stop cyberbullying. Learn how you can help and support others.
        </p>
        <div className="button-group">
          <button className="main-btn" onClick={handleLearnClick}>What is Cyberbullying?</button>
          <button className="main-btn" onClick={handleSupportClick}>How Can I Help?</button>
        </div>
        <div className="tips">
          <h2>Tips to Stay Safe Online:</h2>
          <ul>
            <li>Think before you post or comment.</li>
            <li>Don&apos;t share personal information with strangers.</li>
            <li>Report and block abusive users.</li>
            <li>Be kind and supportive to others.</li>
          </ul>
        </div>
        <div className="animated-shapes">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
        </div>
        <div className="owner-credit">
          Nica Angela T. Bilog<br />12-OSMEÑA
        </div>
      </header>

      {modal === 'cyberbullying' && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>What is Cyberbullying?</h2>
            <p>
              Cyberbullying is the use of digital technologies to deliberately harm, harass, or intimidate someone. It can happen on social media, messaging platforms, gaming sites, and mobile phones. Cyberbullying includes sending, posting, or sharing negative, harmful, false, or mean content about someone else.
            </p>
            <ul>
              <li>Harassment through messages or comments</li>
              <li>Spreading rumors or lies online</li>
              <li>Sharing embarrassing photos or videos</li>
              <li>Impersonation or fake profiles</li>
            </ul>
            <button className="back-btn" onClick={handleClose}>Back</button>
          </div>
        </div>
      )}

      {modal === 'help' && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>How Can I Help?</h2>
            <p>
              You can help stop cyberbullying by:
            </p>
            <ul>
              <li>Speaking up and supporting victims</li>
              <li>Reporting abusive behavior to platform moderators</li>
              <li>Blocking and ignoring bullies</li>
              <li>Educating others about online safety</li>
            </ul>
            <div className="hotlines">
              <h3>Philippine Hotlines</h3>
              <ul>
                <li><strong>PNP Anti-Cybercrime Group:</strong> 0998-598-8116</li>
                <li><strong>Department of Justice (DOJ):</strong> (02) 523-8481 local 342</li>
                <li><strong>Bantay Bata 163:</strong> 163</li>
                <li><strong>National Bureau of Investigation (NBI):</strong> (02) 8523-8231</li>
              </ul>
            </div>
            <button className="back-btn" onClick={handleClose}>Back</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
