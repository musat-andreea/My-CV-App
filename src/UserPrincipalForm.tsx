import {FormWrapper} from "./FormWrapper";

type UserData = {
    nume: string
    prenume: string
    telefon: string
    adresa: string
}

type UserFormProps = UserData & {

    updateFields: (fields: Partial<UserData>) => void
}
export function UserPrincipalForm({nume, prenume, telefon, adresa, updateFields}: UserFormProps) {

    return (
        <FormWrapper title="Date cu caracter personal">
            <label>Nume: </label>
            <input
                autoFocus
                required
                type="text"
                value={nume}
                onChange={e => updateFields({ nume: e.target.value})}
            />
            <label>Prenume: </label>
            <input
                required
                type="text"
                value={prenume}
                onChange={e => updateFields({ prenume: e.target.value})}
            />
            <label>Numar de telefon: </label>
            <input
                required
                type="text"
                value={telefon}
                onChange={e => updateFields({ telefon: e.target.value})}
            />
            <label>Adresa: </label>
            <input
                required
                type="text"
                value={adresa}
                onChange={e => updateFields({ adresa: e.target.value})}
            />
        </FormWrapper>
    )
}