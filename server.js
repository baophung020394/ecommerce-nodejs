const app = require("./src/app");

const PORT = process.env.PORT || 3055;

const server = app.listen(PORT, () => {
  console.log(`WSV eCommerce start with port: ${PORT}`)
})

// SIGINT is "ctrl + C"
process.on("SIGINT", () => {
  server.close(() => console.log(`Exit Server Express`))
});