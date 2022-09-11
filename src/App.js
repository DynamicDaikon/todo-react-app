import './App.css';
import TodoList from './TodoList';
import { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  /**
   * リスト状態管理用の関数
   */
  const [todos, setTodos] = useState([]);

  /**
   * 名前入力内容の取得用関数
   */
  const todoNameRef = useRef();

  /**
   * タスク追加関数
   */
  const handleAddTodo = () => {
    // 名前の取得
    const name = todoNameRef.current.value;

    if (name === '') {
      return;
    }

    // リストへの値の設定
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });

    // 入力した内容の初期化
    todoNameRef.current.value = null;
  };

  /**
   * チェックボックス状態の更新関数
   * @param {*} id // ID
   */
  const toggleTodo = (id) => {
    // リスト内容をコピー
    const newTodos = [...todos];
    // クリックしたIDと一致するtodoを取り出し
    const todo = newTodos.find((todo) => todo.id === id);

    // チェック状態を更新
    todo.completed = !todo.completed;

    // コピーから実項目に値を設定
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  // 画面レンダリング内容
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </>
  );
}

export default App;
