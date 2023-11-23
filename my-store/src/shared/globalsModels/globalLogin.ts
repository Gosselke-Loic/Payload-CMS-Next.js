export interface GlobalLogin {
    id: string,
    title: string,
    emailInput: {
        label: string,
        placeholder: string,
        error: string
    },
    passwordInput: {
        label: string,
        placeholder: string,
        error: string
    },
    titleSubmit: string
}