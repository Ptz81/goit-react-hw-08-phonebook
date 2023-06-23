import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { SignUp } from 'redux/auth/auth'

export const SignUpPage = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const navigate = useNavigate()

	const handleChange = ({ target: { value, name } }) => {
    name === 'email' ? setEmail(value):name === 'password'? setPassword(value):setName(value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
    SignUp({
      name,
      email,
      password
    }).then(()=>navigate('/login'))
	}

  return (
    <div className='container'>
      <h2 className='title'>Sign Up Form</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
					<label htmlFor='exampleInputEmail1' className='form-label'>
						Name
					</label>
					<input
						name='name'
						type='name'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
						onChange={handleChange}
						value={name}
					/>
				</div>
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
						value={password}
					/>
				</div>
				<button
					type='submit'
					className='btn btn-primary'
					disabled={!email||!password
					}
        >
          Sign Up
        </button>
        <NavLink to='/login'>Log In</NavLink>
			</form>
      </div>

		)
}


