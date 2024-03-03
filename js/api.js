export const getUsersData = async () => {
  try {
    const getUsers = await fetch("https://jsonplaceholder.typicode.com/users");
    return await getUsers.json();
  } catch (error) {
    console.error(error);
  }
};
