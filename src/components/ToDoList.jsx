import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, onToggle, onDelete, onEdit }) => {
  return (
    <ul className="todo-list">
      {tasks.map(task => (
        <ToDoItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  );
};

export default ToDoList;