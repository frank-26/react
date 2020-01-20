import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Basic } from './Basic';
import { Advanced } from './Advanced';
import { Hooks } from './Hooks';
import { Else } from './Else';

export default function App() {
  return (
    <Router>
      <Else />
      <Hooks />
      <Advanced />
      <Basic />
    </Router>
  );
}
