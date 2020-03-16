import Layout from "../components/layout";
//import fetch from "isomorphic-unfetch";
import axios from "axios";

const index = props => {
  var allTasks = props.allTasks.map(task => {
    return (
      <div key={task._id} className="card" style={{ margin: "16px" }}>
        <p>Title : {task.title}</p>
        <p>Description : {task.description}</p>
        <p>Status : {task.status} </p>
      </div>
    );
  });

  return (
    <Layout>
      Welcome to Home Page
      {allTasks}
    </Layout>
  );
};

index.getInitialProps = async function() {
  const res = await axios.get("http://localhost:5000/tasks");

  return {
    allTasks: res.data
  };
};
// index.getInitialProps = async function() {
//   const res = await axios.get("http://localhost:5000/tasks");
//   const allTasks = await res.json();

//   return allTasks;
// };

export default index;
