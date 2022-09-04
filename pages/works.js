import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import thumbPns from '../public/images/works/pns.jpg';
import thumbTraining from '../public/images/works/training.jpg';

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="pns" title="PNS" thumbnail={thumbPns}>
                        A Quality management system ISO 9001:2008 "Penguji K3 Pertama"
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="training" title="Training" thumbnail={thumbTraining}>
                        A Training for "Penguji K3 Pertama"
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works