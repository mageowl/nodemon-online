const net = require("net");
const chalk = require("chalk");
const battle = require("./battle");

const main = (match) => {
    const socket = new net.Socket();
    socket.connect(match, "localhost", () => {
        console.log(chalk.green("Connected to match ") + match);
        socket.write(JSON.stringify({msg: "identity", value: {name: require("os").userInfo().username}}))

        socket.on("data", (dataRaw) => {
            let data = JSON.parse(dataRaw);
            switch (data.msg) {
                case "identity":
                    process.stdout.write("\r");
                    console.log(`Host ${data.value.name} is ready!`);
                    battle(socket, data.value);
                    break;

                default:
                    break;
            }
        });
    });
    
}

module.exports = main;