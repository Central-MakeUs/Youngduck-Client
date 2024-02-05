const wait = (milliseconds: number) =>
  new Promise(resolve => setTimeout(resolve, milliseconds));

export default wait;
