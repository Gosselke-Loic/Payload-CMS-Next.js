import { useForm } from '@mantine/form';
import { LoginModel, GlobalLogin } from "@/shared";
import {
    Center,
    Card,
    Title, 
    Stack, 
    TextInput, 
    PasswordInput,
    Group, 
    Button, 
    Divider
} from '@mantine/core';
import { FaFacebook, FaGoogle, FaAcquisitionsIncorporated, FaCheck } from "react-icons/fa";

type Props = {
    data: GlobalLogin
}
export default function LoginComponent({ data }: Props) {

    const loginForm = useForm({
        validateInputOnChange: true,
        initialValues: {    
            email: "",
            password: ""
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : data.emailInput.error),
            password: (value) => (value.length < 8 ? data.passwordInput.error : null),
        }
    })
    
    const submit = (values: LoginModel) => {
        // send login to cms
        console.log(values);
    }

    return (
        <Center className="bg-slate-200 calcNavbar">
            <Stack>
                <span className='flex justify-center mt-6'>
                    <FaAcquisitionsIncorporated color='magenta' className='h-10 w-10' />
                </span>
                <Title align="center" italic>
                    { data.title }
                </Title>
                <Card
                    miw={100}
                    mih={300}
                    shadow="md"
                    radius="md"
                    className="mt-2 max-sm:mx-2"
                >
                    <form className='p-2' onSubmit={loginForm.onSubmit((values) => submit(values))}> 
                        <TextInput
                            className="mb-4"
                            withAsterisk
                            label={data.emailInput.label}
                            placeholder={data.emailInput.placeholder}
                            {...loginForm.getInputProps('email')}
                            autoComplete="false"
                        />
                        <PasswordInput
                            className="mb-8"
                            withAsterisk
                            label={data.passwordInput.label}
                            placeholder={data.passwordInput.placeholder}
                            {...loginForm.getInputProps('password')}
                        />
                        <Group position="center" mt="md">
                            <Button 
                                fullWidth 
                                leftIcon={<FaCheck size={16} />} 
                                color="pink" 
                                variant="outline" 
                                disabled={!loginForm.isValid()} 
                                type="submit"
                            >
                                {data.titleSubmit}
                            </Button>
                        </Group>
                    </form>
                    <Divider className='mt-4 mb-6' label="or continue with" labelPosition="center" />
                    <Group position='center' className='mb-2'>
                        <Button 
                            className='px-20' 
                            leftIcon={<FaFacebook size={24} />} 
                            color="blue" 
                            variant="outline" 
                            type="button" 
                        />
                        <Button 
                            className='px-20' 
                            leftIcon={<FaGoogle size={24} />} 
                            color="red" 
                            variant="outline" 
                            type="button" 
                        />
                    </Group>
                </Card>
            </Stack>    
        </Center>
    )
}