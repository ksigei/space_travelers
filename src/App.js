import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import NotFound from './components/NotFound';
import Rockets from './components/Rockets';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
