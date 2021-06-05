const body = document.querySelector("body");
const chineseAvg = document.querySelector("#chinese");
const scienceInfoAvg = document.querySelector("#science-info-comm");
const lingContrAvg = document.querySelector("#ling-contrastive");
const renforcementAvg = document.querySelector("#renforcement");
const pratiqueCommAvg = document.querySelector("#pratique-comm");
const tradGenerAvg = document.querySelector("#traduction-Génér");
const methodoRecherTradAvg = document.querySelector("#methodo-recher-trad");
const methodoRecherUnivAvg = document.querySelector("#methodo-recher-Univers");
const outilRecherObservAvg = document.querySelector("#outil-rech");
const etiqueDeonAvg = document.querySelector("#etique-deon");
const calculateButton = document.querySelector(".calculate");

const showSnackBar = () => {
  let hasTime = null;
  const toaster = document.querySelector("#toast");
  toaster.classList.add("active");
  if (hasTime != null) {
    clearTimeout(hasTime);
  }
  /* After two seconds, close the Toast (slide-down) */
  hasTime = setTimeout(function () {
    toaster.classList.remove("active");
  }, 2000);
};

const calculate = () => {
  const sumCoefficients = 17;

  if (
    parseFloat(chineseAvg.value) <= 20 &&
    parseFloat(scienceInfoAvg.value) <= 20 &&
    parseFloat(lingContrAvg.value) <= 20 &&
    parseFloat(renforcementAvg.value) <= 20 &&
    parseFloat(pratiqueCommAvg.value) <= 20 &&
    parseFloat(tradGenerAvg.value) <= 20 &&
    parseFloat(methodoRecherTradAvg.value) <= 20 &&
    parseFloat(methodoRecherUnivAvg.value) <= 20 &&
    parseFloat(outilRecherObservAvg.value) <= 20 &&
    parseFloat(etiqueDeonAvg.value) <= 20
  ) {
    // Discovery
    const chinAvg = parseFloat(chineseAvg.value);
    const sciInfoAvg = parseFloat(scienceInfoAvg.value);

    // Fundamental
    const lingContAvg = parseFloat(lingContrAvg.value) * 3;
    const renforceAvg = parseFloat(renforcementAvg.value) * 3;
    const pratiComAvg = parseFloat(pratiqueCommAvg.value);
    const tradGenAvg = parseFloat(tradGenerAvg.value) * 2;

    // Methodology
    const methRechTradAvg = parseFloat(methodoRecherTradAvg.value);
    const methRechUnivAvg = parseFloat(methodoRecherUnivAvg.value) * 2;
    const outilRechObsAvg = parseFloat(outilRecherObservAvg.value) * 2;

    // Transversal
    const etiqueDeon = parseFloat(etiqueDeonAvg.value);

    // average formula
    const averageSum =
      chinAvg +
      sciInfoAvg +
      lingContAvg +
      renforceAvg +
      pratiComAvg +
      tradGenAvg +
      methRechTradAvg +
      methRechUnivAvg +
      outilRechObsAvg +
      etiqueDeon;

    const result = averageSum / sumCoefficients;

    // save result to localstorage
    localStorage.setItem("result", result.toString().slice(0, 5));

    // new tab result
    window.open("./result.html");
  } else {
    // snackbar for over limit error
    showSnackBar();
  }
};

calculateButton.addEventListener("click", calculate);
