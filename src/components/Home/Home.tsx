import s from './Home.module.css'

interface HomeProps {}

export const Home = ({}: HomeProps) => {
	return (
		<section className={s.home} id='home'>
			<h3>home</h3>
		</section>
	)
}
