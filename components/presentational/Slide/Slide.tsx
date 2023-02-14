import React from 'react'
import styles from './Slide.module.scss'

interface ISlideProps {
  id: string,
  hsl: string,
  children?: React.ReactNode
}

export const Slide = ({id,hsl,children}: ISlideProps) => {
  return (
    <section
      id = {id}
      data-testid = {id}
      className = {styles.base}
      style = {{
        backgroundColor: hsl
      }}
    >
      {children}
    </section>
  )
}
