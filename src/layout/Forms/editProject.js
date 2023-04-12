import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Button } from '@mui/material';


function ProjectForm({ initialValues, onSubmit, onCancel }) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Field
            component={TextField}
            name="pic"
            label="Pic URL"
            fullWidth
            style={{ marginBottom: '1rem' }}
          />
          <Field
            component={TextField}
            name="title"
            label="Project Title"
            fullWidth
            style={{ marginBottom: '1rem' }}
          />
          <Field
            component={TextField}
            name="description"
            label="Project Description"
            fullWidth
            multiline
            rows={4}
            style={{ marginBottom: '1rem' }}
          />
          <Button type="submit" disabled={isSubmitting}>
            Save
          </Button>
          <Button type="button" onClick={onCancel}>
            Cancel
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default ProjectForm;
