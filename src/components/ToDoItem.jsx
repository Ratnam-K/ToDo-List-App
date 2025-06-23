import { useState } from 'react';

const ToDoItem = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    onEdit(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input value={newText} onChange={(e) => setNewText(e.target.value)} />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span onClick={() => onToggle(task.id)}>{task.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default ToDoItem;