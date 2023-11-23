import { Grid, Stack, Text, Paper, UnstyledButton, ActionIcon } from "@mantine/core";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaYoutube, FaAcquisitionsIncorporated } from "react-icons/fa";

type ContentSection = {
    title: string;
    link: string;
}
type LinksContent = {
    titleSection: string;
    content: ContentSection[];
}
type FixedContent = {
    icon: string;
    text: string;
    linksSocialMedia: {
        facebook: string;
        instagram: string;
        twitter: string;
        github: string;
        youtube: string;
    }
}

interface ContentFooter {
    fixedContent: FixedContent;
    Cols: LinksContent[];
}

const data: ContentFooter = {
    fixedContent: {
        icon: "",
        text: "asfjiaöosjföasf",
        linksSocialMedia: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
            github: "#",
            youtube: "#"
        }
    },
    Cols: [
        {
            titleSection: "Solutions",
            content: [
                {
                    title: "Marketing",
                    link: "#"
                },
                {
                    title: "analytics",
                    link: "#"
                },
                {
                    title: "Commerce",
                    link: "#"
                },
                {
                    title: "Insights",
                    link: "#"
                }
            ]
        },
        {
            titleSection: "Support",
            content: [
                {
                    title: "Pricing",
                    link: "#"
                },
                {
                    title: "Documentation",
                    link: "#"
                },
                {
                    title: "Guides",
                    link: "#"
                },
                {
                    title: "API Status",
                    link: "#"
                }
            ]
        },
        {
            titleSection: "Company",
            content: [
                {
                    title: "About",
                    link: "#"
                },
                {
                    title: "Blog",
                    link: "#"
                },
                {
                    title: "Jobs",
                    link: "#"
                },
                {
                    title: "Press",
                    link: "#"
                },
                {
                    title: "Partners",
                    link: "#"
                },
            ]
        },
        {
            titleSection: "Legal",
            content: [
                {
                    title: "Claim",
                    link: "#"
                },
                {
                    title: "Privacy",
                    link: "#"
                },
                {
                    title: "Terms",
                    link: "#"
                }
            ]
        },
    ]
};

export default function FooterComponent() {
    // new component
    const gridColsFooter = data.Cols.map((item) => {
        const content = item.content.map((contentButton) => (
            <UnstyledButton key={contentButton.title} component="a" href={contentButton.link}>
                {contentButton.title}
            </UnstyledButton>
        ))

        return (
            <Grid.Col key={item.titleSection} lg={2} md={6} sm={12}>
                <Stack spacing="lg">
                    <Text size={"lg"} fw={500}>{item.titleSection}</Text>
                    {content}
                </Stack>
            </Grid.Col>
        )
    });
    
    return (
        <Paper p="sm" className="w-full px-8 py-12">
            <Grid>
                <Grid.Col lg={4} md={6} sm={12}>
                    <Stack spacing="sm">
                        <ActionIcon color="indigo" size="xl" variant="light">
                            <FaAcquisitionsIncorporated color="magenta" className="h-8 w-8" />
                        </ActionIcon>
                        <Text fw={500} className="pr-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Text>
                        <div className="flex">
                            <ActionIcon color="indigo" size="xl" variant="light">
                                <FaFacebook className="h-6 w-6" />
                            </ActionIcon>
                            <ActionIcon color="grape" size="xl" variant="light">
                                <FaInstagram className="h-6 w-6" />
                            </ActionIcon>
                            <ActionIcon color="blue" size="xl" variant="light">
                                <FaTwitter className="h-6 w-6" />
                            </ActionIcon>
                            <ActionIcon color="red" size="xl" variant="light">
                                <FaYoutube className="h-6 w-6" />
                            </ActionIcon>
                            <ActionIcon color="dark" size="xl" variant="light">
                                <FaGithub className="h-6 w-6" />
                            </ActionIcon>
                        </div>
                    </Stack>
                </Grid.Col>
                {gridColsFooter}
            </Grid>
        </Paper>
    )
}