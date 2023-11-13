const url = "https://backend-vetvida-dev-jche.1.us-1.fl0.io/api/users";

const usuarioAdd = async (datos) => {
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await resp.json();

  return data;
};

export { usuarioAdd };