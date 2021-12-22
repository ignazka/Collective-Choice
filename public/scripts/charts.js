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
    const { 
        downvotes, 
        upvotes, 
        anonDownvotes, 
        anonUpvotes, 
        isBot,
        anonTotalVotes,
        totalVotes
     } = databaseData[0];
    const totalUpvotes = upvotes + anonUpvotes;
    const totalDownvotes = downvotes + anonDownvotes;
    const allVotes = totalVotes + anonTotalVotes
    

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
function buildPieChartConfig(databaseData) {
    // SETUP Chart
    const { 
        downvotes, 
        upvotes, 
        anonDownvotes, 
        anonUpvotes, 
        isBot,
        anonTotalVotes,
        totalVotes
     } = databaseData[0];
    const totalUpvotes = upvotes + anonUpvotes;
    const totalDownvotes = downvotes + anonDownvotes;
    const allVotes = totalVotes + anonTotalVotes
    

    const labels = ["Bots", "SignedUp Users", "Anonymous Users"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Dataset 1",
                data: [isBot, totalVotes, anonTotalVotes],
                backgroundColor: ["rgb(255, 65, 106)", "rgb(0, 254, 211)", "rgb(5, 155, 255)"],
            },
        ],
    };
    // CONFIG
    const config = {
        type: "doughnut",
        data: data,

        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                },
            },
        },
    };
    return config;
}

async function buildCharts() {
    const { data } = await getData();
    const chartConfig = buildChartConfig(data);
    const myChart = new Chart(document.getElementById("myChart"), chartConfig);
    // build pieChart
    const pieChartConfig = buildPieChartConfig(data)
    const pieChart = new Chart(document.getElementById("pieChart"), pieChartConfig)
}

window.addEventListener("load", () => {
    buildCharts();
});
