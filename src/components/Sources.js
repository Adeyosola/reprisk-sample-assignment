import React, { Component } from 'react'
import dateFormat from 'dateformat'

import { graphql,  compose  } from 'react-apollo'
import gql from 'graphql-tag'

class Sources extends Component {

  render(){

    if (this.props.articlesQuery && this.props.articlesQuery.loading) { 
     return <div>Loading</div>
    }

    if (this.props.articlesQuery && this.props.articlesQuery.error) {
      return <div>Error</div>
    }

    const sources = this.props.articlesQuery.articles
    const date = sources[0].date
    const loc = this.props.locationsQuery.locations
    console.log(loc)
    // console.log(loc[0].name)
    return(
    	<div>
	      <div className="section-header">
	      	<h3>Source Information</h3>
	      </div>
	      <div className="section-information">
	      	<h4>Name</h4>
	      </div>
	      <div className="section-information">
	      	{sources[0].source.name}
	      </div>
	      <div className="section-information">
	      	<h4>Location</h4>
	      </div>
	      <div className="section-information">
	      	{sources[0].source.location}
	      </div>
	      <div className="section-information">
	      	<h4>Description</h4>
	      </div>
	      <div className="section-information">
	      	{sources[0].source.description}
	      </div>
	      <div className="section-information">
	      	<h4>Article Date</h4>
	      </div>
	      <div className="section-information">
	     	{dateFormat(date, "isoDate")}	      	
	      </div>
	    </div>
    )
  }
}

const ARTICLES_SOURCES_QUERY = gql`
  query articlesQuery {
  	articles{
  		date
  		source{
  			name
         	description
         	location
       	}
    }
  }
`
const LOCATIONS_QUERY = gql`
  query locationsQuery{
    locations{
      name
      code
    }
  }
`
export default compose(graphql(ARTICLES_SOURCES_QUERY, { name: 'articlesQuery' }), graphql(LOCATIONS_QUERY, {name: 'locationsQuery'})) (Sources)

