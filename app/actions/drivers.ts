export const CHANGE_DRIVER = "CHANGE_DRIVER";
export const GET_INITIAL_DELIVERIES = "GET_INITIAL_DELIVERIES";

export const changeDriver = (driver_id:string) => ({
  type: CHANGE_DRIVER,
  id: driver_id
});

export const getInitialDeliveries = () => ({
  type: GET_INITIAL_DELIVERIES
});
