import React from "react"
import Article from "../Article"

export default class Home extends React.Component {
  render() {
    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
    ].map((title, i) => <Article key={i} title={title}/> )
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
          </div>
        </div>
        <div class="row">{Articles}</div>
      </div>
    )
  }
}