import { Button, Container, Box, Heading, Image, useColorModeValue, Link } from "@chakra-ui/react"
import NextLink from 'next/link';
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Page = () => {
    return(
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','#B7A2CC')} p={3} mt={3} mb={6} align="center" textColor={useColorModeValue('black.500','#f6feff')}>
                Hello, I&apos;m a PNS based in Balai K3 Bandung!
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Denira Fitria
                    </Heading>
                    <p>PNS ( Penguji K3 Pertama ) </p>
                </Box>
                <Box 
                    flexShrink={0} 
                    mt={{ base: 4, md: 0}} 
                    ml={{ md: 6}} 
                    align="center">
                    <Image 
                        borderColor="whiteAlpha.800" 
                        borderWidth={2} 
                        borderStyle="solid" 
                        maxWidth="100px" 
                        display="inline-block" 
                        borderRadius="full" 
                        src="/images/denira.jpg" 
                        alt="Profile Image" />
                </Box>
            </Box>
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                W o r k
            </Heading>
            <Paragraph>
                    Denira is a PNS and as a "Penguji K3 Pertama" based in Bandung with a
                passion for building and sharing information blog . She has a knack
                for all things testing products, from planning and designing all the
                way to solving real-life problems. When not online, she loves
                to go bed all day long. Currently busy on {' '}
                <NextLink href="/works/training">
                    <Link>Training</Link>
                </NextLink>.
            </Paragraph>
            <Box align="center" my={4}>
                <NextLink href={"/works"}>
                    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                        My Portofolio
                    </Button>
                </NextLink>
            </Box>
        </Section>
        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                B i o
            </Heading>
            <BioSection>
                <BioYear>1993</BioYear>
                Born in Jakarta, Indonesia.
            </BioSection>
            <BioSection>
                <BioYear>2015</BioYear>
                Completed the Bachelor&apos;s of Industrial Engineering at Brawijaya University, Malang.
            </BioSection>
            <BioSection>
                <BioYear>2016</BioYear>
                Worked in Population and Civil Registration Agency at Malang City.
            </BioSection>
            <BioSection>
                <BioYear>2018 to Present</BioYear>
                Worked in K3 Balai Bandung as PNS Penguji K3 Pertama.
            </BioSection>
        </Section>
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
            I ♥
            </Heading>
            <Paragraph>
            Eat, Sleep, Music, Drawing, Photography, K-Drama.
            </Paragraph>
        </Section>
        </Container>
        </Layout>
    )
}

export default Page