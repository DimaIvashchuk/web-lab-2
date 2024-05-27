import { controller } from "./controller.js";
import { model } from "./model.js";

export const view = {
  addContact(id, name, surname, phone) {
    const tbody = document.querySelector(".table-main tbody");
    const newRow = document.createElement("tr");
    newRow.classList.add("table__row");
    newRow.setAttribute("data-id", id);
    newRow.innerHTML = `
      <td class="table__row__name">${name}</td>
      <td class="table__row__surname">${surname}</td>
      <td class="table__row__number">${phone}</td>
      <td class="table__buttons">
        <button class="btn btn-danger table__button button-delete">Delete</button>
        <button class="btn btn-warning table__button button-edit">Edit</button>
      </td>
    `;
    tbody.appendChild(newRow);
  },

  updateContact(id, name, surname, phone) {
    const row = document.querySelector(`.table__row[data-id="${id}"]`);
    if (!row) {
      console.error(`Row with data-id ${id} not found`);
      return;
    }
    row.querySelector(".table__row__name").innerText = name;
    row.querySelector(".table__row__surname").innerText = surname;
    row.querySelector(".table__row__number").innerText = phone;
  },

  sortTable(rows, sortKey) {
    rows.sort((a, b) => {
      const nameA = a
        .querySelector(`.table__row__${sortKey}`)
        .innerText.toLowerCase();
      const nameB = b
        .querySelector(`.table__row__${sortKey}`)
        .innerText.toLowerCase();
      return nameA.localeCompare(nameB);
    });
    const tbody = document.querySelector(".table-main tbody");
    rows.forEach((row) => tbody.appendChild(row));
  },

  closeAddModal() {
    controller.addModal.classList.remove("add-contact_active");
  },

  openAddModal() {
    controller.addModal.classList.add("add-contact_active");
  },

  clearAddModal() {
    controller.nameAddModal.value = "";
    controller.surnameAddModal.value = "";
    controller.phoneAddModal.value = "";
    controller.errorMessage.innerHTML = "";
  },

  closeEditModal() {
    controller.editModal.classList.remove("edit-contact_active");
  },

  openEditModal() {
    controller.editModal.classList.add("edit-contact_active");
  },

  clearEditModal() {
    controller.nameEditModal.value = "";
    controller.surnameEditModal.value = "";
    controller.phoneEditModal.value = "";
    controller.editErrorMessage.innerHTML = "";
  },

  editContact(name, surname, phone) {
    if (name != "") {
      document.querySelectorAll(".table__row__name").innerHTML = name;
    }
    if (surname != "") {
      document.querySelectorAll(".table__row__surname").innerHTML = surname;
    }
    if (phone != "") {
      document.querySelectorAll(".table__row__phone").innerHTML = phone;
    }
  },

  sortTable(rows, sortKey) {
    rows.sort((a, b) => {
      const nameA = a
        .querySelector(".table__row__name")
        .textContent.trim()
        .toLowerCase();
      const nameB = b
        .querySelector(".table__row__name")
        .textContent.trim()
        .toLowerCase();

      return nameA.localeCompare(nameB);
    });

    controller.contactsTable.querySelector("tbody").innerHTML = "";

    rows.forEach((row) => {
      controller.contactsTable.querySelector("tbody").appendChild(row);
    });
  },
};
