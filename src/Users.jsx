import {Link, useParams} from 'react-router-dom';


function Users () {
    const {ID} = useParams();
    return <>
        <h1>Select User</h1>
        <p><Link to="/Users/1">Ron</Link></p>
        <p><Link to="/Users/1">Fred</Link></p>
        <p><Link to="/Users/1">George</Link></p>
        <p><Link to="/Users/1">Percy</Link></p>
        <p><Link to="/Users/1">Charlie</Link></p>
        <p><Link to="/Users/1">Bill</Link></p>


    <p>{ID}</p>
        </>
        
}

export default Users;