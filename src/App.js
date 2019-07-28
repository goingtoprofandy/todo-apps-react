import React from 'react'
import Container from './components/Container'
import EditText from './components/EditText'
import Button from './components/Button'
import Text from './components/Text'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      header: "Todo Apps",
      title: '',
      description: '',
      items: []
    }
    this.setTitleChange = this.setTitleChange.bind(this)
    this.setDescriptionChange = this.setDescriptionChange.bind(this)
    this.setSubmit = this.setSubmit.bind(this)
  }

  setTitleChange(event) {
    this.setState({title: event.target.value})
  }

  setDescriptionChange(event) {
    this.setState({description: event.target.value})
  }

  setSubmit(event) {
    this.setState({items: [...this.state.items, {
        title: this.state.title,
        description: this.state.description
      }].reverse(),
      title: '',
      description: ''
    })
  }

  render() {
    return (
      <Container.Card className="section-center-small">
        <h1>{this.state.header}</h1>
        <form>
          <EditText type="text" value={this.state.title} change={this.setTitleChange} hint="Title" />
          <EditText type="multiple" value={this.state.description} change={this.setDescriptionChange} hint="Message here ..." />
          <Button type="button" value="Simpan" click={this.setSubmit} />
        </form>
        {this.state.items.map((item, key) => {
          return(
            <Container.ListItem>
              <Text value={item.title} type="heading" />
              <Text value={item.title} />
            </Container.ListItem>
          )
        })}
      </Container.Card>
    )
  }
}

export default App