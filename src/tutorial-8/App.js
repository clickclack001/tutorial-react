import {useState} from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";


function App() {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
           try{
               await fetch('https://61dc87f0591c3a0017e1a9de.mockapi.io/users').then((res) => {
                   if(!res.ok) {
                       throw new Error('Произошла ошибка при получении данных');
                   }
                   res.json().then((result) => {
                       setUsers(result)
                   })
               })
           } catch (error) {
               console.log(error)
           }
    }

    return (
        <Paper>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.id}. {user.firstName} {user.lastName} </li>
                ))}
            </ul>

            <Button variant={'outlined'} onClick={getUsers}>Get users</Button>
        </Paper>
    )
}

export default App;