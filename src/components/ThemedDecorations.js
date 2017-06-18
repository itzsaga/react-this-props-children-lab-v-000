import React from 'react'

class ThemedDecorations extends React.Component {
  render() {
    const addedPropChildren = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      })
    })
    return (
      <div>
        {addedPropChildren}
      </div>
    )
  }
}

export default ThemedDecorations
