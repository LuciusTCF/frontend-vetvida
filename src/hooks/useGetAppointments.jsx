import { useState, useEffect } from "react";
import { appointmentList } from "../api/appointmentsApi";

const useGetAppointments = (page = 0) => {
  const [dataInfo, setDataInfo] = useState(null);

  useEffect(() => {
    getData();
  }, [dataInfo]);

  const getData = async () => {
    const { total, appointment } = await appointmentList(page);
    setDataInfo({ total, appointment });
  };

  return dataInfo;
};

export default useGetAppointments;
