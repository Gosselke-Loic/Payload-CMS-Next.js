import { TagsModel } from "@/shared";
import { Badge } from "@mantine/core";

type Props = {
    tags: TagsModel[];
}

export default function TagsProduct({ tags }: Props) {
    const tagsItems = tags.map(
        (item) => (
            <Badge component="a" href="" className="mr-2 max-sm:mb-2 cursor-pointer" color="indigo" size="lg" key={item.id}>
                {item.name}
            </Badge>
        )
    );
    return (
        <div className="mt-10">
            <div className="mt-4">
                {tagsItems}
            </div>
        </div>
    )
}