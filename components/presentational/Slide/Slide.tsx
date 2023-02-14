import React from 'react'
import styles from './Slide.module.scss'

interface ISlideProps {
  id: string,
  hsl: string,
  children?: React.ReactNode
}

/**
 * Presentational component to mark a new section theme.
 * @param id Slide id
 * @param hsl Background color of slide in hsl format
 * @param children Children element wihin Slide
 * @returns Styled section element with children nodes
 */
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
