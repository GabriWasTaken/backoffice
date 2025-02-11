import { useHandleSignInCallback } from '@logto/react';
import { useNavigate } from 'react-router';

export const LoginCallback = () => {
  const navigate = useNavigate();
  const { isLoading } = useHandleSignInCallback(() => {
    navigate("/dashboard");
    localStorage.setItem("isAuthenticated", "true");
    // Navigate to root path when finished
  });

  // When it's working in progress
  if (isLoading) {
    return <div>Redirecting...</div>;
  }

  return null;
};