import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePost } from './postsSlice';
import './PostsList.css';

const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  console.log(posts)

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
                    onChange={(e) => dispatch(updatePost({index, value: e.target.value}))}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
