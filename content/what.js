const words = [
  'hello',
  'einstein',
  'sleepy',
];

const modalHtml = `
  <div class="js-wwt-modal wwt-modal">
  <div class="wwt-modal-content">
    <input class="js-wwt-modal-input"></input>
  </div>
  </div>
`;

const checkHtml = `
  <div class="js-wwt-check wwt-check">
    <span class="js-wwt-check-content wwt-check-content">CHECK!</span>
  </div>
`;

function addNode(html) {
  const modalNode = document.createElement('div');
  modalNode.innerHTML = html;
  document.body.appendChild(modalNode);
}

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function hideCheck() {
  const check = document.querySelector('.js-wwt-check');
  check.classList.remove('wwt-show-check');
}

function hideModal() {
  const check = document.querySelector('.js-wwt-modal');
  check.classList.remove('wwt-show-modal');
}

function checkInput(word, input) {
  if (word === input.value) {
    hideModal();
  }
}

function showModal(word) {
  const modalInput = document.querySelector('.js-wwt-modal-input');
  modalInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      checkInput(word, modalInput);
    }
  });
  modalInput.addEventListener('change', () => {
    checkInput(word, modalInput);
  });
  const modal = document.querySelector('.js-wwt-modal');
  modal.classList.add('wwt-show-modal');
}

function showCheck(word) {
  const checkContent = document.querySelector('.js-wwt-check-content');
  checkContent.innerHTML = word;
  const check = document.querySelector('.js-wwt-check');
  check.classList.add('wwt-show-check');
}

function verify(word) {
  hideCheck();
  showModal(word);
}

function checkAttention() {
  const word = getWord();
  showCheck(word);
  setTimeout(() => verify(word), 3000);
}


function start() {
  addNode(modalHtml);
  addNode(checkHtml);
  setTimeout(() => { checkAttention(); }, 3000);
}

start();
