const body = document.querySelector("body")
const chineseAvg = document.querySelector("#chinese")
const scienceInfoAvg = document.querySelector("#science-info-comm")
const lingContrAvg = document.querySelector("#ling-contrastive")
const renforcementAvg  = document.querySelector("#renforcement")
const pratiqueCommAvg  = document.querySelector("#pratique-comm")
const tradGenerAvg = document.querySelector("#traduction-Génér")
const methodoRecherTradAvg = document.querySelector("#methodo-recher-trad")
const methodoRecherUnivAvg = document.querySelector("#methodo-recher-Univers")
const outilRecherObservAvg = document.querySelector("#outil-rech")
const etiqueDeonAvg = document.querySelector("#etique-deon")
const calculateButton = document.querySelector(".calculate")


const calculate = () => {
  const sumCoefficients = 17;

  // Discovery
  const chinAvg = parseFloat(chineseAvg.value)
  const sciInfoAvg = parseFloat(scienceInfoAvg.value)

  // Fundamental
  const lingContAvg = parseFloat(lingContrAvg.value) * 3
  const renforceAvg = parseFloat(renforcementAvg.value) * 3
  const pratiComAvg = parseFloat(pratiqueCommAvg.value)
  const tradGenAvg = parseFloat(tradGenerAvg.value) * 2

  // Methodology
  const methRechTradAvg = parseFloat(methodoRecherTradAvg.value)
  const methRechUnivAvg = parseFloat(methodoRecherUnivAvg.value) * 2
  const outilRechObsAvg = parseFloat(outilRecherObservAvg.value) * 2

  // Transversal
  const etiqueDeon = parseFloat(etiqueDeonAvg.value)

  // average formula
  const averageSum = chinAvg + sciInfoAvg + lingContAvg + renforceAvg + pratiComAvg + tradGenAvg + methRechTradAvg + methRechUnivAvg + outilRechObsAvg + etiqueDeon 
  const result = averageSum / sumCoefficients

  // save result to localstorage
  localStorage.setItem("result", result.toString().slice(0, 5))
  
  // new tab result
  window.open("./result.html")
}

calculateButton.addEventListener("click", calculate)