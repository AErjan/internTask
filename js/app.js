import { getUsersData } from "./api.js";
import { userItemMarkup } from "./userItemMarkup.js";

const store = {
  users: [],
};

const fetchData = async () => {
  const users = await getUsersData();
  store.users = users ? [...users] : [];
};

const userItemsRender = (users) => {
  if (!users.length) {
    return `<div class="data-error">Нет такого Пользователя</div>`;
  }

  const userItemList = users.map(({ name, email, phone }) =>
    userItemMarkup(name, email, phone)
  );

  return userItemList.join("");
};

const app = async () => {
  await fetchData();

  userListElement.innerHTML = store.users.length
    ? userItemsRender(store.users)
    : `<div class="data-error">Серверная ошибка</div>`;
};

const userListElement = document.querySelector(".users__list");
const refreshElement = document.querySelector(".refresh");
const sortElement = document.querySelector(".sort");
const filterFieldElemnet = document.querySelector(".filter-field");

refreshElement.addEventListener("click", () => {
  location.reload();
});

sortElement.addEventListener("click", () => {
  const { users } = store;

  if (!users.length) {
    return;
  }

  const filteredUsersList = users.filter((user) =>
    user.name.toLowerCase().includes(filterFieldElemnet.value.toLowerCase())
  );

  filteredUsersList.sort((user, user2) => user.name.localeCompare(user2.name));

  userListElement.innerHTML = userItemsRender(filteredUsersList);
});

filterFieldElemnet.addEventListener("input", (e) => {
  const { users } = store;

  if (!users.length) {
    return;
  }

  const filteredUsersList = store.users.filter((user) =>
    user.name.toLowerCase().includes(e.target.value.toLowerCase())
  );

  userListElement.innerHTML = userItemsRender(filteredUsersList);
});

app();
