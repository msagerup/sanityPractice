import { SyntheticEvent, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from './SignUp.module.scss';

const SignUp = () => {
  const [state, setState] = useState({});

  // Variables
  const navigate = useNavigate();

  /**
   *
   * @param e input values
   * Sets value to state
   */
  const handleInputs = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const name = target.name;

    setState((prevState) => ({
      ...prevState,
      [name]: target.value,
    }));
  };

  const createAccount = async () => {
    const values = JSON.stringify(state);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: values as {} as BodyInit | null | undefined,
    };

    try {
      const response = await fetch('/createUser', options);
      const data = await response.json();

      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form className={styles.SignUp}>
      <Form.Group className='mb-4'>
        <Form.Label>
          User Name 2
          <Form.Control
            type='text'
            placeholder='User name'
            name='username'
            onInput={handleInputs}
          />
        </Form.Label>
      </Form.Group>
      <Form.Group className='mb-4'>
        <Form.Label>
          First name, last name
          <Form.Control
            type='text'
            name='firstName'
            placeholder='First name'
            onInput={handleInputs}
          />
        </Form.Label>
      </Form.Group>
      <Form.Group className='mb-4'>
        <Form.Label>
          Last name
          <Form.Control
            type='text'
            name='lastName'
            placeholder='Last name'
            onInput={handleInputs}
          />
        </Form.Label>
      </Form.Group>
      <Button variant='primary' onClick={createAccount}>
        Create Account
      </Button>
    </Form>
  );
};

export default SignUp;
