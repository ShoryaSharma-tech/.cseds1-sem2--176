function calculateResult() {

    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);
    let s4 = Number(document.getElementById("sub4").value);
    let s5 = Number(document.getElementById("sub5").value);

    let total = s1 + s2 + s3 + s4 + s5;
    let percentage = total / 5;

    let division = "";

    if (s1 < 33 || s2 < 33 || s3 < 33 || s4 < 33 || s5 < 33) {
        division = "Fail";
    }
    else if (percentage >= 75) {
        division = "Distinction";
    }
    else if (percentage >= 60) {
        division = "First Class";
    }
    else if (percentage >= 45) {
        division = "Second Class";
    }
    else {
        division = "Fail";
    }

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Percentage: " + percentage.toFixed(2) + "%<br>" +
        "Division: " + division;
}