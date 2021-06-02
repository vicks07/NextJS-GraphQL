import React from 'react';
import { Heading, Text, Box ,Badge, Img  ,SimpleGrid} from '@chakra-ui/react';


const Skills = ({skills}) => {
    return (
        <SimpleGrid columns={[1,2,3]}>
            {
                skills.filter((doc, index) => {
                    if (index < 3) return true;
                }).map(skill => {
                    return (
                        <Badge p={1} colorScheme="telegram">{skill.name}</Badge>
                    )
                })
            }
            
        </SimpleGrid>
    )
}

export default Skills;