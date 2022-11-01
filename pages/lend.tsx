


import Image from 'next/image';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import NumberIcon from '../components/NumberIcon';
import Link from 'next/link'

	const items = [
		{ 
			title: 'Pick a loan offer with best terms for you', 
			image: 'https://x2y2.io/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fimages%2FLoanGuideBorrow01Light.141f12cef0d23a7278326322f2f14856.svg&w=640&q=75',
			content: 'List a seeking amount with the NFT you wish to use as collateral to start receiving loan offers. Lenders will take a look at the collateral and pitch offers on how much they are willing to loan out. Pick the offer you like the most :)'
		},
		{ 
			title: 'Receive ETH from the lender', 
			image: 'https://x2y2.io/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fimages%2FLoanGuideBorrow02Light.d891089a3f3c642d66684908ce8ddae5.svg&w=640&q=75',
			content: 'Once both you and a lender have agreed on loan terms (amount, duration, and interest), you will receive the ETH instantly. During the loan duration, your NFT will be securely held by a smart contract until you repay the loan.'
		},
		{ 
			title: 'Repay the loan before due', 
			image: 'https://x2y2.io/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fimages%2FLoanGuideBorrow03Light.cfeb70c622a036778753e9a328009504.svg&w=640&q=75',
			content: 'Repay your loan with a small interest before its due time to receive your NFT back.'
		},
	]


const Lender = () => {

	const [selectedItem, setSelectedItem] = useState(0);


	return (
		<>
			<Navbar />


			<header style={{
				backgroundImage: 'url(/hero-bg.png)'
			}}>
				<div className="mx-auto container h-screen flex flex-wrap items-center">
					<div className="md:w-1/2">
						<h1 className="text-5xl font-bold pb-4">
							Start passively growing your Ethereum today
						</h1>
						<p className="pb-4">
							Have a lot of Ethereum just sitting in your wallet doing nothing? Start lending to earn interest passively on your liquidity today!
						</p>

						<Link href="/coming-soon">
							<button className="button">
								Sign up now!
							</button>
						</Link>
					</div>
					<div className="md:w-1/2">
						<Image
							className="ml-auto"
							width="600"
							height="600"
							src="/piggybank.png"
							alt="Piggy bank"
						/>
					</div>
				</div>
			</header>

			{/*
			<main className="mx-auto container mb-16">
				<section>
					<div className="md:w-3/5">
						<h2 className="text-4xl font-bold mb-16">
							Start borrowing ETH in minutes, using your NFTs as collateral
						</h2>
					</div>

					<div className="flex flex-wrap">
						<div className="md:w-1/3">
							{items.map((item, i) =>{
								const isActive = selectedItem == i;
								return (
									<div 
										className="cursor-pointer mb-8"
										key={i}
										onClick={() => setSelectedItem(i)}
										style={isActive ? { opacity: 1 } : { opacity: .6 }}
									>
										<NumberIcon 
											isActive={isActive}
											num={i + 1}
										/>
										<h6 className="font-bold">
											{item.title}
										</h6>
										<p>
											{item.content}
										</p>
									</div>
								)
							})}
						</div>
						<div className="ml-auto md:w-1/2">
							<img style={{width: '100%'}} src={items[selectedItem].image} alt="Borrowing ETH using NFT as collateral" />
						</div>
					</div>
				</section>
			</main>

			<footer className="py-48 relative" style={{backgroundColor: '#1F1F30'}}>
				<Image className="absolute" style={{left: '0', top: '50%', transform:'translate(-50%, -50%)'}} src="/footer-coins.png" width="500" height="500" alt="falling cryptocurrency" />
				<Image className="absolute" style={{right: '0', top: '50%', transform:'translate(50%, -50%)'}} src="/footer-coins.png" width="500" height="500" alt="falling cryptocurrency" />
				<div className="md:w-1/2 text-center mx-auto">
					<h2 className="text-5xl text-white font-bold mb-8">
						Access capital starting today
					</h2>
					<button className="button button--white">
						Get started today!
					</button>
				</div>
			</footer>
				*/}
		</>
	)
}

export default Lender;
