export const model = {
  validatePhone(phone) {
    let regex = /^\+\d+(\s\d+)*$/;
    return regex.test(phone);
  },

  sortContacts(a, b) {
    return a.name.localeCompare(b.name);
  },
};
