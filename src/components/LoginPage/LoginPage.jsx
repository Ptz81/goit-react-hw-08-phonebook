import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LogIn } from 'redux/auth/auth'

export const LoginPage = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

	const handleChange = ({ target: { value, name } }) => {
		name === 'email'? setEmail(value):setPassword(value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
LogIn({password, email})
	}

  return (
      <div className='container'>
      <h2>Log In Form</h2>
<form onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='exampleInputEmail1' className='form-label'>
						Email address
					</label>
					<input
						name='email'
						type='email'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
						onChange={handleChange}
						value={email}
					/>
					<div id='emailHelp' className='form-text'>
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className='mb-3'>
					<label
						htmlFor='exampleInputPassword1'
						className='form-label'
					>
						Password
					</label>
					<input
						name='password'
						type='password'
						className='form-control'
						id='exampleInputPassword1'
						onChange={handleChange}
						// onBlur={validator}
						value={password}
					/>
				</div>
				<button
					type='submit'
					className='btn btn-primary'
					disabled={!email||!password
					}
				>
					Log In
        </button>
        <NavLink to='/signUp'>Sign Up</NavLink>
			</form>
      </div>

		)
}


