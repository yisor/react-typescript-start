import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../pages/Home';

export interface Props {
  history: any;
}

const RouterConfig = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  )
};

export default RouterConfig;