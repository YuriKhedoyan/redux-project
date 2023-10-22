import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postAdded, postUpdated } from './postsSlice';
import './PostsList.css';

const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const [newInputValue, setNewInputValue] = useState('');

  const handleInputBlur = (index, value) => {
    if (value.trim() === '') {
      if (index < posts.length) {
        dispatch(postUpdated({ index, value: null }));
      }
    } else {
      if (index < posts.length) {
        dispatch(postUpdated({ index, value }));
      } else {
        dispatch(postAdded({ index: posts.length, value }));
      }
    }
  };

  const handleInputChange = (index, value) => {
    const newPosts = [...posts];

    if (newPosts[index]) {
      newPosts[index] = { ...newPosts[index], value };
    } else if (value.trim() !== '') {
      newPosts.push({ value });
    }

    dispatch(postUpdated({ index, value }));
  };

  const handleNewInputChange = (value) => {
    setNewInputValue(value);
  };

  const handleNewInputBlur = () => {
    if (newInputValue.trim() !== '') {
      dispatch(postAdded({ index: posts.length, value: newInputValue }));
      setNewInputValue('');
    }
  };

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <table>
            <tbody>
              <tr>
                <td className='row'><input value={index + 1} disabled className='inputs' /></td>
                <td className='input'>
                  <input
                    type="text"
                    className='inputs'
                    value={post.value || ''}
                    onBlur={(e) => handleInputBlur(index, e.target.value)}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
      <div>
        <table>
          <tbody>
            <tr>
              <td className='row'><input value={posts.length + 1} disabled className='inputs' /></td>
              <td className='input'>
                <input
                  type="text"
                  className='inputs'
                  value={newInputValue}
                  onBlur={handleNewInputBlur}
                  onChange={(e) => handleNewInputChange(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostsList;
