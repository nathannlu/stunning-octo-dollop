import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import NumberIcon from '../components/NumberIcon';

const Borrower = () => {
	const [selectedItem, setSelectedItem] = useState(0);

	return (
		<>
      <Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;1,500&display=swap" rel="stylesheet" />
      </Head>
			<header style={{
				background: '#0052FF'
			}}>
				<div className="mx-auto container h-screen flex flex-wrap items-center px-4 text-center text-white">
					<div className="pt-4 font-bold mx-auto">
					</div>
					<h1 className="text-3xl font-semibold pb-4">
						Access cash <br />up to the value of your NFT
					</h1>

					<Image
						className="mx-auto"
						width="500"
						height="500"
						src="/nft-safe.png"
						alt="safe"
					/>

					<div className="mx-auto pb-4">
						<Link href="/coming-soon">
							<button className="button">
								Learn more
							</button>
						</Link>
					</div>
				</div>
			</header>

			<main>
				<section>
					<div className="mx-auto container py-16 flex flex-wrap items-center px-4">
						<div className="text-center w-4/5 mx-auto mb-8">
							<h2 className="text-2xl font-semibold pb-4">
								Extra liquidity to help you grow your capital.
							</h2>
							{/*
							<p>
								All assets are locked up in other NFTs that you do not want to sell. You see the next blue chip 
							</p>
								*/}
						</div>

						<div className="bg-blue-100 rounded-xl w-full p-4 mb-4 flex flex-wrap items-center">
							<Image src="/mining.png" width="50" height="50" alt="Safe" />
							<h5 className="font-semibold ml-2" style={{color:'#0052FF'}}>
								See a guaranteed profit mint?
							</h5>
						</div>
						<div className="bg-blue-100 rounded-xl w-full p-4 flex flex-wrap items-center">
							<Image src="/stocks.png" width="50" height="50" alt="Safe" />
							<h5 className="font-semibold ml-2" style={{color:'#0052FF'}}>
								Want to buy eth low to sell high?
							</h5>
						</div>
					</div>
				</section>
				<section className="bg-blue-100 py-16">
					<div className="mx-auto container flex flex-wrap items-center px-4 text-center">
						<div className="text-center mb-8 mx-auto">
							<h2 className="text-2xl font-semibold pb-4">
								Use up to 40 ETH instantly.
							</h2>
							{/*
							<p>
								All assets are locked up in other NFTs that you do not want to sell. You see the next blue chip 
							</p>
								*/}
						</div>

						<Image
							className="mx-auto"
							width="500"
							height="500"
							src="/nft-wallet.png"
							alt="safe"
						/>

						<div className="mx-auto">
							<Link href="/coming-soon">
								<button className="button">
									Learn more
								</button>
							</Link>
						</div>
					</div>
				</section>
				<section>
					<div className="mx-auto container py-16 flex flex-wrap items-center px-4">
						<div className="text-center mb-2 mx-auto">
							<h2 className="text-2xl font-semibold pb-4">
								The easy way to access extra liquidity
							</h2>
						</div>

						<div className="w-full py-4 mb-4 flex flex-wrap">
							<Image src="/wallet.png" width="50" height="50" alt="Safe" />
							<h5 className="font-semibold pb-4 ml-auto w-4/5">
								1. Receive loaned ETH
							</h5>
						</div>
						<div className="w-full py-4 mb-4 flex flex-wrap flex-horizontal">
							<Image src="/stocks.png" width="50" height="50" alt="Safe" />
							<h5 className="font-semibold pb-4 ml-auto w-4/5">
								2. Use your extra liquidity in your investments
							</h5>
						</div>
						<div className="w-full py-4 mb-4 flex flex-wrap">
							<Image src="/coins.png" width="50" height="50" alt="Safe" />
							<h5 className="font-semibold pb-4 ml-auto w-4/5">
								3. Cash out profit & payback loan
							</h5>
						</div>

						<Link className="w-full" href="/coming-soon">
							<button className="button w-full">
								Learn more
							</button>
						</Link>
					</div>
				</section>
			</main>

			<footer className="py-16 relative" style={{backgroundColor: 'black'}}>
				<div className="container px-4 mx-auto">
					<h2 className="text-2xl text-white font-semibold mb-8">
						See how Mercury can help grow your capital
					</h2>
					<Link href="/coming-soon">
						<button className="button button--white w-full">
							Learn more
						</button>
					</Link>
				</div>
			</footer>
		</>
	)
}

export default Borrower;
