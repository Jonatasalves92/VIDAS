// Máscara para CPF: 000.000.000-00
function maskCPF(value) {
  return value
    .replace(/\D/g, '')
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

// Máscara para telefone: (00) 00000-0000
function maskTelefone(value) {
  return value
    .replace(/\D/g, '')
    .slice(0, 11)
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4,5})(\d{4})$/, '$1-$2');
}

// Máscara para CEP: 00000-000
function maskCEP(value) {
  return value
    .replace(/\D/g, '')
    .slice(0, 8)
    .replace(/(\d{5})(\d{1,3})$/, '$1-$2');
}

function attachMasks() {
  const cpf = document.getElementById('cpf');
  const tel = document.getElementById('telefone');
  const cep = document.getElementById('cep');

  if (cpf) cpf.addEventListener('input', (e) => e.target.value = maskCPF(e.target.value));
  if (tel) tel.addEventListener('input', (e) => e.target.value = maskTelefone(e.target.value));
  if (cep) cep.addEventListener('input', (e) => e.target.value = maskCEP(e.target.value));
}

// Feedback de validação nativa do HTML5
function enhanceValidation() {
  document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        const firstInvalid = form.querySelector(':invalid');
        if (firstInvalid) firstInvalid.focus();
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  attachMasks();
  enhanceValidation();
});
