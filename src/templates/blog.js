import React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
  query BlogTemplateQuery ( $slug: String! ) {
    contentfulBlogPost(slug: {eq: $slug}){
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
      }
      image {
        gatsbyImageData(width: 200)
        file {
          url
        }
      }
    }
  }
`

const Blog = (props) => {

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
           <>
            <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
            <img
              src={node.data.target.sys.id}
              alt={node.data.target.sys.type}
            />
          </>
        )

      },
    },
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1> {props.data.contentfulBlogPost.title} </h1>
      {/* <img src={props.data.contentfulBlogPost.image.file.url} alt="Hello" /> */}
      <p> {props.data.contentfulBlogPost.publishedDate} </p>
      { renderRichText(props.data.contentfulBlogPost.body, options) /* For some reason we don't need raw here */ }
      <GatsbyImage image={props.data.contentfulBlogPost.image.gatsbyImageData} alt={""} />
    </Layout>
  )
}

export default Blog