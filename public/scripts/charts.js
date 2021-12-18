//magic Number for Server
const isServer = false;
const baseURL = isServer
    ? "https://collective-choice.herokuapp.com/"
    : "http://localhost:3000/";

function getData() {
    return axios.get(baseURL + "results");
}

function buildChartConfig(databaseData) {
    // SETUP Chart
    const { downvotes, upvotes, anonDownvotes, anonUpvotes } = databaseData[0];
    const totalUpvotes = upvotes + anonUpvotes;
    const totalDownvotes = downvotes + anonDownvotes;

    const labels = ["Results"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "downvotes",
                data: [totalDownvotes],
                backgroundColor: "rgb(255, 65, 106)",
                barThickness: 80,

            },
            {
                label: "upvotes",
                data: [totalUpvotes],
                backgroundColor: "rgb(0, 254, 211)",
                barThickness: 80,
            },
        ],
    };
    // CONFIG
    const config = {
        type: "bar",
        data: data,

        options: {
            responsive: true,
            maintainAspectRatio: false,
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
    return config;
}

async function buildChart() {
    const { data } = await getData();
    const chartConfig = buildChartConfig(data);
    const myChart = new Chart(document.getElementById("myChart"), chartConfig);
}

window.addEventListener("load", () => {
    buildChart();
});
