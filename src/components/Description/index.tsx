import React from 'react'
import './descriptionindex.css'
import { Container1, ItemSpan, Label1, Words, Wrapper } from './descriptionStyles'

const Description = () => {
  return (
    <Container1 className="container1">
      <Wrapper className="wrapper">
        <Label1>I'm a </Label1>
        <Words className="words">
          <ItemSpan className="itemspan">Designer</ItemSpan>
          <ItemSpan className="itemspan">Developer</ItemSpan>
          <ItemSpan className="itemspan">Creator</ItemSpan>
          <ItemSpan className="itemspan">Team player</ItemSpan>
          <ItemSpan className="itemspan">Designer</ItemSpan>
        </Words>
      </Wrapper>
    </Container1>
  )
}

export default Description