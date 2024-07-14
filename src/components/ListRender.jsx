// ListRender.js
import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./Editbutton";

const ListRender = ({ isEditing, uniqueID, randomColor, onSelect, showOrNot, task, description, onSave, onCancel, onDelete, onEdit }) => {

  if (showOrNot) {
    return;
  }
  const [editedTask, setEditedTask] = useState(task);
  const [editedDescription, setEditedDescription] = useState(description);
  const [selectedItem, setSelectedItem] = useState([]);
  // const [isCancel, setIsCancel] = useState(false);

  const handleDeleteClick = () => {
    onDelete(uniqueID);
  };

  const handleEditClick = () => {


    onEdit(uniqueID, editedTask, editedDescription);
  };



  const handleInputChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleDInputChange = (e) => {
    setEditedDescription(e.target.value);
  }

  const handleSaveClick = () => {
    
    let inputValue = document.getElementsByClassName("task-input")[0].value;
    let inputDescription = document.getElementsByClassName("task-description")[0].value;
    // You might want to update the state and local storage accordingly
    setEditedTask(inputValue);
    setEditedDescription(inputDescription);
    onSave(uniqueID, editedTask, editedDescription);
  };


  const handelCheckBox = (uniqueID) => {
    setSelectedItem((prevSelected) => {
      // Check if the uniqueID is already in the selected items
      const isSelected = prevSelected.includes(uniqueID);
  
      let updatedSelectedItems;
  
      if (isSelected) {
        // If selected, remove it
        updatedSelectedItems = prevSelected.filter((id) => id !== uniqueID);
      } else {
        // If not selected, add it
        updatedSelectedItems = [...prevSelected, uniqueID];
      }
  
      // Notify the parent component about the updated selected items
      onSelect(updatedSelectedItems);
  
      return updatedSelectedItems;
    });
  };
  




  const handelCancelClick = () => {
    onCancel(uniqueID, editedTask, editedDescription)
  }

  return (
    <div className={`flex card2 mr-3  w-auto gap-3  all-list-style items-center bg-gray-800`}>
      <div className="check-box"><input onChange={handelCheckBox} type="checkbox" name="" id="" /></div>
      <div className="text-slate-700   font-bold">{uniqueID}</div>
      <div className="flex  flex-col justify-center items-center">
        {isEditing ? (
          <>
            <input
              className="task-input font-bold w-auto outline-none border-b-2 text-xl  bg-transparent  p-2  border-b-gray-400"
              type="text"
              value={editedTask}
              onChange={handleInputChange}
              placeholder="Edit Task"
            />
          </>
        ) : (
          <h1 className="task font-bold text-xl">{task}</h1>
        )}

        {isEditing ? (
          <>
            <input
              className="task-description outline-none border-b-2 w-11/12  font-bold bg-transparent text-xl  p-2  border-b-slate-400"
              type="text"
              value={editedDescription}
              onChange={handleDInputChange}
              placeholder="Edit Description"
            />
          </>
        ) : (
          <p className="description font-bold text-xl">{description}</p>
        )}


      </div>
      <div className="controls flex gap-3">
        {isEditing ? (
          <>
            <div className="flex flex-col gap-3">
              <button className="bg-green-700 rounded-md text-black w-max px-5 py-1" onClick={handleSaveClick}>
                Save
              </button>
              <button className="bg-red-400 rounded-md text-black w-max p-1 px-4" onClick={handelCancelClick}>
                Cancel
              </button>
            </div>

          </>
        ) : null}

        {/* <DeleteButton onClick={handleDeleteClick} /> */}
        <DeleteButton editing={isEditing} onClick={handleDeleteClick} />
        <EditButton editing={isEditing} onClick={handleEditClick} />
      </div>
    </div>
  );
};

export default ListRender;
