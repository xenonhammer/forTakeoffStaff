import { useState } from 'react';

export const useAuth = () => {
	const [ loading, setLoading ] = useState(false);
	const [ notice, setNotice ] = useState(null);
	const [ isAuth, setIsAuth ] = useState(false);

	const checkForm = async (form) => {
		setLoading(true);

		try {
			const response = await fetch('https://localhost:3999/api/users');
			const users = await response.json();
			for (let user of users) {
				if (user.login === form.login && user.password === form.password) {
          setNotice('Вы вошли');
          localStorage.setItem('user', JSON.stringify({
            login: form.login, password: form.password
          }))
          setIsAuth(true);
				}
			}
		} catch (error) {
      setNotice(error);
      return false
		} finally {
			setLoading(false);
		}
  };
  
  const clearNotice = () => setNotice(null);
  
	return { loading, notice, isAuth, checkForm, clearNotice };
};
