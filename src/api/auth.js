// const url = "https://backend-vetvida-dev-jche.1.us-1.fl0.io/api/auth";
const url = "http://localhost:8080/api/auth";

export const login = async (data) => {
  const res = await fetch(url + "/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const info = await res.json();

  return info;
};

export const obtainDataAuth = async (token) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": token,
    },
  });

  const info = await res.json();

  return info;
};
