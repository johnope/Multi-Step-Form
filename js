const form = document.getElementById("myForm");
const steps = form.querySelectorAll(".step");

let currentStep = 0;

function showStep(stepIndex) {
    steps.forEach(step => {
        step.style.display = "none";
    });
    steps[stepIndex].style.display = "block";
}

document.querySelectorAll(".next-step").forEach(button => {
    button.addEventListener("click", function(e) {
        e.preventDefault(); // Prevent form submission
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    });
});

document.querySelectorAll(".prev-step").forEach(button => {
    button.addEventListener("click", function(e) {
        e.preventDefault(); // Prevent form submission
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });
});
