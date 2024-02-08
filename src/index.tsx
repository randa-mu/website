import React from "react"
import ReactDOM from "react-dom/client"
import { Canvas } from "@react-three/fiber"
import {Dice} from "./Dice"
import "./index.css"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)
root.render(
  <React.StrictMode>
      <Canvas>
          <Dice/>
      </Canvas>
  </React.StrictMode>
)

