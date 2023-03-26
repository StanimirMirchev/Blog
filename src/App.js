import logo from './logo.svg';
import './App.css';
import { BlogPostsList } from './components/blogPostsList';

import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<h1>404</h1>} />
        <Route path='/' element={<BlogPostsList />} />
      </Routes>
    </div>
  );
}

export default App;
