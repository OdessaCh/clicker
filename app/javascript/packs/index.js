let check = false;
let scoreJoueur;
let scoreAdverse;
let compteur = 0;
let pointParSeconde = 1;
let pointsEnnemiParSeconde = 1;
let meilleurScore;
let faibleScore;

window.scoreUp = function () {
    scoreAdverse = this.document.getElementById('pointsEnnemi');
    scoreJoueur = this.document.getElementById('points');
    augmentationScoreJoueur(1);
    compteur++;

    if (compteur == 15) {
        augmentationScoreJoueur(1025);
    }
    if (this.parseInt(scoreJoueur.innerText, 10) > this.parseInt(scoreAdverse.innerText, 10)) {
        meilleurJoueur(scoreJoueur, scoreAdverse);
    }
    if (compteur === 50) {
        pointParSeconde = 53;
    }
    if (scoreJoueur.innerText >= 1030) {
        augmentationScoreJoueur(100);
    }
    if (!check) {
        lancerScore();
    }
}

window.lancerScore = function () {
    check = true;
    this.setInterval(function () {
        augmentationScoreJoueur(pointParSeconde);
        scoreAdverse.innerText++;
        if (scoreAdverse.innerText == 10) {
            augmenterScoreEnnemi(806);
        }

        if (parseInt(scoreAdverse.innerText, 10) > parseInt(scoreJoueur.innerText, 10)) {
            meilleurJoueur(scoreAdverse, scoreJoueur);
        }
        if (scoreAdverse.innerText >= 820) {
            augmenterScoreEnnemi(84);
        }

    }, 500);
}

window.augmenterScoreEnnemi = function (augmentation) {
    let stockInt = this.parseInt(scoreAdverse.innerText, 10);
    stockInt += augmentation;
    scoreAdverse.innerText = stockInt;
}

window.augmentationScoreJoueur = function (augmentation) {
    let stockInt = this.parseInt(scoreJoueur.innerText, 10);
    stockInt += augmentation;
    scoreJoueur.innerText = stockInt;
}

window.meilleurJoueur = function (plusHautScore, plusBasScore) {
    meilleurScore = plusHautScore;
    meilleurScore.style.fontSize = '1.4em';
    faibleScore = plusBasScore;
    plusBasScore.style.fontSize = '1em';
}

