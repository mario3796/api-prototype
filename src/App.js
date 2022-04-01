import './App.css';
import Feed from './components/Feed/Feed';
import { Routes, Route } from 'react-router-dom';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/:id' exact element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
