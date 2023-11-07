fetch(
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Sassari?unitGroup=us&key=XP9ELTAGMZ96XE32S5JAPSHWU&include=days&elements=datetime,moonphase,sunrise,sunset,moonrise,moonset"
)
  .then((response) => response.json())
  .then((data) => {
    document.querySelector(
      "#phaseValue"
    ).textContent = `Moon phase value: ${data.days[0].moonphase}`;
    function moonPhase() {
      const phaseValue = data.days[0].moonphase;
      const phase = document.querySelector("#phase");
      const img = document.querySelector("img");
      if (phaseValue === 0) {
        phase.innerText = "Moon Phase: new moon";
        img.src = "./img/newmoon.png";
      } else if ((phaseValue > 0) & (phaseValue < 0.26)) {
        phase.innerText = "Moon Phase: waxing crescent";
        img.src = "./img/waxing-crescent-moon.png";
      } else if (phaseValue === 0.25) {
        phase.innerText = "Moon Phase: first quarter";
        img.src = "./img/first.png";
      } else if ((phaseValue > 0.25) & (phaseValue < 0.5)) {
        phase.innerText = "Moon Phase: waxing gibbous";
        img.src = "./img/waxing-gibbous-moon.png";
      } else if (phaseValue === 0.5) {
        phase.innerText = "Moon Phase: full moon";
        img.src = "./img/full-moon.png";
      } else if ((phaseValue > 0.5) & (phaseValue < 0.75)) {
        phase.innerText = "Moon Phase: waning gibbous";
        img.src = "./img/waning-gibbous-moon.png";
      } else if (phaseValue === 0.75) {
        phase.textContent = "Moon Phase: last quarter";
        img.src = "./img/lastquarter.png";
      } else if (phaseValue > 0.75) {
        phase.innerText = "Moon Phase: waning crescent";
        img.src = "./img/waning-crescent-moon.png";
      }
    }
    moonPhase();
  });
