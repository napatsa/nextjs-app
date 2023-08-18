export const getTest = async (testId: any) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const data = { data: 10 };
  return data;
};
