import React from 'react'
import Style from "./error.module.scss"
export default function Error({children}) {
  return (
    <p className={Style.error}>{children}</p>
  )
}
