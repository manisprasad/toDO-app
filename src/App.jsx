import { React } from "react";
import { useState, useEffect } from "react";
import "./index.css";
import ListRender from "./components/ListRender";
// import DeleteAlert from "./components/DeletAlert";
import NoToDoExistMessage from "./components/NoToDoMessage";
import MarkComplete from "./components/MarkCompleted";


const App = () => {
  const randomColorArray = ['bg-red-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-pink-500',]

  const picRandomColor = () => {
    const randomColor = randomColorArray[Math.floor(Math.random() * randomColorArray.length)];
    return randomColor;
  }

  const [todo, setTodo] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [completedToDo, setCompletedTodo] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [isTodoClicked, setIsTodoClicked] = useState(true);
  const [isCompletedClicked, setIsCompletedClicked] = useState(false);
  const [id, setId] = useState(1);

  useEffect(() => {
    const storedTodos = localStorage.getItem("toDoItemList");

    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      // Parse the stored string to JSON and set it in the state
      const updatedTodos = parsedTodos.map((todo, index) => ({
        ...todo,
        uniqueNumber: index + 1,
      }));

      setTodo(updatedTodos);
      setId(updatedTodos.length + 1);
    }
  }, []);


  const handelShowInput = () => {
    setShowInput(!showInput);
  };


  const handleDelete = (uniqueID) => {
    // Remove the item with the specified uniqueID from the state




    const updatedTodos = todo.filter(todo => todo.uniqueNumber !== uniqueID);

    // Update the state and local storage
    let num = 1;
    updatedTodos.map(todo => todo.uniqueNumber = num++);
    setTodo(updatedTodos);
    localStorage.setItem("toDoItemList", JSON.stringify(updatedTodos));

  };

  const handelCancel = (uniqueID) => {
    const updatedTodos = todo.map(todoItem => {
      if (todoItem.uniqueNumber === uniqueID) {
        return { ...todoItem, editing: false };
      }
      return todoItem;
    });
    setTodo(updatedTodos);
    return;
  }

  const handleEdit = (uniqueID, editedTask, editedDescription) => {
    todo.map(eachTodo => {
      eachTodo.editing = false;
    })

    const updatedTodos = todo.map(todoItem => {
      if (todoItem.uniqueNumber === uniqueID) {
        return { ...todoItem, editing: true };
      }
      return todoItem;
    });

    setTodo(updatedTodos);

    // Rest of your code...
  };

  const handelSave = (uniqueID, editedTask, editedDescription) => {
    if (editedTask == "") return alert('Please enter the task');
    const updatedTodos = todo.map(todoItem => {
      if (todoItem.uniqueNumber === uniqueID) {
        return { ...todoItem, title: editedTask, description: editedDescription, editing: false };
      }
      return todoItem;
    });
    setTodo(updatedTodos);
    localStorage.setItem("toDoItemList", JSON.stringify(updatedTodos));
  }


  const handleTodoClick = () => {
    setIsTodoClicked(true);
    setIsCompletedClicked(false);
  };


  const [allSelectedItem, setAllSelectedItem] = useState([]);

  const handelSelection = (allItem) => {
    setAllSelectedItem(allItem);
    console.log('Updated allSelectedItem:', allSelectedItem);
  };



  const handleTaskCompletedClick = () => {
    setTodo((prevTasks) => {
      return prevTasks.map((task) => {
        if (allSelectedItem.includes(task.uniqueNumber)) {
          return {
            ...task,
            isTaskCompleted: !task.isTaskCompleted,
          };
        }
        return task;
      });
    });
  };






  const handleCompletedClick = () => {
    setIsTodoClicked(false);
    setIsCompletedClicked(true);
  };

  const handelSubmitButton = () => {
    const taskInput = document.getElementById('task-input').value;
    if (taskInput === '') return alert('Please enter the task');
    const taskDescriptionInput = document.getElementById('task-description-input').value;
    const task = {
      uniqueNumber: id,
      title: taskInput,
      description: taskDescriptionInput,
      editing: false,
      isTaskCompleted: isCompleted,

    }
    setId(prevId => prevId + 1);
    setTodo([...todo, task]);
    console.log(todo);
    localStorage.setItem('toDoItemList', JSON.stringify(todo));
  }

  return (
    <>
      <div className="todo-container p-4  w-screen   flex flex-col gap-2 ">
        <h1 className="bg-slate-500 w-full px-5 left-0 rounded-none text-xl card fixed clear-both z-10 top-0 text-center p-2">TO-Do List</h1>
        <div
          className={`todo-input-container card ${showInput ? 'flex' : 'hidden'} flex-wrap  m-auto p-5 justify-around gap-3 mt-4 items-center duration-200`}>
          <div className="task-container flex flex-col gap-2">
            <label className="text-xl text-slate-500" htmlFor="task-input">Task Title</label>
            <input className="p-2 outline-black text-xl font-bold card outline-none rounded-sm  " type="text" id="task-input" placeholder="Enter the task" />
          </div>





          <div className="task-description-input-container flex flex-col gap-2" >
            <label className="text-xl text-slate-500" htmlFor="task-description-input">Task Description?</label>
            <input className="p-2 outline-black text-xl font-bold card outline-none rounded-sm " type="text" id="task-description-input" placeholder="Enter the task description" />
          </div>


          <div className="action mt-4 md:mt-1 ">
            <button onClick={handelSubmitButton} className="bg-green-500 px-24 text-white p-2 md:px-10 rounded">Add</button>
          </div>

        </div>
      </div>
      <div onClick={handelShowInput} className="fixed bottom-5 right-10 hover:bg-blue-300 hover:cursor-pointer rounded-full p-2 z-50 bg-yellow-300 flex items-center gap-3" >
        {/* <h1 className="text-xl font-bold text-purple-700">Add</h1> */}
        <svg cxmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
      </div>



      {/* -----to do texts show area  */}



      <div className={`todo-area-container m-auto mt-5   rounded-lg md:w-11/12 w-screen h-max p-4`}>
        <div className="status-button-container flex justify-between">
          <div className="btn">
            <button
              onClick={handleTodoClick}
              className={`font-bold border-2 ${isTodoClicked
                ? "bg-green-600 border-slate-600"
                : "bg-green-100 border-none"
                }  text-black px-4 py-2  `}
              type="button"
            >
              Todo
            </button>
            <button
              onClick={handleCompletedClick}
              className={`font-bold border-2 ${isCompletedClicked
                ? "bg-green-600 border-slate-600"
                : "bg-green-100 border-none"
                }  text-black px-4 py-2  `}
              type="button"
            >
              Completed
            </button>

          </div>
          <div className="">
            <MarkComplete onClick={handleTaskCompletedClick} showOrNot={true} />
          </div>

        </div>

        <div className="todo-area mt-3 ">
          {isTodoClicked ? (

            <div className="flex flex-wrap gap-4 w-full justify-center">

              {todo.map(eachTodo => (
                <ListRender
                  key={eachTodo.uniqueNumber}
                  uniqueID={eachTodo.uniqueNumber}
                  randomColor={picRandomColor()}
                  task={eachTodo.title}
                  description={eachTodo.description}
                  onDelete={handleDelete}
                  isEditing={eachTodo.editing}
                  onEdit={handleEdit}
                  onCancel={handelCancel}
                  onSave={handelSave}
                  showOrNot={eachTodo.isTaskCompleted}
                  onSelect={handelSelection}
                />
              ))}
              {todo.length === 0 && <NoToDoExistMessage isButton={true} message={" Effective time management is crucial for productivity. A to-do list helps in allocating time to specific tasks, preventing procrastination, and ensuring that important tasks are prioritized."} onClick={handelShowInput} />}


            </div>
          ) : (
            // Render Completed items
            <div>
              {/* Example: Render completed items here */}
              <p>Completed Item 1</p>
              <p>Completed Item 2</p>

              {
                completedToDo.length === 0 && <NoToDoExistMessage message={"No Todo Completed yet"} isButton={false} />
              }
            </div>
          )}
        </div>
      </div>



    </>
  );
}

export default App;
