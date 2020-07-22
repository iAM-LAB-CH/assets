const updateBEP2 = require("./updateBEP2")

function update() {
    try {
        updateBEP2.update();
    } catch(err) {
        console.error(err);
        process.exit(1);
    }
}

update();