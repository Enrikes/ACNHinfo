export const GetSeaCreature = async () => {
  const response = await fetch('http://localhost:4000/seaCreature');
  return await response.json();
};
