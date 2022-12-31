import React, {useState, useEffect, createRef} from "react";

const App = props => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
    .then(res => res.json())
    .then(json => {
      setUsers(json.data);
    });
  },[]);

  const first_nameRef = createRef();
  const last_nameRef = createRef();
  const mailRef = createRef();
  const id =  users.length + 6;

  const add = () => {
    fetch('https://reqres.in/api/users?page=2', {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify({first_name: first_nameRef.current.value, last_name: last_nameRef.current.value, email: mailRef.current.value, id: id+1})
    })
    .then(res => res.json())
    .then(tom => {
      setUsers([...users,tom]);
    });

  }

  return(
    <div>
      <ul>
        {users.map(u =>
          <li key = {u.id}>{u.id} {u.first_name} {u.last_name} ( {u.email} )</li>)
        }
      </ul>
      First Name - <input  type='text' ref={first_nameRef} /><br />
      Last  Name - <input  type='text' ref={last_nameRef} /><br />
      Mail       - <input  type='text' ref={mailRef} /><br />
      <button onClick={add}>New User</button>
    </div>
  );
}
export default App;
