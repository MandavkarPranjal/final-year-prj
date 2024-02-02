// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import Dashboard from './dashboard/dashboard';
import NxWelcome from './nx-welcome';

import { Route, BrowserRouter as Router ,Routes, Link} from 'react-router-dom';

export function App() {
  return (
    <Router>
      {/* <NxWelcome title='pranjal'/> */}
      <Dashboard />
      {/* <div>
        <Routes>
          <Route path="/" Component={Dashboard} />
        </Routes>
      </div> */}

    </Router>
    
  );
}

export default App;
