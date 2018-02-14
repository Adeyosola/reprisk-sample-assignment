import React, { Component } from 'react'
import externalLink from '../externalLink.svg';
import de from '../Flags/de.svg'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Companies extends Component {

  render(){

    if (this.props.articlesQuery && this.props.articlesQuery.loading) { 
     return <div>Loading</div>
    }

    if (this.props.articlesQuery && this.props.articlesQuery.error) {
      return <div>Error</div>
    }

    const empty = "No Company returned"
    const companies = this.props.articlesQuery.articles   
    return(
      <div className="section-information">
        <div >
          <h3 className="section-header">Companies</h3>
          <hr />
        </div>
        {
          companies.length ?
          <ul>
            {
              companies.map((company, index) =>
                (
                  <li key={index}>
                    {
                      company.companies.map(
                        (comp, i) =>
                        <div key={i}>
                          {comp.name}
                          <a href={comp.website}>
                            <img src={externalLink} className="external-link" alt="external-link" />
                          </a>
                          <img src={de} className="flag" alt="de flag" />
                          <hr /> 
                        </div>
                      )

                    }
                    
                  </li>
                )              
              )              
            }                  
          </ul> : <div>{empty} </div>
        }       	
      </div>
    )
  }
}

const ARTICLES_SOURCES_QUERY = gql`
  query articlesQuery {
  	articles{
  		companies {
        name
        website
        location
      }
    }
  }
`
export default graphql(ARTICLES_SOURCES_QUERY, { name: 'articlesQuery' }) (Companies)
