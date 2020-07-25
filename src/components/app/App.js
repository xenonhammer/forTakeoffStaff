import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth.hook';
import { useNotice } from '../../hooks/notice.hook';


function App() {
	const [ form, setForm ] = useState({ login: '', password: '' });
	const { isAuth, notice, loading, checkForm, clearNotice } = useAuth();
	const showNotice = useNotice()

	const changerHandler = event => {
	  setForm({
	    ...form,
	    [event.target.id]: event.target.value
	  })
	};

  const submitHandler = event => {
    event.preventDefault()

    checkForm(form);
  }

	useEffect(() => {
	  showNotice(notice)
	  clearNotice()
	}, [notice, showNotice, clearNotice])

	return (
		<div className="row">
			<div className="col s12 offset-m3 m6">
				<form 
          className="col s12 card blue-grey darken-1 white-text center-align"
          onSubmit={submitHandler}
        >
					<div className="card-content">
						<div className="card-title center-align">Authentication</div>

						<div className="input-field col s12">
							<input
								autoComplete="true"
								id="login"
								type="text"
								className="validate"
								onChange={changerHandler}
							/>
							<label htmlFor="login">Login</label>
						</div>

						<div className="input-field col s12">
							<input
								autoComplete="true"
								id="password"
								type="password"
								className="validate"
								onChange={changerHandler}
							/>
							<label htmlFor="password">Password</label>
						</div>

						<button
							className="btn waves-effect waves-light"
							type="submit"
							name="action"
							
						>
							Login
						</button>
					</div>
				</form>
    {
      loading && 
      <div className="progress">
				<div className="indeterminate" />
			</div>
    }
			</div>
		</div>
	);
}

export default App;
