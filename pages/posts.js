import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { PostGridItem } from '../components/grid-item';

import thumbK3 from '../public/images/contents/denira.jpg';

const Posts = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Posts
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <PostGridItem id="urgencyk3" title="UrgencyK3" thumbnail={thumbK3}>
                        The urgency of K3 during the Covid-19 Pandemic
                    </PostGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Posts