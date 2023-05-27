import logo from './logo.svg';
import './App.css';
import BookingCreatePage from './pages/booking-create-page';
import BookingHistoryPage from './pages/booking-history-page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
;

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path='/'
            element = {<BookingCreatePage/>}
          />
          <Route
            path='/booking-history'
            element = {<BookingHistoryPage/>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
