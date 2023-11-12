import { useState, useEffect } from "react";
import { userList } from "../api/usersApi";

const useGetUsers = (page = 0) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, [data]);

  const getData = async () => {
    const { total, users } = await userList(page);
    setData({
      total,
      users,
    });
  };

  return { data };
};

export default useGetUsers;
