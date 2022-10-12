import express from "express"
import routes from "./routes"
import { resolve } from "path"
import cors from "cors"

import "./database"

class App {
  constructor() {
    this.app = express()

    // const corsOptions = {
    //   origin: "https://car-sell-brasil.vercel.app/",
    //   credentials: true, // access-control-allow-credentials:true
    //   optionSuccessStatus: 200
    // }

    this.app.use(cors())

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(
      "/car-file",
      express.static(resolve(__dirname, "..", "uploads"))
    )

    this.app.use(
      "/category-file",
      express.static(resolve(__dirname, "..", "uploads"))
    )
  }

  routes() {
    this.app.use(routes)
  }
}

export default new App().app
