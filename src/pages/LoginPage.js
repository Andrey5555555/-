import { Box } from '@mui/material';

import LoginForm from '../components/LoginForm';

function LoginPage() {
  function login(userData) {}

  return (
    <Box mt="24px" display="flex" justifyContent="center">
      <LoginForm onSubmit={login} />
    </Box>
  );
}
export default LoginPage;
