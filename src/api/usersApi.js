const url = "https://backend-vetvida-dev-jche.1.us-1.fl0.io/api/users";

const userList = async (page) => {
  const resp = await fetch(url + "?from=" + page, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await resp.json();

  return data;
};

const userAdd = async (data) => {
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const dataRes = await resp.json();

  return dataRes;
};

export { userList, userAdd };
