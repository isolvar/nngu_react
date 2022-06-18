import React, { FC } from 'react';
import { ITodo } from '../../../store/pages/TodosPage/interface';

interface IProps {
  todosData: ITodo[];
}

const TodosPageComponent: FC<IProps> = ({ todosData }) => {
  return !todosData.length ? (
    <div>Список пуст</div>
  ) : (
    <div>
      {todosData.map((todo) => {
        const { id, title } = todo;
        return <div key={`${id} - ${title}`}>{`${id} - ${title}`}</div>;
      })}
    </div>
  );
};

export default TodosPageComponent;
