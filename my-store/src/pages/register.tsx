import { endpoints } from '@/core';
import { GlobalComponents, GlobalRegister } from '@/shared';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import RegisterComponent from "@/components/register/register.component";

export default function RegisterPage({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <RegisterComponent data={data} />
}

export const getStaticProps: GetStaticProps<{ data: GlobalRegister }> = async() => {
    const request = await fetch(`${endpoints.local.global}/${GlobalComponents.REGISTER}`);
	const data: GlobalRegister = await request.json();

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