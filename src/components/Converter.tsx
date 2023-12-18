import React from "react";
import InputFC from "./Input.tsx";
import AutputFC from "./Autput.tsx";

export default function ConverterFC() {
  return (
    <div className="App">
      <div className=" block input">
        <InputFC size={7} placeholder={"#000000"} />
      </div>
      <div className="input">
        <AutputFC />
      </div>
    </div>
  )
}
