"use client";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";

const AddUsers = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const userDispatch = () => {
    dispatch(addUser(name));
  };

  return (
    <div className="add-user">
      <h3>Add Users</h3>
      <input type="text" onChange={(e) => setName(e.target.value)} />

      <button onClick={userDispatch}>Add</button>

      <Link href="/removeuser">Remove User</Link>
      <Link href="/apiusers">Api users</Link>
    </div>
  );
};

export default AddUsers;
