function getFieldError(field) {
    if (field.required && field.value.trim() === "") {
        return "This field is required.";
    }

    if (field.name === "studentId" && !/^[0-9]+$/.test(field.value.trim())) {
        return "Student ID must contain numbers only.";
    }

    if (field.validity.typeMismatch) return "Enter a valid email address.";
    if (field.validity.tooShort) return `Enter at least ${field.minLength} characters.`;
    if (field.validity.tooLong) return `Use no more than ${field.maxLength} characters.`;
    if (field.validity.rangeOverflow) return "Date of birth must be no later than December 31, 2010.";

    return "";
}

function updateFieldError(field) {
    field.setCustomValidity("");
    const error = getFieldError(field);
    const errorElement = document.getElementById(`${field.id}-error`);

    field.setCustomValidity(error);
    field.setAttribute("aria-invalid", String(error !== ""));
    if (errorElement) {
        errorElement.textContent = error;
        errorElement.hidden = error === "";
    }

    return error;
}

const registrationForm = document.getElementById("registration-form");
if (registrationForm) {
    const fields = Array.from(registrationForm.querySelectorAll("input, select"));
    const message = document.getElementById("form-message");

    registrationForm.addEventListener("submit", (event) => {
        event.preventDefault();
        fields.forEach(updateFieldError);

        const firstInvalid = fields.find((field) => !field.validity.valid);
        if (firstInvalid) {
            message.className = "error-message";
            message.textContent = "Please correct the marked fields before submitting.";
            firstInvalid.focus();
            return;
        }

        message.className = "success-message";
        message.textContent = "Registration submitted successfully. This classroom demo does not send data to a server.";
    });

    fields.forEach((field) => {
        const clearMessage = () => {
            message.textContent = "";
            message.className = "";
        };

        field.addEventListener("input", () => {
            if (field.hasAttribute("aria-invalid")) updateFieldError(field);
            clearMessage();
        });
        field.addEventListener("change", () => {
            if (field.hasAttribute("aria-invalid")) updateFieldError(field);
            clearMessage();
        });
    });

    registrationForm.addEventListener("reset", () => {
        window.setTimeout(() => {
            fields.forEach((field) => {
                field.setCustomValidity("");
                field.removeAttribute("aria-invalid");

                const errorElement = document.getElementById(`${field.id}-error`);
                if (errorElement) {
                    errorElement.textContent = "";
                    errorElement.hidden = true;
                }
            });
            message.textContent = "";
            message.className = "";
        });
    });
}
