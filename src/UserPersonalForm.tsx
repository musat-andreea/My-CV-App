import {FormWrapper} from "./FormWrapper";

type UserData = {
    dataNasterii: string
    nationalitate: string
    linkedin: string
}

type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

export function UserPersonalForm({dataNasterii, nationalitate, linkedin, updateFields}: UserFormProps) {
    return (
        <FormWrapper title = "Date Personale">
            <label>Data Nasterii: </label>
            <input
                autoFocus
                required
                type="text"
                value={dataNasterii}
                onChange={e => updateFields({ dataNasterii: e.target.value})}
            />
            <label>Nationalitate: </label>
            <input
                required
                type="text"
                value={nationalitate}
                onChange={e => updateFields({ nationalitate: e.target.value})}
            />
            <label>LinkedIn: </label>
            <input
                required
                type="text"
                value={linkedin}
                onChange={e => updateFields({ linkedin: e.target.value})}
            />
        </FormWrapper>
    )
}