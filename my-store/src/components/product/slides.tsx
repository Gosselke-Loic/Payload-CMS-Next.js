import Image from "next/image";
import { ImagesModel } from "@/shared";
import { Carousel } from "@mantine/carousel";

type Props = {
    slider: ImagesModel[]
}

export default function SlidesProduct({ slider }: Props) {
    const slides = slider.map((item) => (
        <Carousel.Slide key={item.alt}>
            <img src={item.src} className="rounded-lg" alt={item.alt}/>
        </Carousel.Slide>
    ));
    return (
        <Carousel
            maw={475}
            mx="auto"
            className="mt-4"
            controlsOffset="xl" 
            controlSize={35} 
            dragFree
        >
            {slides}
        </Carousel>
    )
}