import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Basic } from './Basic';
import { Advanced } from './Advanced';
import { Hooks } from './Hooks';

export default function App() {
  return (
    <Router>
      <Hooks />
      <Advanced />
      <Basic />
    </Router>
  );
}
