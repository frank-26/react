import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Basic } from './Basic';
import { Advanced } from './Advanced';

export default function App() {
  return (
    <Router>
      <Advanced />
      <Basic />
    </Router>
  );
}
