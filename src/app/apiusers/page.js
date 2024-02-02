"use client";

import { useDispatch, useSelector } from "react-redux";
import { fetchApiUsers } from "../redux/slice";

const page = () => {
  const dispatch = useDispatch();
  const apiUserData = useSelector((data) => data.usersData.userApiData);

  return (
    <div>
      <button onClick={() => dispatch(fetchApiUsers())}>Load</button>

      {apiUserData.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

export default page;
