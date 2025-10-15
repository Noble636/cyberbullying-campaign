import React from 'react';
import './HowCanIHelp.css';

function HowCanIHelp({ onBack }) {
  return (
    <div className="page help-page">
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
      <button className="back-btn" onClick={onBack}>Back</button>
    </div>
  );
}

export default HowCanIHelp;
