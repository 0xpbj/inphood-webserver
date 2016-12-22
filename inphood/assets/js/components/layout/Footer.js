import React from "react"

export default class Footer extends React.Component {
  render() {
    const containerStyle = {
      marginTop: "60px"
    }
    return (
      <footer>
        <div class="row" style={containerStyle}>
          <div class="col-lg-12">
            <p class="text-center">Copyright &copy; inPhood Inc.,</p>
          </div>
        </div>
      </footer>
    )
  }
}