import { Edit, SimpleForm, TextInput, SelectArrayInput } from 'react-admin';
import { ReferenceManyToManyInput } from '@react-admin/ra-relationships';

export const TableaEdit = () => (
    <Edit mutationMode="pessimistic" redirect={false}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="title" />
            <ReferenceManyToManyInput
                source="id"
                reference="tableB"
                through="tableA_tableB"
                using="tableA_id,tableB_id"
            >
                <SelectArrayInput
                    label="TableB"
                    optionText="title"
                    fullWidth
                />
            </ReferenceManyToManyInput>
        </SimpleForm>
    </Edit>
);