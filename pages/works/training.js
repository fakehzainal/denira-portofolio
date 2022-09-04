import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
// import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph';
import Layout from "../../components/layouts/article";

const Work = () => {
    return(
        <Layout title="Training">
            <Container>
                <Title>
                    Training <Badge>2022</Badge>
                </Title>
                <P>A Training for "Penguji K3 Pertama"</P>
                <WorkImage src="/images/works/training.jpg" alt="Training" />
                <Meta>Description</Meta>
                <P>
                "Penguji K3" education and training in 2022 is carried out with a Blended Learning pattern and
                the curriculum used has been adapted to LAN Regulation Number 8
                2018 concerning Guidelines for the Implementation of Competency Development
                Civil Servants through E-Learning. The format of the preparation of the modules used in the Education and Training
                The K3 examiner has complied with the Regulation of the Head of LAN Number 5 of 2009
                on Guidelines for Writing Education and Training Modules. The module consists of
                E-Learning module and classical module. E-Learning module to meet the realm
                knowledge, while the classical module is to fulfill the skill domain. Module Contents
                has been validated by the Manpower and Human Resources Education and Training Center together with the Directorate of Human Resources Development
                K3, Directorate General of Manpower Supervision and K3.
                </P>
                <WorkImage src="/images/works/training2.jpeg" alt="Training2" />
                <WorkImage src="/images/works/training3.jpeg" alt="Training3" />
                <WorkImage src="/images/works/training4.jpeg" alt="Training4" />
            </Container>
        </Layout>
    )
}

export default Work