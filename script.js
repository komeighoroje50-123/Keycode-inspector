
const keyVal = document.getElementById('keyVal');
const codeVal = document.getElementById('codeVal');
const physVal = document.getElementById('physVal');
const typingInput = document.getElementById('typingInput');
const historyEl = document.getElementById('history');
const clearBtn = document.getElementById('clearBtn');

// Add key to history
function addHistory(key, code, phys){
  const d = document.createElement('div');
  d.className = 'hist-item';
  d.textContent = `${key} | KeyCode: ${code} | Code: ${phys}`;
  historyEl.prepend(d);
  while(historyEl.children.length > 50) historyEl.removeChild(historyEl.lastChild);
}

// Physical keyboard
typingInput.addEventListener('keydown', (e) => {
  keyVal.textContent = e.key;
  codeVal.textContent = e.keyCode ?? e.which ?? '—';
  physVal.textContent = e.code ?? '—';
  addHistory(e.key, codeVal.textContent, physVal.textContent);
});

// Soft keyboard
typingInput.addEventListener('input', (e) => {
  const val = e.target.value;
  if(val.length > 0){
    const lastChar = val.slice(-1);
    keyVal.textContent = lastChar;
    codeVal.textContent = lastChar.charCodeAt(0); // Unicode code
    physVal.textContent = 'soft-key';
    addHistory(lastChar, codeVal.textContent, physVal.textContent);
  }
});

// Clear
clearBtn.addEventListener('click', () => {
  keyVal.textContent = '—';
  codeVal.textContent = '—';
  physVal.textContent = '—';
  historyEl.innerHTML = '';
  typingInput.value = '';
  typingInput.focus();
});

