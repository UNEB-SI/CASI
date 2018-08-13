import * as React from 'react'
import Link from 'gatsby-link'
import Banner from '../components/banner';
import Footer from '../components/footer';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data:{
      site:{
          siteMetadata:{
              title: string;
          }
      }
      allMarkdownRemark: {  
        totalCount: number
      }
  }
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context)
  }
  public render() {
    return (
      <div>
        <h1>Hello world people</h1>
        <p>
            esse site está em construção
        </p>
        {/* <Link to="/blog/">Go to Blog</Link> */}
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
      site{
          siteMetadata{
              title
          }
      }
      allMarkdownRemark {  
        totalCount
      }
  }
`