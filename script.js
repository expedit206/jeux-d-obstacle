a = document.querySelector(".a");
marquee = document.querySelectorAll(".marquee");
sols = document.querySelectorAll(".sol");
velo = document.querySelector(".velo");
tronc = document.querySelector(".tronc");
pos = 63;
postronc = 85;
start = document.querySelector(".start");
gold_one = document.querySelector(".gold_one");
gold_two = document.querySelector(".gold_two");
number_score = document.querySelector(".number_score");
bip_saut = document.querySelector(".bip_saut");
console.log(bip_saut);
// bip_saut = new Audio(bipdefaite.mp3);
// bip_saut.play();
pos_gold_one = 100;
pos_gold_two = 120;
number_score.textContent = 0;
/**chargement */
window.addEventListener("load", () => {
  start.style.left = "30vw";
  start.style.top = "25vh";

  velo.style.top = "60vh";
  tronc.style.top = "71vh";
});
/**fin chargement */

/**gold */
/***gold_one */
start.addEventListener("click", () => {
  intervalle_gold_one = setInterval(() => {
    if (pos_gold_one < -7) {
      gold_one.style.visibility = "visible";
      pos_gold_one = Math.random() * 50 + 200 - 50;
    }

    if (pos_gold_one <= 8 && pos_gold_one > 7 && pos > 50) {
      bip_saut.play();

      number_score.textContent = number_score.textContent * 1 + 1;
      gold_one.style.visibility = "hidden";
    }
    gold_one.style.left = pos_gold_one + "vw";
    pos_gold_one--;
  }, 30);
});
/***gold_two */
start.addEventListener("click", () => {
  intervalle_gold_two = setInterval(() => {
    if (pos_gold_two < -7) {
      gold_two.style.visibility = "visible";
      pos_gold_two = Math.random() * 50 + 800 - 50;
    }

    if (pos_gold_two <= 8 && pos_gold_two > 7 && pos > 50) {
      bip_saut.play();

      number_score.textContent = number_score.textContent * 1 + 1;
      gold_two.style.visibility = "hidden";
    }
    gold_two.style.left = pos_gold_two + "vw";
    pos_gold_two--;
  }, 15);
});

/**fin gold */
/****tronc */
start.addEventListener("click", () => {
  start.style.visibility = "hidden";
  start.style.transition = "none";
  tronc.style.transition = "none";
  velo.style.transition = "none";
  intervalle_tronc = setInterval(() => {
    tronc.style.left = postronc + "vw";
    postronc--;
    if (postronc == -20) {
      postronc = 99;
      tronc.style.left = postronc + "vw";
    }

    /***perdu ou gagner */
    if (postronc == 0) {
      if (pos >= 48) {
        bip_saut.play();

        location.reload("index.html");
        alert("GAMEOVER");
      }
    }
  }, 20);
});
/**finc tronc */

/**velo */
start.addEventListener("click", () => {
  start.style.visibility = "hidden";

  window.addEventListener("keydown", (e) => {
    bip_saut.play();

    let verif;
    a = 0;
    if (e.keyCode == 38) {
      if (pos == 63) {
        intervalle_velo = setInterval(() => {
          if (pos >= 63 || pos < 42) {
            verif = true;
          } else if (pos == 42) {
            verif = false;
          }

          /****** */
          if (verif == false) {
            velo.style.top = pos + "vh";
            pos++;
          }
          /****** */

          if (verif == true) {
            pos--;
            velo.style.top = pos + "vh";
          }
          if (a >= 40) {
            clearInterval(intervalle_velo);
            pos = 63;
          }
          a++;
        }, 23);
      } else {
        //  alert('non')
        velo.style.top = 63 + "vh";
        pos = 63;
        clearInterval(id);
      }
    }
  });
});
/**fin velo */
start.addEventListener("click", () => {
  start.style.visibility = "hidden";

  posZero = 0;
  posOne = 0;
  posTwo = 0;
  posThree = 0;
  posFour = 0;
  posFive = 0;
  posSix = 0;
  posSeven = 0;
  intervalle_sol = setInterval(() => {
    // zero
    {
      if (posZero < -5) {
        posZero = 100;
        // sols[0].style.visibility="hidden"
      }
      sols[0].style.left = posZero + "vw";
      posZero = posZero - 0.5;
    }

    //one
    {
      if (posOne < -20) {
        posOne = 85.2;
      }
      sols[1].style.left = posOne + "vw";
      posOne = posOne - 0.5;
    }

    // two
    {
      if (posTwo < -30) {
        posTwo = 75;
      }
      sols[2].style.left = posTwo + "vw";
      posTwo = posTwo - 0.5;
    }
    //three
    {
      if (posThree < -43) {
        posThree = 62;
      }
      sols[3].style.left = posThree + "vw";
      posThree = posThree - 0.5;
    }

    //four
    {
      if (posFour < -58) {
        posFour = 47;
      }
      sols[4].style.left = posFour + "vw";
      posFour = posFour - 0.5;
    }

    //five
    {
      if (posFive < -69) {
        posFive = 36;
      }
      sols[5].style.left = posFive + "vw";
      posFive = posFive - 0.5;
    }

    //six
    {
      if (posSix < -87) {
        posSix = 18;
      }
      sols[6].style.left = posSix + "vw";
      posSix = posSix - 0.5;
    }
    //         // seven

    {
      if (posSeven < -93) {
        posSeven = 12;
      }
      sols[7].style.left = posSeven + "vw";
      posSeven = posSeven - 0.5;
    }
  }, 18);
});
