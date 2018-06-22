export const CHANGE_MOTORISTA = "CHANGE_MOTORISTA";
export const FIRST_LOAD_MOTORISTAS = "FIRST_LOAD_MOTORISTAS";

export const changeMotorista = (motorista_id:string) => ({
  type: CHANGE_MOTORISTA,
  id: motorista_id
});

export const firstLoadMotoristas = () => ({
  type: FIRST_LOAD_MOTORISTAS
});
