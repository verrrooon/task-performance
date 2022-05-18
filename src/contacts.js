const contacts = document.getElementsByClassName('contacts')[0];
const stickyHeader = document.getElementsByClassName('stickyHeader')[0];

function addContacts() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 50000; i++) {
    const child = document.createElement("div");
    child.textContent = i;
    child.classList.add("contact");
    fragment.appendChild(child);
  }
  contacts.appendChild(fragment);
}

addContacts();

contacts.addEventListener(
  'scroll', (e) => {
    const contact = contacts.getElementsByClassName('contact')[0];
    stickyHeader.textContent = Math.floor(contacts.scrollTop / contact.offsetTop);
  }
);