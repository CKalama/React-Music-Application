const express = require("express");
const routes = require("./routes");

//Setting up Express
const app = express();

const PORT = process.env.PORT || 9001;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {

    app.use(express.static('client/build'))
};

app.use(routes);

app.listen(PORT, () => {
    if (process.env.NODE_ENV !== "production") {
        console.log(`Server listening at http://localhost:${PORT}`)
    };
});