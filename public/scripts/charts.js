// SETUP
const labels = ["Results"];
const data = {
    labels: labels,
    datasets: [
        {
            label: "downvotes",
            data: [25],
            backgroundColor: "rgb(255, 65, 106)",
        },
        {
            label: "upvotes",
            data: [5],
            backgroundColor: "rgb(0, 254, 211)",
        },
    ],
};

// CONFIG
const config = {
    type: "bar",
    data: data,

    options: {
        indexAxis: "y",
        scales: {
            x: {
                stacked: true,
                display: false,
            },
            y: {
                stacked: true,
                display: false,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    },
};

const myChart = new Chart(document.getElementById("myChart"), config);
