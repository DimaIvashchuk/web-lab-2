class Contact {
  constructor(number) {
    this.number =
      +document.querySelectorAll(".table__row__name")[number].innerHTML;
    this.name = document.querySelectorAll(".table__row__surname")[
      number
    ].innerHTML;
    this.phone = document.querySelectorAll(".table__row__number")[
      number
    ].innerHTML;
  }
}

export const controller = {
  // contacts
  contacts: undefined,
  currentContacts: undefined,
  contactsArray: [],
  contactsTable: undefined,

  // add
  addContactBtn: undefined,
  addContactForm: undefined,
  addModal: undefined,
  exitAddModal: undefined,
  nameAddModal: undefined,
  phoneAddModal: undefined,
  buttonAddModal: undefined,
  errorMessage: undefined,

  // delete
  deleteContactBtns: undefined,

  // edit
  editContactBtns: undefined,
  editContactForm: undefined,
  editModal: undefined,
  exitEditModal: undefined,
  nameEditModal: undefined,
  surnameEditModal: undefined,
  phoneEditModal: undefined,
  buttonEditModal: undefined,
  editErrorMessage: undefined,

  // sort
  sortContactBtn: undefined,

  init() {
    //contacts
    this.contactsTable = document.querySelector(".table-main");

    // add
    this.addContactBtn = document.querySelector(".button-add");
    this.addContactForm = document.querySelector(".add-contact__form");
    this.addModal = document.querySelector(".add-contact");
    this.exitAddModal = document.querySelector(".add-contact__close");
    this.nameAddModal = document.querySelector(".add-contact__name");
    this.surnameAddModal = document.querySelector(".add-contact__surname");
    this.phoneAddModal = document.querySelector(".add-contact__phone");
    this.buttonAddModal = document.querySelector(".add-contact__button");
    this.errorMessage = document.querySelector("#addErrorMessage");

    // delete
    this.deleteContactBtns = document.querySelectorAll(".button-delete");

    // edit
    this.editContactBtns = document.querySelectorAll(".button-edit");
    this.editContactForm = document.querySelector(".edit-contact__form");
    this.editModal = document.querySelector(".edit-contact");
    this.exitEditModal = document.querySelector(".edit-contact__close");
    this.editContactId = this.editModal.querySelector("#editContactId");
    this.nameEditModal = document.querySelector(".edit-contact__name");
    this.surnameEditModal = document.querySelector(".edit-contact__surname");
    this.phoneEditModal = document.querySelector(".edit-contact__phone");
    this.buttonEditModal = document.querySelector(".edit-contact__button");
    this.editErrorMessage = document.querySelector("#editErrorMessage");

    // sort
    this.sortContactBtn = document.querySelector(".button-sort");
  },
};
