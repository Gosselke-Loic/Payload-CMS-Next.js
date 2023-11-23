import { Brands } from "@/shared"
import { Grid, Title } from "@mantine/core"

type Props = {
    data: Brands
}
export default function BrandsComponent({data}: Props) {
    return (
        <Grid grow className="bg-gray-300 my-4 mx-2 rounded-lg pt-2 pb-2">
            <Grid.Col md={12} lg={12}>
                <Title className="text-center text-lg font-semibold leading-8 text-black">
                    {data.title}
                </Title>
            </Grid.Col>
            {data.brands.map((item) => (
                <Grid.Col xs={6} sm={6} md={4} lg={3} key={item.alt}>
                    <img
                        className="max-h-12 w-full object-contain"
                        src={item.src}
                        alt={item.alt}
                        width={158}
                        height={48}
                    />
                </Grid.Col>
            ))}
        </Grid>          
    )
}