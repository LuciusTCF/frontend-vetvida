const url = "https://backend-vetvida.onrender.com/api/appointments";
// const url = "http://localhost:8080/api/appointments";
const token = JSON.parse(localStorage.getItem("token")) || null;

const appointmentList = async (page) => {
  const resp = await fetch(url + "?from=" + page, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": token,
    },
  });

  const data = await resp.json();
  return data;
};

const appointmentAdd = async (data) => {
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

const appointmentUpdate = async (id, data) => {
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

const appointmentDelete = async (id) => {
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

export {
  appointmentList,
  appointmentAdd,
  appointmentUpdate,
  appointmentDelete,
};
