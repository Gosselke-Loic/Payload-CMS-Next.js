import { ProductModel } from "@/shared";
import { Card, Text, Badge, Button, Image } from "@mantine/core";
import Link from "next/link";

type Props = {
    item: ProductModel;
}
export default function CardsHomepage({item}: Props) {
    return (
        <Card className="lg:h-full lg:flex lg:flex-col" shadow="sm" radius="sm" withBorder key={item.id}>
            <Card.Section>
                <Image src={item.slider[0].src} height={"auto"} alt={item.slider[0].alt} />
            </Card.Section>
            <div>
                <Text className="font-bold text-xl mt-2">
                    {item.name}
                </Text>
                 
                {item.tags.map((badge) => (
                    <Badge key={badge.id} className="ml-1 my-2" color="pink" variant="light">
                        {badge.name}
                    </Badge>
                ))}
                
            </div>
            <Text className="lg:flex-grow font-semibold" size="sm" color="dimmed">
                {item.description}
            </Text>
            <Button component={Link} href={`/product/${item.id}`} variant="outline" color="blue" fullWidth mt="md" radius="md">
                See product
            </Button>
        </Card>  
    )
}