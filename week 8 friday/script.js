function getFieldError(field) {
    if (field.required && field.value.trim() === "") return "This field is required.";
    if (field.name === "studentId" && !/^[0-9]+$/.test(field.value)) {
        return "Student ID must contain numbers only.";
    }
    if (field.validity.typeMismatch) return "Enter a valid email address.";
    if (field.validity.tooShort) return `Enter at least ${field.minLength} characters.`;
    if (field.validity.tooLong) return `Use no more than ${field.maxLength} characters.`;
    if (field.validity.rangeUnderflow) return `Enter a value of at least ${field.min}.`;
    if (field.validity.rangeOverflow) return `Enter a value no greater than ${field.max}.`;
    if (field.validity.patternMismatch) return field.title || "Use the requested format.";
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

function clearRegistrationFeedback(fields, message) {
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
}

const homeworkForm = document.getElementById("homework-form");
if (homeworkForm) {
    const fields = Array.from(homeworkForm.querySelectorAll("input, select"));
    const message = document.getElementById("message");

    homeworkForm.addEventListener("submit", (event) => {
        event.preventDefault();
        fields.forEach(updateFieldError);

        const firstInvalid = fields.find((field) => !field.validity.valid);
        if (firstInvalid) {
            message.className = "error";
            message.textContent = "Please correct the marked fields before submitting.";
            firstInvalid.focus();
            return;
        }

        message.className = "success";
        message.textContent = "Registration details are valid. This classroom demo does not send data to a server.";
    });

    fields.forEach((field) => {
        field.addEventListener("input", () => {
            if (field.hasAttribute("aria-invalid")) updateFieldError(field);
            message.textContent = "";
            message.className = "";
        });
        field.addEventListener("change", () => {
            if (field.hasAttribute("aria-invalid")) updateFieldError(field);
        });
    });

    homeworkForm.addEventListener("reset", () => {
        window.setTimeout(() => clearRegistrationFeedback(fields, message));
    });
}

const searchForm = document.getElementById("search-form");
if (searchForm) {
    const searchTerm = document.getElementById("search-term");
    const result = document.getElementById("result");

    if (searchTerm) {
        searchForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const values = new URLSearchParams(new FormData(searchForm));
            result.textContent = `GET query string: ?${values.toString()}`;
        });
    } else {
        searchForm.addEventListener("submit", () => {
            const query = new FormData(searchForm).get("q");
            result.textContent = `Opening Google results for “${query}”.`;
        });
    }
}

const groupedForm = document.getElementById("grouped-form");
if (groupedForm) {
    groupedForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const values = new FormData(groupedForm);
        document.getElementById("result").textContent =
            `Registration details are valid for ${values.get("name")} (${values.get("major")}).`;
    });
}

const accessibleForm = document.getElementById("accessible-form");
if (accessibleForm) {
    accessibleForm.addEventListener("submit", (event) => {
        event.preventDefault();
        document.getElementById("result").textContent = "The labelled form is complete.";
    });
}

const typesForm = document.getElementById("types-form");
if (typesForm) {
    const colorPicker = document.getElementById("type-color");
    const colorResult = document.getElementById("color-result");

    colorPicker.addEventListener("input", () => {
        colorResult.textContent = `Selected color: ${colorPicker.value}`;
    });

    typesForm.addEventListener("submit", (event) => {
        event.preventDefault();
        document.getElementById("result").textContent =
            "The browser accepted the required values for these input types.";
    });
}

const attributesForm = document.getElementById("attributes-form");
if (attributesForm) {
    attributesForm.addEventListener("submit", (event) => {
        event.preventDefault();
        document.getElementById("result").textContent = "All values meet the HTML5 validation requirements.";
    });
}

document.querySelectorAll("#css-form input").forEach((field) => {
    field.addEventListener("input", () => {
        field.setAttribute("aria-invalid", String(!field.validity.valid));
    });
    field.addEventListener("invalid", () => {
        field.setAttribute("aria-invalid", "true");
    });
});
