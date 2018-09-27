import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import {kebabCase} from "lodash";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 style={{marginBottom: '5rem', textAlign: 'center'}}>CSS Design Memo</h1>
            </div>
            <div className="columns" style={{ flexWrap: 'wrap'}}>
            {posts
              .map(({ node: post }) => (
                <div className="column is-one-third">
                <div
                  className="content"
                  key={post.id}
                >
                  {post.frontmatter.image ? <img src={post.frontmatter.image} alt=""/> : ''}
                  <p style={{marginTop: '1rem'}}>
                    <Link className="has-text-black has-text-weight-bold" to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.frontmatter.path}>
                      Keep Reading →
                    </Link>
                  </p>
                  <ul className="taglist">
                    {post.frontmatter.tags.map(tag => (
                        <li key={tag + `tag`}>
                          <Link to={`/tags/${kebabCase(tag)}/`}><span className="tag is-primary">{tag}</span></Link>
                        </li>
                    ))}
                  </ul>
                </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            tags
            path
            image
          }
        }
      }
    }
  }
`
