export interface GlobalRegister {
    id: string
    title: string,
    nameInput: {
        label: string,
        placeholder: string,
		error: string
    },
    lastnameInput: { 
        label: string,
        placeholder: string,
		error: string
    },
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
    passwordConfirmInput: { 
        label: string, 
        placeholder: string,
		error: string
    },
    checkboxes: [
        {
          label: string,
          id: string
        },
        {
          label: string,
          id: string
        }
      ],
      inputsErrors: [
        {
          inputName: string,
          error: string,
          id: string
        },
        {
          inputName: string,
          error: string,
          id: string
        },
        {
          inputName: string,
          error: string,
          id: string
        },
        {
          inputName: string,
          error: string,
          id: string
        },
        {
          inputName: string,
          error: string,
          id: string
        }
    ],
    titleSubmit: string 
}