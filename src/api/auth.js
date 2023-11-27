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

// funcion para validar el rol para dar o no accesos a ciertas funcionalidades
export const getAuthData = async (token) => {
  try{
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": token,
    },
  });
  
  // creado para mejorar la solucion de errores
  if (!res.ok) {
    throw new Error('Error en la solicitud de datos de autenticación');
  }

  const info = await res.json();
  return info;
} catch (error) {
  console.error('Error en la función getAuthData:', error);
  throw error;
}
};

