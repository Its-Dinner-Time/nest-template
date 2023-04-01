export interface IEnvironmentConfigs {
  port: number;
}

export default (): IEnvironmentConfigs => {
  return {
    port: parseInt(process.env.PORT, 10) || 3000,
  };
};
