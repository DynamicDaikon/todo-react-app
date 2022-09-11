import React from 'react';
import Todo from './Todo';

/**
 * Todoリスト用のコンポーネント
 * @param {todos, toggleTodo} Todoリスト,チェックボックス更新用関数
 * @returns Todo項目
 */
const TodoList = ({ todos, toggleTodo }) => {
  // Todo項目
  return todos.map((todo) => (
    <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />
  ));
};

export default TodoList;
