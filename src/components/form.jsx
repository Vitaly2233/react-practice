import { useState } from 'react';
import MyButton from './UI/button/myButton';
import MyInput from './UI/input/myInput';

const Form = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const addNewPost = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <MyInput
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="post name"
      />
      <MyInput
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="post description"
      />
      <MyButton onClick={addNewPost}>create post</MyButton>
    </form>
  );
};

export default Form;
