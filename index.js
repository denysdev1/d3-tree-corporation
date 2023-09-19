const modal = document.querySelector('.modal');

M.Modal.init(modal);

const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const parentInput = document.querySelector('#parent');
const departmentInput = document.querySelector('#department');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (nameInput.value && departmentInput.value) {
    if (data.length === 1 && !parentInput.value) return;

    db.collection('employees').add({
      name: nameInput.value,
      parent: parentInput.value,
      department: departmentInput.value,
    });

    const instance = M.Modal.getInstance(modal);
    instance.close();

    form.reset();
  }
});
