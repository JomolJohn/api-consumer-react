import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Book from './components/book/Book';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={< Home />}></Route>
          <Route path='*' element={< NotFound />}></Route>
          <Route path="/book/:bookId" element={< Book />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
