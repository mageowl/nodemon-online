const inquirer = require("inquirer");

const main = (socket, opponent) => {
    socket.on("data", (dataRaw) => {
        let data = JSON.parse(dataRaw)
        switch (data.msg) {
            case "pokemon":
                console.log(opponent.name + " sent out " + data.value.name)
                break;
        
            default:
                break;
        }
    })
}

module.exports = main;