import { NewArrivals } from "@/shared";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from '@mantine/hooks';
import { Title, useMantineTheme } from '@mantine/core';
import CardsHomepage from "../bulding-components/cards-homepage.component";

type Props = {
    data: NewArrivals
}
export default function NewArrivalsComponent({data}: Props) {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
    const slides = data.products.map((item) => (
        <Carousel.Slide gap={"md"} sx={{ borderRadius: "rounded-lg" }} key={item.id}>
            <CardsHomepage item={item} />
        </Carousel.Slide>
    ))

    return (
        <>
            <Title className="ml-6 max-md:text-center">
               {data.principalTitle ?? "New Arrivals"} 
            </Title>
            <Carousel 
                slideSize="25%"
                align="center"
                sx={{ margin: "1rem 0 1rem 0", padding: "0 1rem 0 1rem" }} 
                controlsOffset="xl" 
                controlSize={35} 
                dragFree
                slidesToScroll={mobile ? 1 : 2}
                breakpoints={[
                    { maxWidth: 'md', slideSize: '45%' },
                    { maxWidth: 'sm', slideSize: '90%', slideGap: 0 },
                ]}
            >
                { slides }
            </Carousel>
        </>
    )
}