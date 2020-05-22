const net = require("net");
const chalk = require("chalk");
const battle = require("./battle");

const main = () => {
    const server = net.createServer((socket) => {
        socket.on("data", (dataRaw) => {
            let data = JSON.parse(dataRaw)
            switch (data.msg) {
                case "identity":
                    process.stdout.write("\r");
                    console.log(`Challenger ${data.value.name} has joined!`);
                    socket.write(JSON.stringify({msg: "identity", value: {name: require("os").userInfo().username}}));
                    battle(socket, data.value);
                    break;
            
                default:
                    break;
            }
        });
    });

    let matchPort = Math.floor(Math.random() * 8999) + 1000;
    server.listen(matchPort, "localhost", () => {
        console.log(`${chalk.green("Match")} ${matchPort} ${chalk.green("connected.")} ${chalk.bold("To connect, type in the match code, " + matchPort + ", to " + chalk.yellow("Pokèmon ") + chalk.red("ONLINE"))}.`);
        console.log("Waiting for challenger...");
    });
};

module.exports = main;