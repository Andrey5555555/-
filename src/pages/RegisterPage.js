import { Box } from '@mui/material';

import RegisterForm from '../components/RegisterForm';

function RegisterPage() {
  function register(userData) {}

  return (
    <Box mt="24px" display="flex" justifyContent="center">
      <RegisterForm onSubmit={register} />
    </Box>
  );
}
export default RegisterPage;
