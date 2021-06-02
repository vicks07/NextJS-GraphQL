import React from "react";
import { Heading, Text, Box ,Badge, Img  ,SimpleGrid} from '@chakra-ui/react';

const Jobs = ({jobs}) => {
    return (
        <SimpleGrid columns={[1,2]}>
            {jobs.map((job) => {
                let bg= "";
                let badge = "";
                let domain = `https://logo.clearbit.com/${job.company.websiteUrl}`
                if(job.isFeatured){
                    bg = "#f0f5ff"
                    badge = <Badge borderRadius="full" px="2" colorScheme="teal">Featured</Badge>
                }
                return (
                    <div key={job.id} >
                        <Box mb={4} p={4} bg={bg} flexDirection="column" align="center" justify="center">
                            <Img src={domain} width={50} height={50}/>
                            { badge }
                            <Heading as="h2" align="center" size="sm" >
                                {job.title}
                            </Heading>
                            <Text align="center">Company: <Badge colorScheme="purple"> {job.company.name} </Badge></Text>
                            <Text align="center">Skills: {job.tags.filter((tag, index) => {
                                if(index < 3){
                                    return true
                                }
                            }).map(doc => doc.name).join(" | ")} </Text>
                            <Text align="center">Location: {job.locationNames || 'Remote'} </Text>
                        </Box>
                    </div>
                )
            })}
        </SimpleGrid>
    )
};

export default Jobs;
