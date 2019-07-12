import React, {Component} from 'react';

export default class EditInput extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', inputText: '', mode:'view'};

  }

  handleChange = (e) => {
    this.setState({ inputText: e.target.value });
  }

  handleSave = () => {
    this.setState({text: this.state.inputText, mode: 'view'});
  }

  handleEdit = () => {
    this.setState({mode: 'edit'});
  }

  render () {
    const view = this.state.mode === 'view';

    return (
      <div>
        <p>Who's your favorite pokemon? <br />{this.state.text}</p>

        {
          view
          ? null
          : (
            <p>
              <input
                onChange={this.handleChange}
                value={this.state.inputText} />
            </p>
          )
        }

        <button
          onClick={
            view
              ? this.handleEdit
              : this.handleSave
          }
        >
          {view ? 'Edit' : 'Save'}
        </button>
      </div>
    );
  }
}
