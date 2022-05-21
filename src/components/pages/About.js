import React from 'react'

function About() {
    return (
        /**
         * React.Fragment u can have single elements without a div wrapping them
         * Without it u need a div to wrap it
        */
      <React.Fragment>
          <h1>About</h1>
          <p>This is the TodoList app v1.0.0. It is part of a React crash course</p>
      </React.Fragment>
    )
}

export default About;