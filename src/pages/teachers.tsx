import * as React from 'react'
import Link from 'gatsby-link'

import "./teachers.scss"



interface teacher {
  name: string;
  phone?: string;
  email?: string;
  urlLates?: string;
}

const teacherList : teacher[] = [
  {
    name: "antonio atta",
  },
  {
    name: "jorge farias",
  },
  {
    name: "fulano de tal",
  },
]




class teacherPage extends React.Component<{}, {}> {
  public render() {

    const teachers = teacherList.map(t => {
      const noInfo = "Sem informação";
      const linkLates = <a target="_blank" src={t.urlLates}>link lattes</a>
      return (
        <tr>
          <td>{t.name? t.name : noInfo}</td>
          <td>{t.phone? t.phone : noInfo}</td>
          <td>{t.email? t.email : noInfo}</td>
          <td>{t.urlLates? linkLates: noInfo}</td>
        </tr>
      )
    })

    return (
      <div>
        <h1>Informações dos professores</h1>

        <table style={{width:"100%"}}>
          <tr>
            <th>nome</th>
            <th>telefone</th> 
            <th>email</th>
            <th>lattes</th>
          </tr>
          {teachers}
        </table>

        {/* <p>Welcome to page 2</p> */}
        {/* <Link to="/">Go back to the homepage</Link> */}
      </div>
    )
  }
}


export default teacherPage
