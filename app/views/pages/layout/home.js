import React from 'react'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  componentDidMount() {}

  render() {
    return (
      <main className='t__home-page'>
        <section className='home-page--container'>
          <div> Home Page </div>
        </section>
      </main>
    )
  }
}

export default Home