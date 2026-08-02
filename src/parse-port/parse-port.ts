export const parsePort = (value: string | number): number => {
  const port = typeof value === "number" ? value : Number.parseInt(value, 10);

  if (!Number.isInteger(port) || port < 0 || port > 65_535) {
    throw new RangeError(`Invalid port: ${JSON.stringify(value)}`);
  }

  return port;
};
