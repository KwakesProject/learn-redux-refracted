import React from 'react'
import { Link } from 'react-router'

// const Main = React.createClass({
//   render() {
//     return (
//       <div>
//         <h1>
//           <Link to="/">Reduxstagram</Link>
//         </h1>
//         { React.cloneElement(this.props.children, this.props) }
//       </div>
//     )
//   }
// })

// Other way of writting the above code
export const Main = props => (
  <div>
    <h1>
      <Link to="/">Reduxstagram</Link>
    </h1>
    { React.cloneElement(props.children, props) }
  </div>
)

export default Main;