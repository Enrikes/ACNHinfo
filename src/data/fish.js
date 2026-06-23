export const GetFish = async () => {
  const response = await fetch('http://localhost:4000/fish');
  return await response.json();
};
