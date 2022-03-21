import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-700 p-4">
      <div className="container mx-auto text-center font-bold text-white">
        Projeto desenvolvido por: &nbsp;
        <a className='hover:underline' href="https://www.felipebenutti.com.br" target='blank'>Felipe Benutti</a> /&nbsp;
        <a className='hover:underline' href="https://www.linkedin.com/in/felipe-benutti" target='blank'>LinkedIn</a> /&nbsp;
        <a className='hover:underline' href="https://www.github.com/pelpsrox" target='blank'>GitHub</a>
      </div>
      <div className="mt-4 text-center">
        <img className="inline p-4" src='logo_semana_fsm.png' />
        <img className="inline p-4" src='logo_devpleno.png' />
      </div>
    </div>
  )
}

export default Footer