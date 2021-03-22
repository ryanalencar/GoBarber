import { Context, createContext, useCallback, useContext, useState } from 'react'

interface IFormContext {
  isShown: any
  registerForm: any
}

const FormContext: Context<IFormContext> = createContext(null)

export function FormProvider({ children }) {
  const [forms, setForms] = useState([])

  const isShown = useCallback(
    uuid => {
      const form = forms.find(f => f.id === uuid)
      return form && !!form.isShown
    },
    [forms]
  )

  const registerForm = useCallback(({ name, ref, shown }) => {
    setForms(oldState => {
      const newForms = oldState.filter(f => f.id !== name)
      newForms.push({ id: name, ref, isShown: !!shown })
      return newForms
    })
  }, [])

  return <FormContext.Provider value={{ isShown, registerForm }}>{children}</FormContext.Provider>
}

export function useForm(id) {
  const { isShown, registerForm } = useContext(FormContext)
  const checkIsShown = useCallback(() => isShown(id), [isShown, id])
  return { isShown: checkIsShown(), registerForm }
}
