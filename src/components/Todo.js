import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo ,updateTodo } from "../actions/index";

const Todo = () => {
  const [inputData, setInputData] = useState({
    id: 0,
    name: "",
    email: "",
    password: "",
    rollno: "",
  });

  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);

  const onChangeHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onEdit = (id) => {
    const newObject = list.find((e) => e.data.id === id);
    setInputData({
      id: newObject?.data?.id,
      name: newObject?.data?.name,
      email: newObject?.data?.email,
      password: newObject?.data?.password,
      rollno: newObject?.data?.rollno,
    });
  };

  return (
    <div className="outer-wrapper">
      <form>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={inputData.name}
          onChange={onChangeHandler}
        />
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={inputData.email}
          onChange={onChangeHandler}
        />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={inputData.password}
          onChange={onChangeHandler}
        />
        <input
          type="text"
          placeholder="Enter RollNo"
          name="rollno"
          value={inputData.rollno}
          onChange={onChangeHandler}
        />
        <button
          type="button"
          onClick={() =>
            inputData.id
              ? dispatch(updateTodo(inputData))
              : dispatch(
                  addTodo({
                    ...inputData,
                    id: Math.floor(1 + Math.random() * 1000),
                  }),
                  setInputData({
                    name: "",
                    email: "",
                    password: "",
                    rollno: "",
                  })
                )
          }
        >
          Submit
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>RollNo</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((elem, ind) => {
            return (
              <tr key={elem.data.id}>
                <td> {elem.data.name}</td>
                <td> {elem.data.email}</td>
                <td> {elem.data.password}</td>
                <td> {elem.data.rollno}</td>
                <td>
                  <button onClick={() => onEdit(elem.data.id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => dispatch(deleteTodo(elem.data.id))}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
