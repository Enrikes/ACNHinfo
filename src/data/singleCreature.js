export const GetSingleCreature = async (name) => {
  const response = await fetch(
    `http://localhost:4000/singleCreature?name=${name}`,
  );
  return await response.json();
};
