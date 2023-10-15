import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { postAdded } from './postsSlice.js'


import '../../App.css'

const PostsList = () => {
  const [inputs, setInputs] = useState(['']);
  const dispatch = useDispatch()

  const updateInput = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;

    if (index === inputs.length - 1 && value.trim() !== '') {
      newInputs.push('');
    }

    setInputs(newInputs);
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <div key={index}>
          <table>
            <tr>
              <td className='row'><input value={index + 1} disabled className='inputs' /></td>
              <td className='input'><input key={index} type="text" value={input} onChange={(e) => updateInput(index, e.target.value)} className='inputs' /></td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
};

export default PostsList;