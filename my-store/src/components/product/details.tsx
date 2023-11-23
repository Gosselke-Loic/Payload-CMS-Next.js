import { DetailsModel } from "@/shared";

type Props = {
    details: DetailsModel[]
}

export default function DetailsProduct({ details }: Props) {
    const DetailsItems = details.map(
        (item) => (
            <div className="p-2 flex" key={item.id}>
                <p className="text-gray-600"> <span className='font-medium underline'> {item.name}</span>: {item.value} </p>
            </div>
        )
    );
    return (
        <>
            {DetailsItems}
        </> 
    )
}