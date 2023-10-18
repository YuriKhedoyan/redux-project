import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { postAdded } from './postsSlice.js'


import '../../App.css'

const PostsList = () => {
  const [inputs, setInputs] = useState(['']);
  const posts = [];
  const a = useSelector((state) => {
    console.log(state.posts)
    return state.posts
  });

  const postsIndex = []
  const dispatch = useDispatch()

  const updateInput = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;

    if (index === inputs.length - 1 && value.trim() !== '') {
      newInputs.push('');
    }

    setInputs(newInputs);
  };

  posts.forEach(el => {
    postsIndex.push(el.index)
  })

  const handleInputBlur = (index, value) => {
    debugger
    value = value.trim();
    console.log(postsIndex, postsIndex.includes(index))
    if (postsIndex.includes(index)) {
      posts[index].value = value;
      console.log(posts, "posts", posts[index], index, "Index", value, "value")
      console.log("UPDATE !")
    } else if (value.length !== 0) {
      posts.push({ index, value });
      console.log('Dispatched !')
      dispatch(postAdded(posts[index]));
      console.log(posts[index])
    }
  };


  return (
    <div>
      {inputs.map((input, index) => (
        <div key={index}>
          <table>
            <tr>
              <td className='row'><input value={index + 1} disabled className='inputs' /></td>
              <td className='input'><input key={index} type="text" value={input} onBlur={e => handleInputBlur(index, e.target.value)} onChange={(e) => updateInput(index, e.target.value)} className='inputs' id="postTitle" name="postTitle" multiline label="postTitle" /></td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
};

export default PostsList;