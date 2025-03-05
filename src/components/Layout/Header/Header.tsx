import { useState } from 'react'
import { Nav } from '../..'
import s from './Header.module.css'
import { FaXing } from 'react-icons/fa6'
import { FaAlignRight } from 'react-icons/fa6'

export const Header = () => {
	const [navMenu, setNavMenu] = useState(false)

	const toggleMenu = () => {
		setNavMenu(!navMenu)
	}

	return (
		<header className={s.header}>
			<div className={s.container}>
				<div className={s.headerWrapper}>
					<a href='' className={s.logo}>
						MediroGTH
					</a>
					<Nav toggleMenu={navMenu} />
					<div className={s.navMenuBtn} onClick={toggleMenu}>
						{navMenu ? <FaXing /> : <FaAlignRight />}
					</div>
				</div>
			</div>
		</header>
	)
}
