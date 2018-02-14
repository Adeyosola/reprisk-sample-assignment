import React, { Component } from 'react'
import ArticlesList from './ArticlesList'
import Sources from './Sources'
import Companies from './Companies'

class Layout extends Component {
	render(){
		return(
			<div>
				<div className="section">
					<ArticlesList/>
				</div>
				<div className="section">
					
					<Sources/>
				</div>
				<div className="section">
					<Companies/>
				</div>

			</div>
		);
	}
}

export default Layout;