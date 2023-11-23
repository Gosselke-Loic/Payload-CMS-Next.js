import { endpoints } from '@/core';
import { GlobalHomepage, GlobalComponents} from '@/shared';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Homepage from '../components/homepage/homepage.component';

export default function Home({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
	return <Homepage data={data} />
}

export const getStaticProps: GetStaticProps<{data: GlobalHomepage}> = async() => {
	const request = await fetch(`${endpoints.local.global}/${GlobalComponents.HOMEPAGE}`);
    const data: GlobalHomepage = await request.json();

	if(!data) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            },
        }
    }

    return {
        props: {
            data
        }
    }
}