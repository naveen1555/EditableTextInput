import {Component} from 'react'

import './index.css'

class EditableText extends Component {
  state = {
    isButtonClicked: false,
    userInput: '',
  }

  onClickSaveButton = () => {
    this.setState(prevState => ({
      isButtonClicked: !prevState.isButtonClicked,
    }))
  }

  onClickEditButton = () => {
    this.setState(prevState => ({
      isButtonClicked: !prevState.isButtonClicked,
    }))
  }

  onGivenUserInput = event => {
    this.setState({
      userInput: event.target.value,
    })
  }

  render() {
    const {isButtonClicked, userInput} = this.state

    return (
      <div className="container">
        <div className="text-container">
          <h1 className="text-heading">Editable Text Input</h1>
          {isButtonClicked ? (
            <div className="paragraph-edit-btn-container">
              <p className="display-text">{userInput}</p>
              <button
                type="button"
                className="save-button"
                onClick={this.onClickEditButton}
              >
                Edit
              </button>
            </div>
          ) : (
            <div className="input-save-btn-container">
              <input
                className="input-box"
                type="text"
                value={userInput}
                onChange={this.onGivenUserInput}
              />
              <button
                type="button"
                className="save-button"
                onClick={this.onClickSaveButton}
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EditableText
