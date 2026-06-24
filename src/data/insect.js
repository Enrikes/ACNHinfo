export const GetInsect = async () => {
  const response = await fetch('http://localhost:4000/insect');
  return await response.json();
};
