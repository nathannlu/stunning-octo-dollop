import Link from 'next/link'

const Navbar = () => {
	return (
		<nav className="w-full py-4 mb-8 fixed" style={{
			backgroundColor: 'rgba(255,255,255,.5)',
			backdropFilter: 'blur(20px)',
			borderBottom: '1px solid rgba(0,0,0,.1)',
			zIndex: 9999,
		}}>
			<div className="mx-auto container flex flex-wrap items-center">
				<Link href="/" className="mr-8 font-bold">
					Mercury
				</Link>

				<div className="mx-auto">
					<Link href="/lend" className="mr-8 font-bold">
						Lend
					</Link>
					<Link href="/borrow" className="font-bold">
						Borrow
					</Link>
				</div>

				<div>
					<Link href="/coming-soon">
						<button className="button button--small button--outline">
							Get started
						</button>
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;
