import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
  limit: number;
  itemsAmount: number;
}

const Pagination: FC<IProps> = ({ limit, itemsAmount }) => {
  const pagesAmount = Math.ceil(itemsAmount / limit);
  const pagesArray = [];

  const navigate = useNavigate();

  for (let i = 0; i < pagesAmount; i++) {
    pagesArray.push(i);
  }

  return (
    <div>
      {pagesArray.map((page) => (
        <button key={`key${page}`} type="button" onClick={() => navigate(`?page=${page}`)}>
          {page}
        </button>
      ))}
    </div>
  );
};

// количество страниц, текущая страница, лимит на страницу, общее количество пользователей (offset, limit)
export default Pagination;
