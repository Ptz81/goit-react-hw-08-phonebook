import { useSelector } from 'react-redux';
import css from './TaskList.module.css';
import { selectAllTasks } from 'redux/tasks/selectors';
import { Task } from 'components/Task/Task';

export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <ul className={css.list}>
      {tasks.map(({ id, text }) => (
        <li key={id}>
          <Task id={id} text={text} />
        </li>
      ))}
    </ul>
  );
};
