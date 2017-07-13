import React, { Component } from 'react';

// get the link
import Link from './Link'

// import Apollo tools: graphql and gql
import { graphql, gql } from 'react-apollo'

class LinkList extends Component {

  render() {

    // 1. for query & Loading state
    if (this.props.allLinksQuery && this.props.allLinksQuery.loading) {
      return <div>Loading</div>
    }

    // 2. for query & Error state
    if (this.props.allLinksQuery && this.props.allLinksQuery.error) {
      return <div>Error</div>
    }

    // 3. the linksToRender
    const linksToRender = this.props.allLinksQuery.allLinks;

    return (
      <div>
      {linksToRender.map(link => (
        <Link key={link.id} link={link}/>
      ))}
      </div>
    )
  }

}

// 1. make a gql query object
const ALL_LINKS_QUERY = gql`
  # 2. write our query
  query AllLinksQuery {
    allLinks {
      id
      createdAt
      url
      description
    }
  }
`

export default graphql(ALL_LINKS_QUERY, {name: 'allLinksQuery'})(LinkList);
