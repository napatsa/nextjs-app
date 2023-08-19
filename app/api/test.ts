export const getTest = async (testId: any) => {
  const res = await fetch(`https://random-data-api.com/api/bank/random_bank`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const data = await res.json();
  return data;
};
