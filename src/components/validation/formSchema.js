import * as yup from 'yup'

export const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'Name is too short - should be 2 characters minimum.'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'Size must be selected'),
    Pepperoni: yup.boolean(),
    Olives: yup.boolean(),
    Feta: yup.boolean(),
    Peppers: yup.boolean(),
    special: yup
        .string()
        .trim()
})