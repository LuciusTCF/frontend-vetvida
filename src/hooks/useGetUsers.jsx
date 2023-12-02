import { useState, useEffect } from "react";
import { userList } from "../api/usersApi";

const useGetUsers = (page = 0) => {
  const [dataUsers, setDataUsers] = useState(null);

  useEffect(() => {
    getData();
  }, [dataUsers]);

  const getData = async () => {
    const { total, users } = await userList(page);
    setDataUsers({
      total,
      users,
    });
  };

  return dataUsers;
};

export default useGetUsers;
