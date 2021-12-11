const Chart = require("chart.js")

// SETUP
const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
    labels: labels,
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45],
        },
    ],
};

// CONFIG
const config = {
    type: "line",
    data: data,
    options: {},
};

function drawChart() {
    console.log("charts creating!");
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, config);
}

module.exports = {drawChart }