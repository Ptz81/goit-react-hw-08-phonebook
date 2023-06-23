import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from 'components/Header/Header'


const Layout = () => {

	return (
		<div className='container'>
			<Header/>
			<Suspense>
				<Outlet />
			</Suspense>
		</div>
	)
}

export default Layout
