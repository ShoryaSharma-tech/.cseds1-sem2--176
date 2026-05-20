function generatePattern() {
    let n = document.getElementById("num").value;
    let output = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            output += j;
        }
        output += "\n";
    }

    document.getElementById("result").innerText = output;
}