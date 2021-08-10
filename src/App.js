import React, { useState } from 'react';
import Form from './components/form';
import PostList from './components/post-list';
import MyButton from './components/UI/button/myButton';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { name: 'js', description: 'some desc' },
    { name: 'js is good', description: 'fuck it' },
  ]);

  return (
    <div className="App">
      <Form />
      <PostList posts={posts} title={'Posts list'} />
    </div>
  );
}

export default App;
