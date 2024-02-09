'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
export const TOKEN_KEY = 'logged_token';

export default function useAuth() {
  const router = useRouter();

  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(false);

  function login() {
    try {
      setLoading(true);

      setIsLogged(true);
      router.push('/');

    } catch (error) {
      console.log(error)

    } finally {
      setLoading(false);
    }
  }

  function logout() {
    setIsLogged(false);
    return router.push('/');
  }

  return { isLogged, loading, login, logout };
};
