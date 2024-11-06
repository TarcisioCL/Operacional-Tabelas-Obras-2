const tabelaExecucao = document.getElementById('tabela_execucao');
const tabelaConfirmadas = document.getElementById('tabela_confirmadas');

document.getElementById('execucao').addEventListener('click', function () {
  tabelaExecucao.style.display = "block";
  tabelaConfirmadas.style.display = "none"; 
});

document.getElementById('confirmadas').addEventListener('click', function () {
  tabelaConfirmadas.style.display = "block";
  tabelaExecucao.style.display = "none"; 
});

const headerBtn = document.getElementById('header_btn');
const formBtn = document.getElementById('header_formbtn');

headerBtn.addEventListener('click', () => {
  document.body.classList.toggle('body-sidebar-visible');
  updateLayout();
});

formBtn.addEventListener('click', () => {
  document.body.classList.toggle('body-form-visible');
  updateLayout();
});

function updateLayout() {
  const sidebarVisible = document.body.classList.contains('body-sidebar-visible');
  const formVisible = document.body.classList.contains('body-form-visible');

  if (sidebarVisible && formVisible) {
    document.body.classList.add('body-both-visible');
  } else {
    document.body.classList.remove('body-both-visible');
  }
}
