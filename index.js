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
            output.innerHTML = Math.round(ageInYears);
            outputMonths.innerHTML = Math.round(ageInMonths % 12);
            outputDays.innerHTML = Math.round(ageInDays);
            outputHours.innerHTML = Math.round(ageInHours)
            outputminutes.innerHTML = Math.round(ageInMinutes);
            outputseconds.innerHTML = Math.round(ageInSeconds);
        });
    