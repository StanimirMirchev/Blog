import logo from './logo.svg';
import './App.css';
import { BlogPostsList } from './components/BlogPostsList';
import { CreatePostDialog } from './components/CreatePostDialog';
import { SiteNavigation } from './components/SiteNavigation';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <SiteNavigation />

      <Routes>
        <Route path='*' element={<h1>404</h1>} />
        <Route path='/new' element={<CreatePostDialog />} />
        <Route path='/posts' element={<BlogPostsList />} />
      </Routes>
      
    </div>
  );
}

export default App;
