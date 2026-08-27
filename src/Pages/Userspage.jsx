import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "../components/Usercard";

const Userspage = () => {
  const [allUsers, setallUsers] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  console.log(allUsers);

  let getallUsers = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/users");
      setallUsers(res.data);
      setisLoading(false)
    } catch (error) {
      console.log("API error", error);
    }
  };

  useEffect(() => {
    getallUsers();
  }, []);

  if (isLoading) return <h1 className="text-black text-4xl">Loading Users</h1>;

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {allUsers.map((elem) => {
        return <UserCard user={elem} key={elem.id} />;
      })}
    </div>
  );
};

export default Userspage;
