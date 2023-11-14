// const url = "https://backend-vetvida-dev-jche.1.us-1.fl0.io/api/users";
const url = "http://localhost:8080/api/users";
const token = JSON.parse(localStorage.getItem("token")) || null;

const userList = async (page) => {
  const resp = await fetch(url + "?from=" + page, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": token,
    },
  });

  const data = await resp.json();
  console.log(data);
  return data;
};

const userAdd = async (data) => {
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": token,
    },
  });

  const dataRes = await resp.json();

  return dataRes;
};

const userUpdate = async (id, data) => {
  const resp = await fetch(url + "/" + id, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": token,
    },
  });
  const dataResp = await resp.json();
  return dataResp;
};

const userDelete = async (id) => {
  const resp = await fetch(url + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": token,
    },
  });
  const data = await resp.json();
  return data;
};

export { userList, userAdd, userUpdate, userDelete };
