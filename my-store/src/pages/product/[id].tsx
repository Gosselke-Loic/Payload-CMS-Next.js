import { endpoints } from '@/core';
import { ProductModel } from '@/shared';
import { Button, Grid, Paper } from '@mantine/core';
import { GetStaticProps, GetStaticPaths } from 'next';

//subComponents
import TagsProduct from '@/components/product/tags';
import SlidesProduct from '@/components/product/slides';
import DetailsProduct from '@/components/product/details';
import ReviewsProduct from '@/components/product/reviews';
import BreadcrumbsProduct from '@/components/product/breadcrumbs';
import StockAndPriceProduct from '@/components/product/stockAndPrice';

type Props = {
    data: ProductModel
}

export default function Product({ data }: Props) {
    const product = new ProductModel(data);
    
    return (
        <div className="bg-slate-50">
            <div className="pt-6">
                <BreadcrumbsProduct breadcrumbs={product.breadcrumbs} />
                <Grid className="w-full">
                    <Grid.Col lg={5} md={5} className="ml-2 mb-4 min-[1300px]:mr-16">
                        <SlidesProduct slider={product.slider} />
                    </Grid.Col>
                    <Grid.Col lg={6} md={6} className="px-6 lg:my-auto">
                        <Paper shadow="sm" radius="md" p="xl">
                            
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                            

                            <div className="py-4 lg:pt-6 lg:pr-8">
                                <div>
                                    <div className="space-y-6">
                                        <p className="text-base text-justify font-normal text-gray-900">{data.description}</p>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <h2 className="text-lg font-medium text-gray-900">Information</h2>
                                    <div className='ml-2 mt-2'>
                                        <div className="p-2 flex bg-slate-100">
                                            <p className="text-gray-600"> <span className='font-medium underline'>Date of parution</span>: {product.price} </p>
                                        </div>
                                        <DetailsProduct details={product.details} />
                                    </div>
                                </div>
                                <TagsProduct tags={product.tags} />
                            </div>
                        </Paper>
                    </Grid.Col>
                    <Grid.Col lg={12} md={12} className="px-8 lg:my-auto">
                        <div className="mt-2">
                            <h2 className="sr-only">Product information</h2>
                            <StockAndPriceProduct stock={product.stock} price={product.price} />
                            <ReviewsProduct computedAverage={product.computedAverage} computedReviews={product.computedReviews} />
                            <form className="mt-8 mb-4">
                                <Button
                                    fullWidth
                                    color="blue" 
                                    variant="outline" 
                                    size="md"
                                    type="submit"
                                >
                                    Add to bag
                                </Button>
                            </form>
                        </div>
                    </Grid.Col>
                </Grid>
            </div>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const fetching = await fetch(endpoints.local.products);
    const data: ProductModel[] = await fetching.json();
   
    const paths = data.map((item) => ({
        params: { id: item.id }
    }))
    return { paths, fallback: false } 
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if(!params) { 
        return {
            notFound: true
        }
    } 

    const fetching = await fetch(`${endpoints.local.products}/${params.id}`);
    const data: ProductModel = await fetching.json();
    return { props: { data } } 
}