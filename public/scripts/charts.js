//magic Number for Server
const isServer = true
const baseURL = isServer ? "https://collective-choice.herokuapp.com/" : "http://localhost:3000/"

function getData() {
    return axios.get(baseURL + "results");
}


function buildChartConfig(databaseData) {
    // SETUP Chart
    console.log(databaseData[0].upvotes)
    
    
    const labels = ["Results"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "downvotes",
                data: [databaseData[0].downvotes],
                backgroundColor: "rgb(255, 65, 106)",
                barThickness: 80,
            },
            {
                label: "upvotes",
                data: [databaseData[0].upvotes],
                backgroundColor: "rgb(0, 254, 211)",
                barThickness: 80

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
    return config
}

async function buildChart() {
    const { data } = await getData();
    const chartConfig = buildChartConfig(data);
    const myChart = new Chart(document.getElementById("myChart"), chartConfig);
}

window.addEventListener("load", () => {
    buildChart();
});
