import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { updatePost } from "./postsSlice";
import "./PostsList.css";

const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const [characters, updateCharacters] = useState(posts);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);

    dispatch(updatePost(items));
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <table>
                <tbody>
                  {characters.map((post, index) => (
                    <Draggable
                      key={index}
                      draggableId={index.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <tr
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <td className="row">
                            <input
                              value={index + 1}
                              disabled
                              className="inputs"
                            />
                          </td>
                          <td className="input">
                            <input
                              type="text"
                              className="inputs"
                              value={post.value || ""}
                              onChange={(e) =>
                                dispatch(
                                  updatePost({ index, value: e.target.value }),
                                )
                              }
                            />
                          </td>
                        </tr>
                      )}
                    </Draggable>
                  ))}
                </tbody>
              </table>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default PostsList;
