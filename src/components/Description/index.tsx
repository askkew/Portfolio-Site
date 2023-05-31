import React from 'react'
import './descriptionindex.css'
import { Container1, ItemSpan, Label1, Words, Wrapper } from './descriptionStyles'

const Description = () => {
  return (
    <Container1 className="container1">
      <Wrapper className="wrapper">
        {/* <Label1>I'm a </Label1> */}
        <Words className="words">
          <ItemSpan className="itemspan">&lt;Designer/&gt;</ItemSpan>
          <ItemSpan className="itemspan">&lt;Developer/&gt;</ItemSpan>
          <ItemSpan className="itemspan">&lt;Creator/&gt;</ItemSpan>
          <ItemSpan className="itemspan">&lt;Team player/&gt;</ItemSpan>
          <ItemSpan className="itemspan">&lt;Designer/&gt;</ItemSpan>
        </Words>
      </Wrapper>
    </Container1>
  )
}

export default Description