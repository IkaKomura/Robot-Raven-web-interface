document.addEventListener("DOMContentLoaded", function() {
  const SLIDER_COUNT = 16; // Number of sliders to create
  const animPRESET_COUNT = 5; // Number of animation presets

  const sliderGrid = document.createElement("div"); // Create a container for the sliders
  sliderGrid.className = "slider-grid"; // Add a class name for styling

  // Create the slider elements

  for (let i = 0; i < SLIDER_COUNT; i++) { // Loop to create the sliders
    const id = i + 1; // ID for each slider
    const sliderContainer = document.createElement("div"); // Container for each slider
    const sliderLabel = document.createElement("label"); // Label for each slider
    sliderLabel.innerHTML = `Slider ${id}:`; // Set the label text
    const slider = document.createElement("input"); // Create the slider input element
    slider.type = "range"; // Set the input type to range
    slider.min = 0; // Set the minimum value for the slider
    slider.max = 100; // Set the maximum value for the slider
    slider.value = 0; // Set the default value for the slider
    slider.className = "slider"; // Add a class name for styling
    slider.id = `slider-${id}`; // Set the ID for the slider
    const sliderValue = document.createElement("div"); // Create a container for the slider value
    sliderValue.innerHTML = 0; // Set the default slider value
    sliderValue.className = "slider-value"; // Add a class name for styling
    sliderValue.id = `slider-${id}-value`; // Set the ID for the slider value container
    sliderContainer.appendChild(sliderLabel); // Add the label to the slider container
    sliderContainer.appendChild(slider); // Add the slider to the slider container
    sliderContainer.appendChild(sliderValue); // Add the slider value container to the slider container
    sliderGrid.appendChild(sliderContainer); // Add the slider container to the slider grid container
    slider.addEventListener("input", function() { // Add event listener for when the slider value changes
      document.querySelector(`#slider-${id}-value`).innerHTML = this.value; // Update the slider value
      const sliderValueEl = document.querySelector(`#slider-${id}-value`);
      sliderValueEl.innerHTML = this.value;
      console.log(sliderLabel.innerHTML + " " + sliderValueEl.innerHTML); // Log the changed value to the console
    });
  }
// Create a reset button
const resetButton = document.createElement("button");
resetButton.innerHTML = "Reset All Sliders";
resetButton.className = "reset-button";

// Add the reset button to the slider grid container
sliderGrid.appendChild(resetButton);

// Add an event listener for the reset button click
resetButton.addEventListener("click", function() {
  // Loop through all the sliders
  for (let i = 0; i < SLIDER_COUNT; i++) {
    const id = i + 1;
    const slider = document.querySelector(`#slider-${id}`);
    slider.value = 0; // Set the slider value to 0
    document.querySelector(`#slider-${id}-value`).innerHTML = 0; // Update the slider value container
  }
});

  document.querySelector("#sliders").appendChild(sliderGrid);


  // Create the animation preset elements
  for (let i = 0; i < animPRESET_COUNT; i++) {
    const id = i + 1;
  
    // Create the container for each animation button
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
  
    // Create the frame for each animation
    const animationFrame = document.createElement("div");
    animationFrame.className = "animation-frame";
  
    // Create the placeholder for each animation
    const animation = document.createElement("div");
    animation.className = "lottie-animation";
    animation.innerHTML = `Placeholder for Animation ${id}`;
    animationFrame.appendChild(animation);
  
    // Insert Lottie code here to load and play the animation in the animation element
  
    // Create the button for each animation
    const button = document.createElement("button");
    button.innerHTML = `Animation ${id}`;
    button.className = "animation-button";
    button.id = `animation-button-${id}`;
    buttonContainer.appendChild(animationFrame);
    buttonContainer.appendChild(button);
  
    // Add the button container to the main #animations container
    document.querySelector("#animations").appendChild(buttonContainer);
  
    // Add a click event listener to each button to activate the corresponding animation
    button.addEventListener("click", function() {
      // Remove the active state from all buttons
      const buttons = document.querySelectorAll(".animation-button");
      buttons.forEach(function(b) {
        b.classList.remove("active");
      });
  
      // Add the active state to the clicked button
      button.classList.add("active");
      console.log(`Animation ${id} clicked`);
    });
  }
  
  
  
  
});
