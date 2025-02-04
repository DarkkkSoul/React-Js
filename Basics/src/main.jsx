import React, { StrictMode } from 'react';          // Correct import for React and StrictMode
import { createRoot } from 'react-dom/client';      // Correct import for createRoot
import App from './App.jsx';
const reactElem = React.createElement(
  'a',
  {
    href:'https://youtube.com',
    target:'_blank'
  },
  'visit youtube here'
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {reactElem}
  </StrictMode>
);

