function createTable() {
    try {
        let rows = parseInt(prompt("Input number of rows"));
        let cols = parseInt(prompt("Input number of columns"));

        // Validate input (Cypress tests expect this behavior)
        if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
            alert("Please enter valid positive numbers!");
            return;
        }

        let table = document.getElementById("myTable");
        table.innerHTML = ""; // clear previous content

        for (let i = 0; i < rows; i++) {
            let tr = document.createElement("tr");
            for (let j = 0; j < cols; j++) {
                let td = document.createElement("td");
                td.textContent = `Row-${i} Column-${j}`;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
    } catch (e) {
        console.error("Error creating table:", e);
    }
}