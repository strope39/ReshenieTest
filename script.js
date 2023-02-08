function inputsHandler() {
    const controlPhrase = "word";
    const passToggler = document.querySelector(".form__string-vector");
    const phrase = document.querySelector(".form__string-input");
    const pass = document.querySelector(".form__pass-input");
    const confirm = document.querySelector(".form__confirm-input");
    phrase.addEventListener("input", (e) => {
        e.stopPropagation();
        const container = document.querySelector(".form__test-string");
        const value = e.target.value;

        if (value != controlPhrase && value) {
            container.classList.add("error");
            document.querySelector("#error-phrase")
                ? document.querySelector("#error-phrase").remove()
                : 0;
            const prompt = document.createElement("div");
            prompt.id = errorPhrase("phrase").id;
            prompt.class = errorPhrase("phrase").class;
            prompt.innerText = errorPhrase("phrase").innerText;
            container.append(prompt);
        } else {
            container.classList.remove("error");
            document.querySelector("#error-phrase")
                ? document.querySelector("#error-phrase").remove()
                : 0;
        }
    });
    pass.addEventListener("input", (e) => {
        e.stopPropagation();
        const container = document.querySelector(".form__pass");
        const value = e.target.value;

        if (value.length < 6 && value) {
            container.classList.add("error");
            document.querySelector("#error-pass")
                ? document.querySelector("#error-pass").remove()
                : 0;
            const prompt = document.createElement("div");
            prompt.id = errorPhrase("pass").id;
            prompt.class = errorPhrase("pass").class;
            prompt.innerText = errorPhrase("pass").innerText;
            container.append(prompt);
        } else {
            container.classList.remove("error");
            document.querySelector("#error-pass")
                ? document.querySelector("#error-pass").remove()
                : 0;
        }
    });
    confirm.addEventListener("input", (e) => {
        e.stopPropagation();
        const container = document.querySelector(".form__confirm");
        const value = e.target.value;

        if (value != pass.value && value) {
            container.classList.add("error");
            document.querySelector("#error-confirm")
                ? document.querySelector("#error-confirm").remove()
                : 0;
            const prompt = document.createElement("div");
            prompt.id = errorPhrase("confirm").id;
            prompt.class = errorPhrase("confirm").class;
            prompt.innerText = errorPhrase("confirm").innerText;
            container.append(prompt);
        } else {
            container.classList.remove("error");
            document.querySelector("#error-confirm")
                ? document.querySelector("#error-confirm").remove()
                : 0;
        }
    });

    passToggler.addEventListener("click", e => {
        e.stopPropagation()
        pass.getAttribute("type") == "password" ? pass.setAttribute("type", "text") : pass.setAttribute("type", "password")

    })
}

inputsHandler();

function errorPhrase(error) {
    switch (error) {
        case "phrase": {
            return {
                id: "error-phrase",
                class: "error__prompt",
                innerText: "Неверное контрольное слово (word)",
            };
            // return "<div id='error_phrase' class='error__prompt'>Неверное контрольное слово</div>"
            break;
        }
        case "pass": {
            return {
                id: "error-pass",
                class: "error__prompt",
                innerText: "Пароль должен быть не менее 6 символов",
            };
            break;
        }
        case "confirm": {
            return {
                id: "error-confirm",
                class: "error__prompt",
                innerText: "Пароли не совпадают",
            };
            break;
        }
    }
}

function createBullString(pass) {
    let str = "";
    for (i = 0; i < pass.length; i++) {
        str += "&bull";
    }
    console.log(str);
    return str;
}
