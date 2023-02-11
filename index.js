const calculate = document.getElementById("calculate");
        const birthdate = document.getElementById("birthdate");
        const output = document.getElementById("output");

        calculate.addEventListener("click", function () {
            const today = new Date();
            const birthdateValue = new Date(birthdate.value);
            const ageInMilliseconds = today - birthdateValue;
            const ageInSeconds = ageInMilliseconds / 1000;
            const ageInMinutes = ageInSeconds / 60;
            const ageInHours = ageInMinutes / 60;
            const ageInDays = ageInHours / 24;
            const ageInYears = ageInDays / 365;
            const ageInMonths = ageInDays / 30;
            output.innerHTML = Math.floor(ageInYears);
            outputMonths.innerHTML = Math.floor(ageInMonths % 12);
            outputDays.innerHTML = Math.floor(ageInDays);
            outputHours.innerHTML = Math.floor(ageInHours)
            outputminutes.innerHTML = Math.floor(ageInMinutes);
            outputseconds.innerHTML = Math.floor(ageInSeconds);
        });
    