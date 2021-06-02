import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import { Heading, Box, Flex,Divider, Stack} from '@chakra-ui/react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import Jobs from "../Components/Jobs";

export default function Home(results) {
  const initialStates = results;
  const [ jobs, setCharacters ] = useState(initialStates.jobs);
  return (
    <div>
      <Flex direction="column" justify="center" align="center">
        <Head>
          <title> GraphQL.jobs</title>
          <link rel="icon" href="favicon.ico"/>
        </Head>

        <Box mb={4} w="100%" h="200px" 
          bgGradient={["linear(to-tr, teal.300,yellow.400)","linear(to-t, blue.200, teal.500)","linear(to-b, orange.100, purple.300)",]} 
          flexDirection="column" align="center" justify="center" py={8}
        >
          <Heading as="h1" size="2xl" mb={8}>
            Work with <Box as="span" color="white" mb={8}> GraphQL </Box>
          </Heading>
          <Heading as="h3" size="xl" mb={8}>
            in a modern startup
          </Heading>
        </Box>
        <Stack direction="row" h="10px" p={4}>
          <Divider orientation="horizontal" />
        </Stack>
      </Flex>
      <Jobs jobs={jobs}/>
      <footer className={styles.footer}>
        Created by Vikram
      </footer>
    </div>
  )
}

export async function getStaticProps(){
  const client = new ApolloClient({
    uri: 'https://api.graphql.jobs/',
    cache: new InMemoryCache(),
  });

  const {data} = await client.query({
    query: gql`
    query{
      jobs(input: {
        type: ""
        slug: ""
      }){
        id
        title
        slug
        commitment {
          title
        }
        cities {
          name
        }
        countries {
          name
        }
        description
        tags{
          name
        }
        isPublished
        isFeatured
        locationNames
        userEmail
        postedAt
        createdAt
        updatedAt
        company {
          name
          logoUrl
          websiteUrl
        }
        applyUrl
      }
    }
    `
  })
  return {
    props: {
      jobs: data.jobs
    }
  }
  
}