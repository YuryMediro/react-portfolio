import { Link } from 'react-scroll'
import s from './nav.module.css'
import clsx from 'clsx'

interface NavProps {
	toggleMenu: boolean
}
export const Nav = ({ toggleMenu }: NavProps) => {
	const items = ['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact']
	return (
		<nav className={clsx(s.nav, toggleMenu && s.nav && s.active)}>
			<div className={clsx(s.navMenu, toggleMenu && s.navMenu && s.active)}>
				{items.map((item, index) => (
					<Link to={item} key={index} className={s.navLink}>
						{item}
					</Link>
				))}
			</div>
		</nav>
	)
}
