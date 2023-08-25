// import { v4 as uuidV4 } from "uuid";

// console.log(uuidV4());

// const form = document.getElementById("#new-task-form") as HTMLFormElement;

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.querySelector<HTMLFormElement>("#new-task-form");
const input = document.querySelector<HTMLInputElement>("#new-task-title");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input?.value === "" || input?.value === null) return;
});
