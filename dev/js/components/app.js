import React from "react";
import UserList from '../containers/userlist';
import UserDetail from '../containers/userdetail';
require('../../scss/style.scss');

const App = () => (
     <div>
        <h2>User list</h2>
        <UserList/>
        <hr/>
        <h2>User Details</h2>
        <UserDetail/>
     </div>
);

export default App;
