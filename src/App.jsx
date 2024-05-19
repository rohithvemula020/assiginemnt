// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import UserList from "./Components/Userlist";

// const App = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch the user data and set it in the state
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         setUsers(response.data);
//       })
//       .catch((error) => console.error("Error fetching users:", error));
//   }, []);

//   // Function to delete a user by ID
//   const deleteUser = (userId) => {
//     const updatedUsers = users.filter((user) => user.id !== userId);
//     setUsers(updatedUsers);
//   };

//   return (
//     <div className="App">
//       <h1 style={{ textAlign: "center", color: "red" }}>User Profiles</h1>
//       <UserList users={users} onDelete={deleteUser} />
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./Components/Userlist"

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the user data and set it in the state
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Function to delete a user by ID
  const deleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  // Function to update a user by ID
  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "red" }}>User Profiles</h1>
      <UserList users={users} onDelete={deleteUser} onUpdate={updateUser} />
    </div>
  );
};

export default App;
