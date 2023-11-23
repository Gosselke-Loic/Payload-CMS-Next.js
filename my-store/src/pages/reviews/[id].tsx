import { endpoints } from '@/core';
import { ProductModel, ReviewsModel } from '@/shared';
import { GetStaticPaths, GetStaticProps } from 'next';

interface ReviewProductModel {
    id: string;
    name: string;
    reviews: ReviewsModel[];
}
type Props = {
    data: ReviewProductModel
}
export default function Reviews({ data }: Props) {
    return (
        <>
           {data.id}
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return { 
        paths: [],
        fallback: true
    } 
}

export const getStaticProps: GetStaticProps<{ data: ReviewProductModel }> = async ({params}) => {
    if(!params) { 
        return {
            redirect: {
                destination: "/",
                permanent: true
            }
        }
    } 

    const request = await fetch(`${endpoints.local.products}/${params.id}`);
    const { id, name, reviews }: ProductModel = await request.json().then(data => data as ProductModel);
    const data: ReviewProductModel = {
        id: id, 
        name: name, 
        reviews: reviews 
    };
    return {props: { data }} 
}