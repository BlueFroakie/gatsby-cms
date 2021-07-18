import React from "react"
import { graphql, Link, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import * as blogStyles from './blog.module.scss'

const BlogPage = () => {

  const data = useStaticQuery(graphql`
  query BlogQuery {
    allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`)

const posts = data.allContentfulBlogPost.edges

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <h2>Posts</h2>
      <ol className={blogStyles.posts}>
        {
          posts.map((post) => {
            return (
              <li className={blogStyles.post}> 
                <Link to={`${post.node.slug}`}> <h2> {post.node.title} </h2> </Link>
                <p> {post.node.publishedDate} </p>
              </li>
            )
          })
        }
      </ol>

    </Layout>
  )
}

export default BlogPage