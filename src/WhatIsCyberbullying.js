import React from 'react';
import './WhatIsCyberbullying.css';

function WhatIsCyberbullying({ onBack }) {
  return (
    <div className="page cyberbullying-page">
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
      <button className="back-btn" onClick={onBack}>Back</button>
    </div>
  );
}

export default WhatIsCyberbullying;
