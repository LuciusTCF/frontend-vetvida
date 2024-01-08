// const url = "https://backend-vetvida.onrender.com/api/auth";
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

export const getAuthData = async (token) => {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },
    });

    if (!res.ok) {
      throw new Error("Error en la solicitud de datos de autenticación");
    }

    const info = await res.json();

    return info;
  } catch (error) {
    console.error("Error en la función getAuthData:", error);
    throw error;
  }
};
