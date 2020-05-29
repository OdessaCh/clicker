let check = false;
let scoreJoueur;
let scoreAdverse;

window.scoreUp = function () {
    scoreJoueur = this.document.getElementById('points');
    scoreAdverse = this.document.getElementById('pointsEnnemi');
    scoreJoueur.innerText++;

    if (scoreJoueur.innerText == 25) {
        bonusPalier();
    }
    if (scoreJoueur.innerText >= 1030) {
        augmentationScoreJoueur(100);
    }

    if (!check) {
        lancerScoreEnnemi();
    }
}

window.lancerScoreEnnemi = function () {
    check = true;
    this.setInterval(function () {
        scoreAdverse.innerText++;
        if (scoreAdverse.innerText == 16) {
            bonusPalierAdverse();
        }
        if (scoreAdverse.innerText >= 820) {
            augmenterScoreEnnemi(74);
        }

    }, 500);
}

window.augmenterScoreEnnemi = function (augmentation) {
    scoreAdverse = this.document.getElementById('pointsEnnemi');
    let stockInt = this.parseInt(scoreAdverse.innerText, 10);
    stockInt += augmentation;
    scoreAdverse.innerText = stockInt;

}
window.bonusPalier = function () {
    scoreJoueur = this.document.getElementById('points');
    scoreJoueur.innerText = 1025;
}

window.bonusPalierAdverse = function () {
    scoreAdverse = this.document.getElementById('pointsEnnemi');
    scoreAdverse.innerText = 816;
}

window.augmentationScoreJoueur = function (augmentation) {
    scoreJoueur = this.document.getElementById('points');
    let stockInt = this.parseInt(scoreJoueur.innerText, 10);
    stockInt += augmentation;
    scoreJoueur.innerText = stockInt;
}