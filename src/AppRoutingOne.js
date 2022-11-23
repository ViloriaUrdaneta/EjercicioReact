import { BrowserRouter as Router, Route,  } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';

function AppRoutingOne() {
  return (
    <Router>
      
        <Route path='/*' component={ HomePage }/>
        <Route component={ NotFoundPage }/>
      
    </Router>
  );
}

export default AppRoutingOne;
