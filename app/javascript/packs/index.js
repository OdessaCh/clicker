let check = false;
window.scoreUp = function () {
  let score = this.document.getElementById('points');
  score.innerText++;
  if (!check) {
    scoreEnnemi();
  }

}
window.scoreEnnemi = function () {
  check = true;
  let score = this.document.getElementById('pointsEnnemi');
  this.setInterval(function () { score.innerText++; }, 500);
}
