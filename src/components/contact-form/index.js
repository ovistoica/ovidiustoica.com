import React from 'react';
import Box from '../box';
import Container from '../container';
import Text from '../text';
import {FormWrapper} from './form.style';
import {useFormik} from 'formik';
import Input from '../input';
import Button from '../button';
import {navigate} from 'gatsby';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      help: '',
    },
    onSubmit: () => {
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
        <form
          // onSubmit={formik.handleSubmit}
          action="https://usebasin.com/f/84cc2730e401"
        >
          <Input
            label="Name"
            id="help"
            inputType="text"
            onChange={formik.handleChange}
            value={formik.values.help}
          />
          <Input
            label="Email"
            id="email"
            inputType="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <Input
            label="How can I help?"
            id="help"
            inputType="textarea"
            onChange={formik.handleChange}
            value={formik.values.help}
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
