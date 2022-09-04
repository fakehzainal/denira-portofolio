import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
// import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph';
import Layout from "../../components/layouts/article";

const Work = () => {
    return(
        <Layout title="PNS">
            <Container>
                <Title>
                    PNS <Badge>2018</Badge>
                </Title>
                <P>A Quality management system ISO 9001:2008 "Penguji K3 Pertama"</P>
                <WorkImage src="/images/works/pns.jpg" alt="Pns" />
                <Meta>Description</Meta>
                    <P>
                        ISO 9001 is a documented procedure and standard practice for system management, which aims to ensure the suitability of a process and product (goods or services) to certain needs or requirements, where certain needs or requirements are determined or specified by the customer and the organization. ISO 9001 is a refinement of ISO 9001. Organizations that have been certified using the ISO 9001 standard can have their certificate renewed using the ISO 9001 standard. Every company aims to maintain its existence in the business world. The existence of consumer demands, competitive demands and performance improvement, requires a quality management system, organized and systematic. ISO 9001 is a quality management system standard, not product management, but products resulting from a quality management system will produce quality products and services that can meet customer satisfaction.
                        Benefits for the company can improve operational performance significantly through increased efficiency, productivity and continuous improvement, so as to increase consumer confidence, and enhance the organization's position in competition in the market. Benefits for consumers can obtain quality products and services in accordance with consumer expectations and benefits for employees, namely increasing employee satisfaction at work and fostering a learning process for success at work.
                        This ISO 9001 training will direct and provide understanding to participants in preparing and compiling proven documentation as the basis for implementation and evaluation, as well as strategies for implementing the ISO 9001 Quality Management System for companies that are committed to producing quality products and services and high performance.
                    </P>
                <WorkImage src="/images/works/pns2.jpg" alt="Pns2" />
                <WorkImage src="/images/works/pns3.jpg" alt="Pns3" />
            </Container>
        </Layout>
    )
}

export default Work