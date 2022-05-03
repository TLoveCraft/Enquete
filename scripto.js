let sim = 0;
let nao = 0;
function Funcaosim() {
  sim = sim + 1;
  document.getElementById("sim").innerHTML = sim;
  document.getElementById("sim").style.width = sim + "35px";
}
function Funcaonao() {
  nao = nao + 1;
  document.getElementById("nao").innerHTML = nao;
  document.getElementById("nao").style.width = nao + "55px";
}
