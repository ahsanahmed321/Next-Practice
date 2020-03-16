import Layout from "../components/layout";
import axios from "axios";
import { useState } from "react";

const edit = props => {
  const [state, setState] = useState("");
  const [status, setStatuts] = useState("");

  var onUpdateHandler = e => {
    axios
      .patch("http://localhost:5000/tasks/" + e.target.id + "/status", status)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  var onDeleteHandler = e => {
    axios.delete("http://localhost:5000/tasks/" + e.target.id);
  };

  var onChangeAddHandler = e => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };
  var onChangeUpdateHandler = e => {
    setStatuts({ ...status, [e.target.name]: e.target.value });
    console.log(status);
  };

  var addTaskHandler = e => {
    // fetch("http://localhost:5000/tasks", state)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err));
    axios
      .post("http://localhost:5000/tasks", state)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  var allTasks = props.allTasks.map(task => {
    return (
      <div key={task._id} className="col-xs-12 col-sm-4">
        <div key={task._id} className="card">
          <div className="card-body">
            <p>Title : {task.title}</p>
            <p>Description : {task.description}</p>
            <p>Status : {task.status} </p>
            <label>Status</label>
            <input
              type="text"
              name="status"
              onChange={e => onChangeUpdateHandler(e)}
            ></input>
            <button id={task._id} onClick={e => onUpdateHandler(e)}>
              Update
            </button>
            <button id={task._id} onClick={e => onDeleteHandler(e)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Layout>
      Welcome to edit Page
      <div className="row">{allTasks}</div>
      <label>Title</label>
      <input
        type="text"
        name="title"
        onChange={e => onChangeAddHandler(e)}
      ></input>
      <label>Description</label>
      <input
        type="text"
        name="description"
        onChange={e => onChangeAddHandler(e)}
      ></input>
      <button onClick={addTaskHandler}>Add Task</button>
    </Layout>
  );
};

edit.getInitialProps = async function() {
  const res = await axios.get("http://localhost:5000/tasks");

  return {
    allTasks: res.data
  };
};

export default edit;
