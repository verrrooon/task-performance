const contacts = document.getElementsByClassName('contacts')[0];
const stickyHeader = document.getElementsByClassName('stickyHeader')[0];

function throttle(func, timeout) {
  let timer = null;

  return function perform(...args) {
    if (timer) return;

    timer = setTimeout(() => {
      func(...args);
      clearTimeout(timer);
      timer = null;
    }, timeout);
  };
}

function addContacts() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 50000; i++) {
    const child = document.createElement('div');
    child.textContent = i;
    child.classList.add('contact');
    fragment.appendChild(child);
  }
  contacts.appendChild(fragment);
}

addContacts();

contacts.addEventListener(
  'scroll',
  throttle((e) => {
    const contact = contacts.getElementsByClassName('contact')[0];
    console.log(contacts.scrollTop, contact.offsetTop);
    stickyHeader.textContent = Math.floor(contacts.scrollTop / contact.offsetTop);
  }, 250),
);