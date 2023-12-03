const obtenerClima = async (lat, long)=>{
  const respuesta = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=e3e500cbb8977b4c121b9a50e5f059a1`
  );

  const data = await respuesta.json();

  return data;
  }

  export default obtenerClima;