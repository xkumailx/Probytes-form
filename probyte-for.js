document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".form-step");
    const nextStepBtn = document.querySelector(".next-step");
    const prevStepBtn = document.querySelector(".prev-step");
    const form = document.getElementById("multistepForm");

    let currentStep = 0;

    // Show current step
    function showStep(step) {
        steps.forEach((stepDiv, index) => {
            stepDiv.classList.toggle("active", index === step);
        });
    }

    // Next Step
    nextStepBtn.addEventListener("click", () => {
        const inputs = steps[currentStep].querySelectorAll("input");
        let isValid = true;

        // Validate input
        inputs.forEach(input => {
            if (!input.checkValidity()) {
                isValid = false;
                input.reportValidity();
            }
        });

        if (isValid) {
            // Fill review section
            document.getElementById("reviewName").textContent = document.getElementById("name").value;
            document.getElementById("reviewEmail").textContent = document.getElementById("email").value;
            document.getElementById("reviewPhone").textContent = document.getElementById("phone").value;
            document.getElementById("reviewLocation").textContent = document.getElementById("location").value;
            document.getElementById("reviewAge").textContent = document.getElementById("age").value || "N/A";

            currentStep++;
            showStep(currentStep);
        }
    });

    // Previous Step
    prevStepBtn?.addEventListener("click", () => {
        currentStep--;
        showStep(currentStep);
    });

    // Form Submission
    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("Form submitted successfully!");
        form.reset();
        currentStep = 0;
        showStep(currentStep);
    });

    // Initialize first step
    showStep(currentStep);
});






document.addEventListener("DOMContentLoaded", () => {
    const educationWrapper = document.getElementById("educationWrapper");
    const addEducationBtn = document.querySelector(".add-education");

    // Template for education fields
    const educationFieldsTemplate = () => `
        <div class="education-group">
            <button type="button" class="remove-education">Remove</button>
            <div class="form-group">
                <label for="studyProgram">Study Program</label>
                <input type="text" name="studyProgram[]" required>
            </div>
            <div class="form-group">
                <label for="institute">Institute/Place of Education</label>
                <input type="text" name="institute[]" required>
            </div>
            <div class="form-group">
                <label for="completionDate">Completion Date</label>
                <input type="date" name="completionDate[]" required>
            </div>
            <div class="form-group">
                <label for="cityLocation">City/Location</label>
                <input type="text" name="cityLocation[]" required>
            </div>
            <div class="form-group">
                <label for="courses">Courses/Thesis/Project</label>
                <input type="text" name="courses[]" required>
            </div>
        </div>
    `;

    // Add education fieldset
    addEducationBtn.addEventListener("click", () => {
        const lastEducationGroup = educationWrapper.lastElementChild;

        // Check if all fields in the last education group are filled
        if (lastEducationGroup) {
            const inputs = lastEducationGroup.querySelectorAll("input");
            let isValid = true;
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.reportValidity(); // Show the validation message
                }
            });

            // If any field is invalid, do not add a new group
            if (!isValid) {
                alert("Please complete the current education fields before adding a new one.");
                return;
            }
        }

        // Add a new set of education fields
        const div = document.createElement("div");
        div.innerHTML = educationFieldsTemplate();
        educationWrapper.appendChild(div);

        // Attach remove button event
        div.querySelector(".remove-education").addEventListener("click", () => {
            div.remove();
        });
    });
});





document.addEventListener("DOMContentLoaded", () => {
    const workExperienceWrapper = document.getElementById("workExperienceWrapper");
    const addWorkExperienceBtn = document.querySelector(".add-work-experience");

    // Template for work experience fields
    const workExperienceFieldsTemplate = () => `
        <div class="work-experience-group">
            <button type="button" class="remove-work-experience">Remove</button>
            <div class="form-group">
                <label for="jobTitle">Title/Position</label>
                <input type="text" name="jobTitle[]" required>
            </div>
            <div class="form-group">
                <label for="workplace">Workplace/Company</label>
                <input type="text" name="workplace[]" required>
            </div>
            <div class="form-group">
                <label for="completionDate">Completion Date</label>
                <input type="date" name="completionDate[]" required>
            </div>
            <div class="form-group">
                <label for="cityLocation">City/Location</label>
                <input type="text" name="cityLocation[]" required>
            </div>
            <div class="form-group">
                <label for="companyDescription">Company Description</label>
                <input type="text" name="companyDescription[]" required>
            </div>
            <div class="form-group">
                <label for="achievements">Achievements</label>
                <input type="text" name="achievements[]" required>
            </div>
            <div class="form-group">
                <label for="resume">Upload Resume</label>
                <input type="file" name="resume" id="resume" accept=".pdf,.doc,.docx" required>
            </div>
        </div>
    `;

    // Add work experience fieldset
    addWorkExperienceBtn.addEventListener("click", () => {
        const lastWorkExperienceGroup = workExperienceWrapper.lastElementChild;

        // Check if all fields in the last work experience group are filled
        if (lastWorkExperienceGroup) {
            const inputs = lastWorkExperienceGroup.querySelectorAll("input");
            let isValid = true;
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.reportValidity(); // Show the validation message
                }
            });

            // If any field is invalid, do not add a new group
            if (!isValid) {
                alert("Please complete the current work experience fields before adding a new one.");
                return;
            }
        }

        // Add a new set of work experience fields
        const div = document.createElement("div");
        div.innerHTML = workExperienceFieldsTemplate();
        workExperienceWrapper.appendChild(div);

        // Attach remove button event
        div.querySelector(".remove-work-experience").addEventListener("click", () => {
            div.remove();
        });
    });
});








document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".form-step");
    const nextStepBtns = document.querySelectorAll(".next-step"); // Updated: Select all "Next" buttons
    const prevStepBtns = document.querySelectorAll(".prev-step"); // Updated: Select all "Back" buttons
    const form = document.getElementById("multistepForm");

    let currentStep = 0;

    // Show current step
    function showStep(step) {
        steps.forEach((stepDiv, index) => {
            stepDiv.classList.toggle("active", index === step);
        });
    }

    // Show the initial step
    showStep(currentStep);

    // Handle "Next" button clicks
    nextStepBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const inputs = steps[currentStep].querySelectorAll("input, select, textarea");
            let isValid = true;
    
            // Validate inputs
            inputs.forEach(input => {
                if (!input.checkValidity()) {
                    isValid = false;
                    input.reportValidity();
                }
            });
    
            // Additional validation for file input
            const resumeInput = document.getElementById("resume");
            if (resumeInput && !resumeInput.files.length) {
                isValid = false;
                alert("Please upload your resume.");
            }
    
            if (isValid) {
                currentStep++;
                if (currentStep === steps.length - 1) {
                    populateReviewSection();
                }
                showStep(currentStep);
            } else {
                alert("Please fill all required fields before proceeding.");
            }
        });
    });
    

    function populateReviewSection() {
        // Personal Details
        document.getElementById("reviewName").textContent = document.getElementById("name").value;
        document.getElementById("reviewEmail").textContent = document.getElementById("email").value;
        document.getElementById("reviewPhone").textContent = document.getElementById("phone").value;
        document.getElementById("reviewLocation").textContent = document.getElementById("location").value;
        document.getElementById("reviewAge").textContent = document.getElementById("age").value || "N/A";

        // Education Details
        const educationWrapper = document.getElementById("educationWrapper");
        const educationGroups = educationWrapper.querySelectorAll(".education-group");
        const reviewEducation = document.getElementById("reviewEducation");
        reviewEducation.innerHTML = ""; // Clear previous content

        educationGroups.forEach((group, index) => {
            const studyProgram = group.querySelector('[name="studyProgram[]"]').value;
            const institute = group.querySelector('[name="institute[]"]').value;
            const completionDate = group.querySelector('[name="completionDate[]"]').value;
            const cityLocation = group.querySelector('[name="cityLocation[]"]').value;
            const courses = group.querySelector('[name="courses[]"]').value;

            const educationHTML = `
                <p><strong>Education ${index + 1}:</strong></p>
                <p><strong>Study Program:</strong> ${studyProgram}</p>
                <p><strong>Institute:</strong> ${institute}</p>
                <p><strong>Completion Date:</strong> ${completionDate}</p>
                <p><strong>City/Location:</strong> ${cityLocation}</p>
                <p><strong>Courses/Thesis/Project:</strong> ${courses}</p>
            `;
            reviewEducation.innerHTML += educationHTML;
        });

        // Work Experience Details
        const workExperienceWrapper = document.getElementById("workExperienceWrapper");
        const workGroups = workExperienceWrapper.querySelectorAll(".work-experience-group");
        const reviewWorkExperience = document.getElementById("reviewWorkExperience");
        reviewWorkExperience.innerHTML = ""; // Clear previous content

        workGroups.forEach((group, index) => {
            const jobTitle = group.querySelector('[name="jobTitle[]"]').value;
            const workplace = group.querySelector('[name="workplace[]"]').value;
            const completionDate = group.querySelector('[name="completionDate[]"]').value;
            const cityLocation = group.querySelector('[name="cityLocation[]"]').value;
            const companyDescription = group.querySelector('[name="companyDescription[]"]').value;
            const achievements = group.querySelector('[name="achievements[]"]').value;

            const workHTML = `
                <p><strong>Work Experience ${index + 1}:</strong></p>
                <p><strong>Title/Position:</strong> ${jobTitle}</p>
                <p><strong>Workplace/Company:</strong> ${workplace}</p>
                <p><strong>Completion Date:</strong> ${completionDate}</p>
                <p><strong>City/Location:</strong> ${cityLocation}</p>
                <p><strong>Company Description:</strong> ${companyDescription}</p>
                <p><strong>Achievements:</strong> ${achievements}</p>
            `;
            reviewWorkExperience.innerHTML += workHTML;
        });

        const resumeInput = document.getElementById("resume");
            if (resumeInput && resumeInput.files.length) {
            document.getElementById("reviewResume").textContent = resumeInput.files[0].name;
    }
    }


    // Handle "Back" button clicks
    prevStepBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    // Handle form submission
    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("Form submitted successfully!");
        form.reset();
        currentStep = 0;
        showStep(currentStep);
    });
});












document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("multistepForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Create an array to store all the form data
        const formDataArray = [];

        // Personal Details
        const personalDetails = {
            name: form.querySelector("#name").value,
            email: form.querySelector("#email").value,
            phone: form.querySelector("#phone").value,
            location: form.querySelector("#location").value,
            age: form.querySelector("#age").value || "N/A",
        };
        formDataArray.push({ personalDetails });

        // Work Experience
        const workExperiences = [];
        form.querySelectorAll(".work-experience-group").forEach((group) => {
            const workExperience = {
                jobTitle: group.querySelector("input[name='jobTitle[]']").value,
                workplace: group.querySelector("input[name='workplace[]']").value,
                completionDate: group.querySelector("input[name='completionDate[]']").value,
                cityLocation: group.querySelector("input[name='cityLocation[]']").value,
                companyDescription: group.querySelector("input[name='companyDescription[]']").value,
                achievements: group.querySelector("input[name='achievements[]']").value,
                resume: group.querySelector("input[name='resume']").files[0]?.name || "No File Uploaded",
            };
            workExperiences.push(workExperience);
        });
        formDataArray.push({ workExperiences });

        // Education Details
        const educationDetails = [];
        form.querySelectorAll(".education-group").forEach((group) => {
            const education = {
                studyProgram: group.querySelector("input[name='studyProgram[]']").value,
                institute: group.querySelector("input[name='institute[]']").value,
                completionDate: group.querySelector("input[name='completionDate[]']").value,
                cityLocation: group.querySelector("input[name='cityLocation[]']").value,
                courses: group.querySelector("input[name='courses[]']").value,
            };
            educationDetails.push(education);
        });
        formDataArray.push({ educationDetails });

        // Log the collected data in array format
        console.log(formDataArray);
    });
});
