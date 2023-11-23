import Link from "next/link";
import { Breadcrumbs } from "@mantine/core";
import { BreadcrumbsModel } from "@/shared";

type Props = {
    breadcrumbs: BreadcrumbsModel[]
}

export default function BreadcrumbsProduct({ breadcrumbs }: Props) {
    const breadcrumbsItems = breadcrumbs.map( 
        (item) => (
            <Link className='font-semibold hover:text-red-200' href={""} key={item.id}>
                {item.name}
            </Link>
        )
    );
    return (
        <nav aria-label="Breadcrumb">
            <div className="flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <Breadcrumbs>
                    {breadcrumbsItems}
                </Breadcrumbs>
            </div>
        </nav>
    )
}