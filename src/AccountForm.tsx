import {FormWrapper} from "./FormWrapper";

type UserData = {
    email: string,
    parola: string
}

type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

export function AccountForm({email, parola, updateFields}: UserFormProps) {
    return (
        <FormWrapper title="Crearea cont">
            <label>Email: </label>
            <input
                autoFocus
                required
                type="email"
                value={email}
                onChange={e => updateFields({ email: e.target.value})}
            />
            <label>Parola: </label>
            <input
                required
                type="password"
                value={parola}
                onChange={e => updateFields({ parola: e.target.value})}
            />
        </FormWrapper>
    )
}