import { controller } from "./controller.js";
import { view } from "./view.js";
import { model } from "./model.js";

window.addEventListener("DOMContentLoaded", () => {
  controller.init();

  controller.addContactBtn.addEventListener("click", () => {
    view.openAddModal();
  });

  controller.exitAddModal.addEventListener("click", () => {
    view.clearAddModal();
    view.closeAddModal();
  });

  controller.contactsTable.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("button-delete")) {
      const row = e.target.closest(".table__row");
      row.remove();
    }
  });

  controller.contactsTable.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("button-edit")) {
      const row = e.target.closest(".table__row");
      const id = row.dataset.id;
      const name = row.querySelector(".table__row__name").textContent;
      const surname = row.querySelector(".table__row__surname").textContent;
      const phone = row.querySelector(".table__row__number").textContent;

      document.getElementById("editContactId").value = id;
      document.getElementById("editContactName").value = name;
      document.getElementById("editContactSurname").value = surname;
      document.getElementById("editContactPhone").value = phone;

      view.openEditModal();
    }
  });

  controller.editContactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("editContactName").value;
    const surname = document.getElementById("editContactSurname").value;
    const phone = document.getElementById("editContactPhone").value;

    if (!model.validatePhone(phone) && phone !== "") {
      controller.editErrorMessage.innerHTML = "Некоректний формат номеру";
      return;
    }

    view.editContact(name, surname, phone);
    view.closeEditModal();
  });

  controller.addContactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = controller.nameAddModal.value;
    const surname = controller.surnameAddModal.value;
    const phone = controller.phoneAddModal.value;

    if (!name || name.length === 0) {
      controller.errorMessage.innerHTML = "Некоректний формат імені";
    } else if (surname.length === 0) {
      controller.errorMessage.innerHTML = "Некоректний формат прізвища";
    } else if (!model.validatePhone(phone)) {
      controller.errorMessage.innerHTML = "Некоректний формат номеру";
    } else {
      const contactId = Date.now().toString();
      view.addContact(contactId, name, surname, phone);
      view.clearAddModal();
      view.closeAddModal();
    }
  });

  controller.exitEditModal.addEventListener("click", () => {
    view.clearEditModal();
    view.closeEditModal();
  });

  controller.sortContactBtn.addEventListener("click", () => {
    const rows = Array.from(
      controller.contactsTable.querySelectorAll("tbody tr")
    );
    const sortKey = "firstname";

    view.sortTable(rows, sortKey);
  });
});
