import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

// get all post
export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

// widget on the homepage get the most recent posts
export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails(){
      posts(
        orderBy: createdAt_ASC
        last: 3
        ){
          title
          featuredImage {
            url
          }
          createdAt
          slug
        }
      }
   `
   const result = await request(graphqlAPI, query);
   return result.posts
  }

  // widget get the similar post on the post page
  export const getSimilarPosts = async () => {
    const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: { slug_not: $slug, AND: {categories_some: { slug_in: $categories }}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
      
   `
   const result = await request(graphqlAPI, query);
   return result.posts
  }

  // get all categories
  export const getCategories = async () => {
    const query = gql`
      query GetGategories {
          categories {
            name
            slug
          }
      }
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.categories;
  };