import React, { Component } from 'react'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ArticlesList extends Component {

  render(){

    if (this.props.articlesQuery && this.props.articlesQuery.loading) { 
     return <div>Loading</div>
    }


    if (this.props.articlesQuery && this.props.articlesQuery.error) {
      return <div>Error</div>
    }

    const articles = this.props.articlesQuery.articles 
    return(
      <div dangerouslySetInnerHTML={{ __html: articles[0].html }} />
    )
  }
}

const ARTICLES_QUERY = gql`
  query articlesQuery {
    articles{
      html
    }
  }
`
export default graphql(ARTICLES_QUERY, { name: 'articlesQuery' }) (ArticlesList)
