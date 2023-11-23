import { Badge } from "@mantine/core";
import { FaEuroSign } from "react-icons/fa";

type Props = {
    stock: number;
    price: number;
}

export default function StockAndPriceProduct({ stock, price }: Props) {
    return (
        <span className="flex">
            <p className="text-3xl font-semibold ml-4 tracking-tight text-gray-900 flex"> {price} <FaEuroSign className="h-6 w-6 marginTopForDivise"/> </p>
            <Badge className='marginTopForStock ml-4' color={(stock > 0) ? "green": "red"} size="xl">
                {stock} Stock
            </Badge>
        </span>
    )
}