import React from 'react';
import Box from '../box';
import Container from '../container';
import Text from '../text';
import {FormWrapper} from './form.style';
import {useFormik} from 'formik';
import Button from '../button';
import {navigate} from 'gatsby';
import axios from 'axios';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      help: '',
    },
    onSubmit: values => {
      axios.post('https://mail.ovidiu-stoica.com', values);
      navigate('/thank-you');
    },
  });
  return (
    <FormWrapper>
      <Container noGutter mobileGutter width="800px">
        <Box
          pt="80px"
          flexBox={true}
          justifyContent="center"
          flexDirection="column"
        >
          <Text
            as="h2"
            content="Let's build something great together"
            color="mainText"
            mb="5px"
          />
          <Text
            className="description"
            content="Whatever your ambition, I'd love to help and build your next big idea or lend a hand with a major improvement."
            color="secondaryText"
          />
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <label htmlFor="help">How can I help?</label>
          <textarea
            id="help"
            name="help"
            type="textarea"
            value={formik.values.help}
            onChange={formik.handleChange}
          />

          <Button
            type="submit"
            title="Submit"
            icon={null}
            className="submit-button"
          />
        </form>
      </Container>
    </FormWrapper>
  );
};

export default ContactForm;
