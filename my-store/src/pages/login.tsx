import { endpoints } from '@/core';
import { GlobalComponents, GlobalLogin } from '@/shared';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import LoginComponent from "@/components/login/login.component";

export default function LoginPage({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <LoginComponent data={data} />
}

export const getStaticProps: GetStaticProps<{ data: GlobalLogin }> = async() => {
    const request = await fetch(`${endpoints.local.global}/${GlobalComponents.LOGIN}`);
	const data: GlobalLogin = await request.json();

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