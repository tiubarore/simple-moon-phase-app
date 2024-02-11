fetch(
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Sassari?unitGroup=us&key=XP9ELTAGMZ96XE32S5JAPSHWU&include=days&elements=datetime,moonphase,sunrise,sunset,moonrise,moonset"
)
  .then((response) => response.json())
  .then((data) => {
    document.querySelector(
      "#phaseValue"
    ).textContent = `Moon Phase value: ${data.days[0].moonphase}`;
    function moonPhase() {
      const phaseValue = data.days[0].moonphase;
      const phase = document.querySelector("#phase");
      const img = document.querySelector("img");
      const nextPhase = document.querySelector("#nextPhase");

      // Set the display based on the current moon phase
      if (phaseValue === 0) {
        phase.innerText = "Moon Phase: New Moon";
        img.src = "./img/newmoon.png";
        nextPhase.innerText =
          "Thee next Moon Phase is gonna be Waxing Crescent, in 7 days";
      } else if ((phaseValue > 0) & (phaseValue < 0.26)) {
        phase.innerText = "Moon Phase: Waxing Crescent";
        img.src = "./img/waxing-crescent-moon.png";
        nextPhase.innerText = "Thee next Moon Phase is gonna be First Quarter";
      } else if (phaseValue === 0.25) {
        phase.innerText = "Moon Phase: First Quarter";
        nextPhase.innerText =
          "Thee next Moon Phase is gonna be Waxing Gibbous, in 7 days";
        img.src = "./img/first.png";
      } else if ((phaseValue > 0.25) & (phaseValue < 0.5)) {
        phase.innerText = "Moon Phase: Waxing Gibbous";
        img.src = "./img/waxing-gibbous-moon.png";
        nextPhase.innerText = "Thee next Moon Phase is gonna be Full Moon";
      } else if (phaseValue === 0.5) {
        phase.innerText = "Moon Phase: Full Moon";
        img.src = "./img/full-moon.png";
        nextPhase.innerText =
          "Thee next Moon Phase is gonna be Waning Gibbous, in 7 days";
      } else if ((phaseValue > 0.5) & (phaseValue < 0.75)) {
        phase.innerText = "Moon Phase: Waning Gibbous";
        img.src = "./img/waning-gibbous-moon.png";
        nextPhase.innerText = "Thee next Moon Phase is gonna be Last Quarter";
      } else if (phaseValue === 0.75) {
        phase.textContent = "Moon Phase: Last Quarter";
        img.src = "./img/lastquarter.png";
        nextPhase.innerText =
          "Thee next Moon Phase is gonna be Waning Crescent, in 7 days";
      } else if (phaseValue > 0.75) {
        phase.innerText = "Moon Phase: Waning Crescent";
        img.src = "./img/waning-crescent-moon.png";
        nextPhase.innerText = "Thee next Moon Phase is gonna be New Moon";
      }
    }
    moonPhase();
  });

/*
fetch(
  "https://api.nasa.gov/planetary/apod?api_key=LPK8s3mDFBhnyKvM2WVJY6M5Ij96eHZpjPIIib3f"
).then((response) => response.json())
  .then((data) => {
    document.getElementById('photo').attributes('href') = data.url;
  };
*/

// Function to fetch NASA picture of the day
function fetchNASAImage() {
  // API endpoint
  const apiEndpoint = "https://api.nasa.gov/planetary/apod";

  // Your API key
  const apiKey = "LPK8s3mDFBhnyKvM2WVJY6M5Ij96eHZpjPIIib3f";

  // Constructing the API URL with the API key
  const apiUrl = `${apiEndpoint}?api_key=${apiKey}`;

  // Fetching data from the API
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Add event listener to the image for full-screen view
      document.getElementById("photo").addEventListener("click", function () {
        // Extracting the image URL from the response
        const imageUrl = data.url;

        // Setting the image URL as the src attribute of the img tag
        document.getElementById("photo").src = imageUrl;

        window.open(imageUrl, "_blank").focus();
      });
    })

    .catch((error) => console.error("Error fetching NASA image:", error));
}

// Call the fetchNASAImage function when the page is loaded
fetchNASAImage();
