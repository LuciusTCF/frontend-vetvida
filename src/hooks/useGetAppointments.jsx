import { useState, useEffect } from "react";
import { appointmentList } from "../api/appointmentsApi";

const useGetAppointments = (page = 0) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, [data]);

  const getData = async () => {
    const { total, appointments } = await appointmentList(page);
    setData({
      total,
      appointments,
    });
  };

  return { data };
};

export default useGetAppointments;
