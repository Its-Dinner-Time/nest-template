export interface IEnvironments {
  port: number;
}

export default (): IEnvironments => {
  return {
    port: parseInt(process.env.PORT, 10) || 3000,
  };
};
