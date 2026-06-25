export const GetVillager = async () => {
  const response = await fetch('http://localhost:4000/villager');
  return await response.json();
};
