"use client";

import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

const DisplayUsers = () => {
  const userData = useSelector((data) => data.usersData.users);
  const dispatch = useDispatch();

  return (
    <div className="display-user">
      <h3>DisplayUsers</h3>
      {userData.map((item) => (
        <div>
          {item.name}
          <button onClick={() => dispatch(removeUser(item.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default DisplayUsers;
