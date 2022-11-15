import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      
      <footer>
        <div className='container-footer'>
    
          {footer.map((val) => (
            <div className='box-footer'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2021 Estatery. Designd By Omprakash.</span>
      </div>
    </>
  )
}

export default Footer
