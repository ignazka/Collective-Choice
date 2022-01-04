//magic Number for Server
const isServer = true;
const baseURL = isServer
    ? "https://collective-choice.herokuapp.com/"
    : "http://localhost:3000/";

function getData() {
    return axios.get(baseURL + "results");
}

function buildTotalChartConfig(databaseData) {
    // SETUP Chart
    const { 
        downvotes, 
        upvotes, 
        anonDownvotes, 
        anonUpvotes,
     } = databaseData[0];
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
function buildPieChartConfig(databaseData) {
    // SETUP Chart
    const {
        isBot,
        anonTotalVotes,
        totalVotes
     } = databaseData[0];

    const labels = ["Bots", "SignedUp Users", "Anonymous Users"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Dataset 1",
                data: [isBot, totalVotes, anonTotalVotes-isBot],
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
            plugins: {
                legend: {
                    display: true,
                },
            },
        },
    };
    return config;
}

function buildTimeStampChartConfig(databaseData) {
    // database data
    const {
        timestampsUpvotes,
        timestampsDownvotes
        } = databaseData[0];
        // array with all dates of Upvotes: unique
        const dateSet = new Set()
        
        // pushes every upvote timestamp into dateSet
        timestampsUpvotes.forEach(item => {
            //matches everything before T: 2022-01-02T19:11:07.910+00:00 -> 2022-01-02
            const filteredDate = item.match(/^.*?(?=T)/)
            dateSet.add(filteredDate[0])
        })
        
        // pushes every downvote timestamp into dateSet
        timestampsDownvotes.forEach(item => {
            //matches everything before T: 2022-01-02T19:11:07.910+00:00 -> 2022-01-02
            const filteredDate = item.match(/^.*?(?=T)/)
            dateSet.add(filteredDate[0])
        })
        const dateArray = Array.from(dateSet);

        // arrays to be used in chart, congruent to date
        votesArray = []
        upvotesArray = []
        downvotesArray = []
        // Get total votes for each day
        dateArray.forEach( date => {
            // set the counters to count votes for each date
            let upvoteCounterOfTheDate = 0
            let downvoteCounterOfTheDate = 0
            // iterates through timeStampUp/Downvotes from database, to count occurences
            timestampsUpvotes.forEach(timestamp => {
                if(timestamp.includes(date)){
                    upvoteCounterOfTheDate++;
                }
            })
            timestampsDownvotes.forEach(timestamp => {
                if(timestamp.includes(date)){
                    downvoteCounterOfTheDate++;
                }
            })
            votesArray.push(upvoteCounterOfTheDate + downvoteCounterOfTheDate)
            upvotesArray.push(upvoteCounterOfTheDate)
            downvotesArray.push(downvoteCounterOfTheDate)
        })

    //SETUP
    const labels = dateArray;
    const data = {
    labels: labels,
    datasets: [
        {
        label: 'Upvotes',
        data: upvotesArray,
        borderColor:  "rgb(0, 254, 211)",
        backgroundColor: "rgb(0, 254, 211)",
        order: 1
        },
        {
        label: 'Downvotes',
        data: downvotesArray,
        borderColor: "rgb(255, 65, 106)",
        backgroundColor: "rgb(255, 65, 106)",
        order: 1
        },
        {
        label: 'All Votes',
        data: votesArray,
        borderColor: "rgb(5, 155, 255)",
        backgroundColor: "rgb(5, 155, 255)",
        type: 'line',
        order: 0
        }
    ]
    };
    
    //CONFIG
    const config = {
        type: 'bar',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Combined Line/Bar Chart'
            }
          }
        },
    };
    return config;

}
// builds charts and renders them to the user
async function buildCharts() {
    //build up vs down votes
    const { data } = await getData(); //gets all the data from server->result Modell
    const totalChartConfig = buildTotalChartConfig(data);
    const totalChart = new Chart(document.getElementById("totalChart"), totalChartConfig);
    // build pieChart
    const pieChartConfig = buildPieChartConfig(data)
    const pieChart = new Chart(document.getElementById("pieChart"), pieChartConfig)
    // // build timeStampChart
    const timeStampChartConfig = buildTimeStampChartConfig(data)
    const timeStampChart = new Chart(document.getElementById("timeStampChart"), timeStampChartConfig)
}

window.addEventListener("load", () => {
    buildCharts();
});
