import {
    Center,
    Card,
    Title, 
    Stack, 
    TextInput, 
    PasswordInput, 
    Checkbox,
    Group, 
    Button, 
    Divider
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { GlobalRegister, RegisterModel } from "@/shared";
import { FaFacebook, FaGoogle, FaAcquisitionsIncorporated, FaCheck } from "react-icons/fa";

const regex: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
const checkPassword = (value: string): boolean => {
    const test: boolean = regex.test(value);
    if(test) return true;
    return false;
}

type Props = {
    data: GlobalRegister
}

export default function RegisterComponent({ data }: Props) {
    const registerForm = useForm({
        validateInputOnChange: true,
        initialValues: {
            name: "",
            lastname: "",
            email: "",
            password: "",
            passwordConfirm: "",
            newsletter: false,
            generalConditions: false
        },
        validate: {
            name: (value) => (value.length < 2 ? data.nameInput.error : null),
            lastname: (value) => (value.length < 2 ? data.lastnameInput.error : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : data.emailInput.error),
            password: (value) => (checkPassword(value) ? null : data.passwordInput.error),
            passwordConfirm: (value, values) => (value !== values.password ? data.passwordConfirmInput.error : null),
        }
    })

    const submit = (values: RegisterModel) => {
        // Create user
        console.log(values)
    }

    return (
        <Center
            className="bg-slate-200 calcNavbar"
        >
            <Stack>
                <span className='flex justify-center mt-6'>
                    <FaAcquisitionsIncorporated color='magenta' className='h-10 w-10' />
                </span>
                <Title align="center" italic>
                    {data.title}
                </Title>
                <Card
                    miw={100}
                    mih={300}
                    shadow="md"
                    radius="md"
                    className="mt-2 max-sm:mx-2"
                >
                    <form className='p-4' onSubmit={registerForm.onSubmit((values) => submit(values))}> 
                        <TextInput
                            className="mb-4"
                            withAsterisk
                            label={data.nameInput.label}
                            placeholder={data.nameInput.placeholder}
                            {...registerForm.getInputProps('name')}
                        />
                        <TextInput
                            className="mb-4"
                            withAsterisk
                            label="Lastname"
                            placeholder="Your lastname"
                            {...registerForm.getInputProps('lastname')}
                        />
                        <TextInput
                            className="mb-4"
                            withAsterisk
                            label="Email"
                            placeholder="your@email.com"
                            {...registerForm.getInputProps('email')}
                            autoComplete="false"
                        />
                        <PasswordInput
                            className="mb-4"
                            withAsterisk
                            label="Password"
                            placeholder="Password"
                            {...registerForm.getInputProps('password')}
                        />
                        <PasswordInput
                            className="mb-6"
                            withAsterisk
                            label="Comfirm password"
                            placeholder="comfirm your password"
                            {...registerForm.getInputProps('passwordConfirm')}
                        />
                        <div className='p-2 pb-4'>
                            <Checkbox
                                label="Oui, je souhaite recevoir la newsletter avec des offres exclusives."
                                className='mb-4'
                                {...registerForm.getInputProps('newsletter')}
                            />
                            <Checkbox
                                label="En créant le compte, vous acceptez les Condition General."
                                {...registerForm.getInputProps('generalConditions')}
                            />
                        </div>
                        <Group position="center" mt="md">
                            <Button className='px-16' leftIcon={<FaCheck size={16} />} color="pink" variant="outline" disabled={!registerForm.isValid()} type="submit">Register</Button>
                        </Group>
                    </form>
                    <Divider className='mt-4 mb-6' label="or register with" labelPosition="center" />
                    <Group position='center' className='mb-2'>
                        <Button className='px-20' leftIcon={<FaFacebook size={24} />} color="blue" variant="outline" type="button" />
                        <Button className='px-20' leftIcon={<FaGoogle size={24} />} color="red" variant="outline" type="button" />
                    </Group>
                </Card>
            </Stack>
        </Center>
    )
}