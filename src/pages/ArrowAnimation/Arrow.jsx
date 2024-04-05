import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Arrow() {
	const [trigger, setTrigger] = useState(true);

	useEffect(() => {
		const interval = setInterval(
			() => {
				setTrigger((prevTrigger) => !prevTrigger);
			},
			trigger ? 10000 : 1000,
		);

		return () => clearInterval(interval);
	}, [trigger]);

	return (
		<div style={{ marginTop: '10rem' }}>
			<div className="position-relative">
				<div style={{ position: 'absolute', top: '226px', left: '-24px' }}>
					<svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M27.6914 54C42.6031 54 54.6914 41.9117 54.6914 27C54.6914 12.0883 42.6031 0 27.6914 0C12.7797 0 0.691406 12.0883 0.691406 27C0.691406 41.9117 12.7797 54 27.6914 54Z" fill="url(#paint0_linear_185_6311)" />
						<path d="M30.3579 15V20.3333C30.3579 21.0697 30.9549 21.6667 31.6912 21.6667H37.0246" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M34.3579 39H21.0246C19.5518 39 18.3579 37.8061 18.3579 36.3333V17.6667C18.3579 16.1939 19.5518 15 21.0246 15H30.3579L37.0246 21.6667V36.3333C37.0246 37.8061 35.8307 39 34.3579 39Z"
							stroke="white"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path d="M23.6914 20.3327H25.0247" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M23.6914 28.3337H31.6914" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M29.0249 33.6667H31.6916" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						<defs>
							<linearGradient id="paint0_linear_185_6311" x1="0.687306" y1="27.0017" x2="54.6917" y2="27.0017" gradientUnits="userSpaceOnUse">
								<stop stopColor="#02BDFF" />
								<stop offset="0.1514" stopColor="#02BDFF" />
							</linearGradient>
						</defs>
					</svg>
				</div>

				{trigger ? (
					<>
						<div>
							<svg width="690" height="266" viewBox="0 0 690 266" fill="none" xmlns="http://www.w3.org/2000/svg">
								<motion.path
									initial={{ pathLength: 0 }}
									animate={{ pathLength: 0.48 }}
									transition={{ duration: 2 }}
									exit={{ opacity: 0 }}
									// d="M10 10 L100 100"
									d="M 14.182694435119629 255.0500030517578 C 48.36351776123047 255.91000366210938 76.990478515625 210.16000366210938 79.26715087890625 206.4199981689453 C 81.30901336669922 201.8000030517578 101.57453155517578 158.22999572753906 143.43287658691406 148.9199981689453 C 172.47840881347656 142.4600067138672 204.38255310058594 154.19000244140625 238.26731872558594 183.77000427246094 C 262.0958557128906 204.5800018310547 285.63861083984375 212.33999633789062 308.22161865234375 206.83999633789062 C 345.09771728515625 197.85000610351562 368.9466857910156 163.8800048828125 385.2101745605469 132.60000610351562 C 401.2489929199219 101.75 410.31488037109375 56.53020095825195 448.2119140625 44.22019958496094 C 480.9429931640625 33.5901985168457 509.876220703125 59.710201263427734 529.5189819335938 82.0802001953125 C 547.1810913085938 102.19999694824219 566.2317504882812 111.11000061035156 586.150146484375 108.56999969482422 C 644.2718505859375 101.16000366210938 694.1341552734375 1.660159945487976 694.6344604492188 0.6601560115814209 L 703.8228759765625 5.02016019821167 C 701.6992797851562 9.320159912109375 651.0508422851562 110.37000274658203 587.4773559570312 118.48999786376953 C 563.9346313476562 121.5 541.8314208984375 111.44000244140625 521.7803344726562 88.6001968383789 C 502.89306640625 67.0802001953125 470.5805358886719 38.74020004272461 440.38134765625 59.200199127197266 C 411.74420166015625 78.61019897460938 404.89373779296875 119.83999633789062 387.7624816894531 148.22000122070312 C 370.36578369140625 177.02999877929688 345.5060729980469 208.0500030517578 310.7024841308594 216.5399932861328 C 302.7187805175781 218.49000549316406 294.673828125 219.0399932861328 286.5982360839844 218.1999969482422 C 268.3133544921875 216.3000030517578 249.8651123046875 207.2899932861328 231.4781036376953 191.22999572753906 C 200.22735595703125 163.94000244140625 171.38600158691406 152.97999572753906 145.76060485839844 158.64999389648438 C 107.6287612915039 167.08999633789062 88.731201171875 210.1699981689453 88.54743194580078 210.61000061035156 L 88.26156616210938 211.1699981689453 C 86.94457244873047 213.41000366210938 55.46921157836914 266.05999755859375 13.947879791259766 265.0400085449219Z"
									stroke="url(#paint0_linear_185_6310)"
									strokeWidth={14}
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<defs>
									<linearGradient id="paint0_linear_185_6310" x1="-158.979" y1="79.2993" x2="672.16" y2="167.395" gradientUnits="userSpaceOnUse">
										<stop stopColor="#02BDFF" />
										<stop offset="0.2568" stopColor="#65A5BE" />
										<stop offset="0.4784" stopColor="#8780C3" />
										<stop offset="0.7108" stopColor="#DC35CA" />
										<stop offset="1" stopColor="#E42CCC" />
									</linearGradient>
								</defs>
							</svg>
							<motion.div
								initial={{ offsetDistance: '0%' }}
								animate={{ offsetDistance: '48%' }}
								transition={{ duration: 2 }}
								style={{
									position: 'absolute',
									top: 0,
									left: 0,
									transform: 'rotate(70deg)',
									offsetPath:
										'path("M 14.182694435119629 255.0500030517578 C 48.36351776123047 255.91000366210938 76.990478515625 210.16000366210938 79.26715087890625 206.4199981689453 C 81.30901336669922 201.8000030517578 101.57453155517578 158.22999572753906 143.43287658691406 148.9199981689453 C 172.47840881347656 142.4600067138672 204.38255310058594 154.19000244140625 238.26731872558594 183.77000427246094 C 262.0958557128906 204.5800018310547 285.63861083984375 212.33999633789062 308.22161865234375 206.83999633789062 C 345.09771728515625 197.85000610351562 368.9466857910156 163.8800048828125 385.2101745605469 132.60000610351562 C 401.2489929199219 101.75 410.31488037109375 56.53020095825195 448.2119140625 44.22019958496094 C 480.9429931640625 33.5901985168457 509.876220703125 59.710201263427734 529.5189819335938 82.0802001953125 C 547.1810913085938 102.19999694824219 566.2317504882812 111.11000061035156 586.150146484375 108.56999969482422 C 644.2718505859375 101.16000366210938 694.1341552734375 1.660159945487976 694.6344604492188 0.6601560115814209 L 703.8228759765625 5.02016019821167 C 701.6992797851562 9.320159912109375 651.0508422851562 110.37000274658203 587.4773559570312 118.48999786376953 C 563.9346313476562 121.5 541.8314208984375 111.44000244140625 521.7803344726562 88.6001968383789 C 502.89306640625 67.0802001953125 470.5805358886719 38.74020004272461 440.38134765625 59.200199127197266 C 411.74420166015625 78.61019897460938 404.89373779296875 119.83999633789062 387.7624816894531 148.22000122070312 C 370.36578369140625 177.02999877929688 345.5060729980469 208.0500030517578 310.7024841308594 216.5399932861328 C 302.7187805175781 218.49000549316406 294.673828125 219.0399932861328 286.5982360839844 218.1999969482422 C 268.3133544921875 216.3000030517578 249.8651123046875 207.2899932861328 231.4781036376953 191.22999572753906 C 200.22735595703125 163.94000244140625 171.38600158691406 152.97999572753906 145.76060485839844 158.64999389648438 C 107.6287612915039 167.08999633789062 88.731201171875 210.1699981689453 88.54743194580078 210.61000061035156 L 88.26156616210938 211.1699981689453 C 86.94457244873047 213.41000366210938 55.46921157836914 266.05999755859375 13.947879791259766 265.0400085449219Z")',
								}}>
								<svg width="67" height="65" viewBox="0 0 67 65" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M47.7609 10.8748C45.8069 27.4807 45.7934 49.3164 49.6678 64.836L30.6107 44.4336L2.91637 40.9455C17.7658 34.9931 35.4539 22.1892 47.7609 10.8748Z" fill="#E42DCC" />
								</svg>
							</motion.div>
						</div>
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1, delay: 2 }} style={{ position: 'absolute', top: '290px', left: '-100px' }}>
							<div style={{ width: '204px', height: '52px', backgroundColor: '#02BDFF', borderRadius: '40px' }} className="text-white justify-content-center align-items-center d-flex">
								Lorem ipsum
							</div>
						</motion.div>
						<div>
							<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1, delay: 3 }} style={{ position: 'absolute', top: '-40px', left: '40px' }}>
								<div style={{ width: '204px', height: '52px', backgroundColor: '#8780C3', borderRadius: '40px' }} className="text-white justify-content-center align-items-center d-flex">
									Lorem ipsum
								</div>
							</motion.div>
							<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1, delay: 2.5 }} style={{ position: 'absolute', top: '20px', left: '140px' }}>
								<svg width="2" height="108" viewBox="0 0 2 108" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M0.400848 96.8112H0.830872L0.87085 93.9072H0.380859L0.400848 96.8112Z" fill="url(#paint0_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.439911 102.021H0.749908L0.789917 99.1172H0.419922L0.439911 102.021Z" fill="url(#paint1_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.490936 107.21H0.670929L0.710938 104.306H0.460938L0.490936 107.21Z" fill="url(#paint2_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.28952 81.1597H1.02951L1.06952 78.2559H0.269531L0.28952 81.1597Z" fill="url(#paint3_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.318817 86.3697H0.968811L0.99881 83.4658H0.298828L0.318817 86.3697Z" fill="url(#paint4_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.359863 91.5582H0.899841L0.93985 88.6543H0.339844L0.359863 91.5582Z" fill="url(#paint5_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.189911 65.5084H1.20993L1.23993 62.6045H0.169922L0.189911 65.5084Z" fill="url(#paint6_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.219208 70.7184H1.15921L1.18921 67.8145H0.199219L0.219208 70.7184Z" fill="url(#paint7_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.250458 75.9068H1.10046L1.13046 73.0029H0.230469L0.250458 75.9068Z" fill="url(#paint8_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.100067 49.8581H1.37006L1.41006 46.9541H0.0800781L0.100067 49.8581Z" fill="url(#paint9_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.12915 55.0679H1.30914L1.33914 52.1641H0.119141L0.12915 55.0679Z" fill="url(#paint10_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.1604 60.2565H1.27042L1.29041 57.3525H0.150391L0.1604 60.2565Z" fill="url(#paint11_linear_185_6252)" />
									<path d="M1.56 31.3027H0V34.2066H1.56V31.3027Z" fill="url(#paint12_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.0197754 39.4166H1.51978L1.54977 36.5127H0.00976562L0.0197754 39.4166Z" fill="url(#paint13_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.0590515 44.6051H1.43906L1.48907 41.7012H0.0390625L0.0590515 44.6051Z" fill="url(#paint14_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.0898438 18.5553H1.38986L1.31985 15.6514H0.129852L0.0898438 18.5553Z" fill="url(#paint15_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.0390625 23.7653H1.48907L1.43906 20.8613H0.0690613L0.0390625 23.7653Z" fill="url(#paint16_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.00976562 28.9538H1.54977L1.51978 26.0498H0.0197754L0.00976562 28.9538Z" fill="url(#paint17_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.380859 2.90388H0.87085L0.720856 0H0.460876L0.380859 2.90388Z" fill="url(#paint18_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.259766 8.11385H1.08975L0.969757 5.20996H0.319763L0.259766 8.11385Z" fill="url(#paint19_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.160156 13.3023H1.26016L1.17017 10.3984H0.210175L0.160156 13.3023Z" fill="url(#paint20_linear_185_6252)" />
									<defs>
										<linearGradient id="paint0_linear_185_6252" x1="0.378959" y1="95.3532" x2="0.86725" y2="95.3532" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint1_linear_185_6252" x1="0.418622" y1="100.564" x2="0.792117" y2="100.564" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint2_linear_185_6252" x1="0.462738" y1="105.757" x2="0.714337" y2="105.757" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint3_linear_185_6252" x1="0.266831" y1="79.702" x2="1.06842" y2="79.702" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint4_linear_185_6252" x1="0.301428" y1="84.9124" x2="1.00311" y2="84.9124" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint5_linear_185_6252" x1="0.339144" y1="90.1056" x2="0.93725" y2="90.1056" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint6_linear_185_6252" x1="0.171822" y1="64.0507" x2="1.24323" y2="64.0507" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint7_linear_185_6252" x1="0.200219" y1="69.2611" x2="1.18931" y2="69.2611" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint8_linear_185_6252" x1="0.233269" y1="74.4544" x2="1.13246" y2="74.4544" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint9_linear_185_6252" x1="0.0825781" y1="48.4003" x2="1.40666" y2="48.4003" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint10_linear_185_6252" x1="0.117841" y1="53.6109" x2="1.33964" y2="53.6109" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint11_linear_185_6252" x1="0.145391" y1="58.8041" x2="1.29271" y2="58.8041" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint12_linear_185_6252" x1="-0.0013" y1="32.7491" x2="1.5597" y2="32.7491" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint13_linear_185_6252" x1="0.0056656" y1="37.9595" x2="1.54627" y2="37.9595" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint14_linear_185_6252" x1="0.0381625" y1="43.1527" x2="1.48487" y2="43.1527" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint15_linear_185_6252" x1="0.0910438" y1="17.0978" x2="1.39056" y2="17.0978" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint16_linear_185_6252" x1="0.0381625" y1="22.3084" x2="1.48497" y2="22.3084" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint17_linear_185_6252" x1="0.0051656" y1="27.5016" x2="1.54717" y2="27.5016" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint18_linear_185_6252" x1="0.377059" y1="1.4466" x2="0.87065" y2="1.4466" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint19_linear_185_6252" x1="0.256166" y1="6.65699" x2="1.08855" y2="6.65699" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint20_linear_185_6252" x1="0.163856" y1="11.8502" x2="1.25836" y2="11.8502" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
									</defs>
								</svg>
							</motion.div>
						</div>
						<div>
							<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1, delay: 4 }} style={{ position: 'absolute', top: '340px', left: '180px' }}>
								<div style={{ width: '204px', height: '52px', backgroundColor: '#9C6CC5', borderRadius: '40px' }} className="text-white justify-content-center align-items-center d-flex">
									Lorem ipsum
								</div>
							</motion.div>
							<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1, delay: 3.5 }} style={{ position: 'absolute', top: '220px', left: '280px' }}>
								<svg width="2" height="108" viewBox="0 0 2 108" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M0.400848 96.8112H0.830872L0.87085 93.9072H0.380859L0.400848 96.8112Z" fill="url(#paint0_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.439911 102.021H0.749908L0.789917 99.1172H0.419922L0.439911 102.021Z" fill="url(#paint1_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.490936 107.21H0.670929L0.710938 104.306H0.460938L0.490936 107.21Z" fill="url(#paint2_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.28952 81.1597H1.02951L1.06952 78.2559H0.269531L0.28952 81.1597Z" fill="url(#paint3_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.318817 86.3697H0.968811L0.99881 83.4658H0.298828L0.318817 86.3697Z" fill="url(#paint4_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.359863 91.5582H0.899841L0.93985 88.6543H0.339844L0.359863 91.5582Z" fill="url(#paint5_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.189911 65.5084H1.20993L1.23993 62.6045H0.169922L0.189911 65.5084Z" fill="url(#paint6_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.219208 70.7184H1.15921L1.18921 67.8145H0.199219L0.219208 70.7184Z" fill="url(#paint7_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.250458 75.9068H1.10046L1.13046 73.0029H0.230469L0.250458 75.9068Z" fill="url(#paint8_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.100067 49.8581H1.37006L1.41006 46.9541H0.0800781L0.100067 49.8581Z" fill="url(#paint9_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.12915 55.0679H1.30914L1.33914 52.1641H0.119141L0.12915 55.0679Z" fill="url(#paint10_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.1604 60.2565H1.27042L1.29041 57.3525H0.150391L0.1604 60.2565Z" fill="url(#paint11_linear_185_6252)" />
									<path d="M1.56 31.3027H0V34.2066H1.56V31.3027Z" fill="url(#paint12_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.0197754 39.4166H1.51978L1.54977 36.5127H0.00976562L0.0197754 39.4166Z" fill="url(#paint13_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.0590515 44.6051H1.43906L1.48907 41.7012H0.0390625L0.0590515 44.6051Z" fill="url(#paint14_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.0898438 18.5553H1.38986L1.31985 15.6514H0.129852L0.0898438 18.5553Z" fill="url(#paint15_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.0390625 23.7653H1.48907L1.43906 20.8613H0.0690613L0.0390625 23.7653Z" fill="url(#paint16_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.00976562 28.9538H1.54977L1.51978 26.0498H0.0197754L0.00976562 28.9538Z" fill="url(#paint17_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.380859 2.90388H0.87085L0.720856 0H0.460876L0.380859 2.90388Z" fill="url(#paint18_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.259766 8.11385H1.08975L0.969757 5.20996H0.319763L0.259766 8.11385Z" fill="url(#paint19_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.160156 13.3023H1.26016L1.17017 10.3984H0.210175L0.160156 13.3023Z" fill="url(#paint20_linear_185_6252)" />
									<defs>
										<linearGradient id="paint0_linear_185_6252" x1="0.378959" y1="95.3532" x2="0.86725" y2="95.3532" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint1_linear_185_6252" x1="0.418622" y1="100.564" x2="0.792117" y2="100.564" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint2_linear_185_6252" x1="0.462738" y1="105.757" x2="0.714337" y2="105.757" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint3_linear_185_6252" x1="0.266831" y1="79.702" x2="1.06842" y2="79.702" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint4_linear_185_6252" x1="0.301428" y1="84.9124" x2="1.00311" y2="84.9124" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint5_linear_185_6252" x1="0.339144" y1="90.1056" x2="0.93725" y2="90.1056" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint6_linear_185_6252" x1="0.171822" y1="64.0507" x2="1.24323" y2="64.0507" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint7_linear_185_6252" x1="0.200219" y1="69.2611" x2="1.18931" y2="69.2611" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint8_linear_185_6252" x1="0.233269" y1="74.4544" x2="1.13246" y2="74.4544" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint9_linear_185_6252" x1="0.0825781" y1="48.4003" x2="1.40666" y2="48.4003" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint10_linear_185_6252" x1="0.117841" y1="53.6109" x2="1.33964" y2="53.6109" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint11_linear_185_6252" x1="0.145391" y1="58.8041" x2="1.29271" y2="58.8041" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint12_linear_185_6252" x1="-0.0013" y1="32.7491" x2="1.5597" y2="32.7491" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint13_linear_185_6252" x1="0.0056656" y1="37.9595" x2="1.54627" y2="37.9595" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint14_linear_185_6252" x1="0.0381625" y1="43.1527" x2="1.48487" y2="43.1527" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint15_linear_185_6252" x1="0.0910438" y1="17.0978" x2="1.39056" y2="17.0978" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint16_linear_185_6252" x1="0.0381625" y1="22.3084" x2="1.48497" y2="22.3084" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint17_linear_185_6252" x1="0.0051656" y1="27.5016" x2="1.54717" y2="27.5016" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint18_linear_185_6252" x1="0.377059" y1="1.4466" x2="0.87065" y2="1.4466" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint19_linear_185_6252" x1="0.256166" y1="6.65699" x2="1.08855" y2="6.65699" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint20_linear_185_6252" x1="0.163856" y1="11.8502" x2="1.25836" y2="11.8502" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
									</defs>
								</svg>
							</motion.div>
						</div>
						<div>
							<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1, delay: 5 }} style={{ position: 'absolute', top: '-140px', left: '360px' }}>
								<div style={{ width: '204px', height: '52px', backgroundColor: '#BC51C7', borderRadius: '40px' }} className="text-white justify-content-center align-items-center d-flex">
									Lorem ipsum
								</div>
							</motion.div>
							<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1, delay: 4.5 }} style={{ position: 'absolute', top: '-80px', left: '460px' }}>
								<svg width="2" height="108" viewBox="0 0 2 108" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M0.400848 96.8112H0.830872L0.87085 93.9072H0.380859L0.400848 96.8112Z" fill="url(#paint0_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.439911 102.021H0.749908L0.789917 99.1172H0.419922L0.439911 102.021Z" fill="url(#paint1_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.490936 107.21H0.670929L0.710938 104.306H0.460938L0.490936 107.21Z" fill="url(#paint2_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.28952 81.1597H1.02951L1.06952 78.2559H0.269531L0.28952 81.1597Z" fill="url(#paint3_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.318817 86.3697H0.968811L0.99881 83.4658H0.298828L0.318817 86.3697Z" fill="url(#paint4_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.359863 91.5582H0.899841L0.93985 88.6543H0.339844L0.359863 91.5582Z" fill="url(#paint5_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.189911 65.5084H1.20993L1.23993 62.6045H0.169922L0.189911 65.5084Z" fill="url(#paint6_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.219208 70.7184H1.15921L1.18921 67.8145H0.199219L0.219208 70.7184Z" fill="url(#paint7_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.250458 75.9068H1.10046L1.13046 73.0029H0.230469L0.250458 75.9068Z" fill="url(#paint8_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.100067 49.8581H1.37006L1.41006 46.9541H0.0800781L0.100067 49.8581Z" fill="url(#paint9_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.12915 55.0679H1.30914L1.33914 52.1641H0.119141L0.12915 55.0679Z" fill="url(#paint10_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.1604 60.2565H1.27042L1.29041 57.3525H0.150391L0.1604 60.2565Z" fill="url(#paint11_linear_185_6252)" />
									<path d="M1.56 31.3027H0V34.2066H1.56V31.3027Z" fill="url(#paint12_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.0197754 39.4166H1.51978L1.54977 36.5127H0.00976562L0.0197754 39.4166Z" fill="url(#paint13_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.0590515 44.6051H1.43906L1.48907 41.7012H0.0390625L0.0590515 44.6051Z" fill="url(#paint14_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.0898438 18.5553H1.38986L1.31985 15.6514H0.129852L0.0898438 18.5553Z" fill="url(#paint15_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.0390625 23.7653H1.48907L1.43906 20.8613H0.0690613L0.0390625 23.7653Z" fill="url(#paint16_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.00976562 28.9538H1.54977L1.51978 26.0498H0.0197754L0.00976562 28.9538Z" fill="url(#paint17_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.380859 2.90388H0.87085L0.720856 0H0.460876L0.380859 2.90388Z" fill="url(#paint18_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.259766 8.11385H1.08975L0.969757 5.20996H0.319763L0.259766 8.11385Z" fill="url(#paint19_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.160156 13.3023H1.26016L1.17017 10.3984H0.210175L0.160156 13.3023Z" fill="url(#paint20_linear_185_6252)" />
									<defs>
										<linearGradient id="paint0_linear_185_6252" x1="0.378959" y1="95.3532" x2="0.86725" y2="95.3532" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint1_linear_185_6252" x1="0.418622" y1="100.564" x2="0.792117" y2="100.564" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint2_linear_185_6252" x1="0.462738" y1="105.757" x2="0.714337" y2="105.757" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint3_linear_185_6252" x1="0.266831" y1="79.702" x2="1.06842" y2="79.702" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint4_linear_185_6252" x1="0.301428" y1="84.9124" x2="1.00311" y2="84.9124" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint5_linear_185_6252" x1="0.339144" y1="90.1056" x2="0.93725" y2="90.1056" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint6_linear_185_6252" x1="0.171822" y1="64.0507" x2="1.24323" y2="64.0507" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint7_linear_185_6252" x1="0.200219" y1="69.2611" x2="1.18931" y2="69.2611" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint8_linear_185_6252" x1="0.233269" y1="74.4544" x2="1.13246" y2="74.4544" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint9_linear_185_6252" x1="0.0825781" y1="48.4003" x2="1.40666" y2="48.4003" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint10_linear_185_6252" x1="0.117841" y1="53.6109" x2="1.33964" y2="53.6109" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint11_linear_185_6252" x1="0.145391" y1="58.8041" x2="1.29271" y2="58.8041" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint12_linear_185_6252" x1="-0.0013" y1="32.7491" x2="1.5597" y2="32.7491" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint13_linear_185_6252" x1="0.0056656" y1="37.9595" x2="1.54627" y2="37.9595" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint14_linear_185_6252" x1="0.0381625" y1="43.1527" x2="1.48487" y2="43.1527" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint15_linear_185_6252" x1="0.0910438" y1="17.0978" x2="1.39056" y2="17.0978" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint16_linear_185_6252" x1="0.0381625" y1="22.3084" x2="1.48497" y2="22.3084" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint17_linear_185_6252" x1="0.0051656" y1="27.5016" x2="1.54717" y2="27.5016" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint18_linear_185_6252" x1="0.377059" y1="1.4466" x2="0.87065" y2="1.4466" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint19_linear_185_6252" x1="0.256166" y1="6.65699" x2="1.08855" y2="6.65699" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint20_linear_185_6252" x1="0.163856" y1="11.8502" x2="1.25836" y2="11.8502" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
									</defs>
								</svg>
							</motion.div>
						</div>
						<div>
							<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1, delay: 6 }} style={{ position: 'absolute', top: '250px', left: '470px' }}>
								<div style={{ width: '204px', height: '52px', backgroundColor: '#DC35CA', borderRadius: '40px' }} className="text-white justify-content-center align-items-center d-flex">
									Lorem ipsum
								</div>
							</motion.div>
							<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1, delay: 5.5 }} style={{ position: 'absolute', top: '125px', left: '570px' }}>
								<svg width="2" height="108" viewBox="0 0 2 108" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M0.400848 96.8112H0.830872L0.87085 93.9072H0.380859L0.400848 96.8112Z" fill="url(#paint0_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.439911 102.021H0.749908L0.789917 99.1172H0.419922L0.439911 102.021Z" fill="url(#paint1_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.490936 107.21H0.670929L0.710938 104.306H0.460938L0.490936 107.21Z" fill="url(#paint2_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.28952 81.1597H1.02951L1.06952 78.2559H0.269531L0.28952 81.1597Z" fill="url(#paint3_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.318817 86.3697H0.968811L0.99881 83.4658H0.298828L0.318817 86.3697Z" fill="url(#paint4_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.359863 91.5582H0.899841L0.93985 88.6543H0.339844L0.359863 91.5582Z" fill="url(#paint5_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.189911 65.5084H1.20993L1.23993 62.6045H0.169922L0.189911 65.5084Z" fill="url(#paint6_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.219208 70.7184H1.15921L1.18921 67.8145H0.199219L0.219208 70.7184Z" fill="url(#paint7_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.250458 75.9068H1.10046L1.13046 73.0029H0.230469L0.250458 75.9068Z" fill="url(#paint8_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.100067 49.8581H1.37006L1.41006 46.9541H0.0800781L0.100067 49.8581Z" fill="url(#paint9_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.12915 55.0679H1.30914L1.33914 52.1641H0.119141L0.12915 55.0679Z" fill="url(#paint10_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.1604 60.2565H1.27042L1.29041 57.3525H0.150391L0.1604 60.2565Z" fill="url(#paint11_linear_185_6252)" />
									<path d="M1.56 31.3027H0V34.2066H1.56V31.3027Z" fill="url(#paint12_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.0197754 39.4166H1.51978L1.54977 36.5127H0.00976562L0.0197754 39.4166Z" fill="url(#paint13_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.0590515 44.6051H1.43906L1.48907 41.7012H0.0390625L0.0590515 44.6051Z" fill="url(#paint14_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.0898438 18.5553H1.38986L1.31985 15.6514H0.129852L0.0898438 18.5553Z" fill="url(#paint15_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.0390625 23.7653H1.48907L1.43906 20.8613H0.0690613L0.0390625 23.7653Z" fill="url(#paint16_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.00976562 28.9538H1.54977L1.51978 26.0498H0.0197754L0.00976562 28.9538Z" fill="url(#paint17_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.380859 2.90388H0.87085L0.720856 0H0.460876L0.380859 2.90388Z" fill="url(#paint18_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.259766 8.11385H1.08975L0.969757 5.20996H0.319763L0.259766 8.11385Z" fill="url(#paint19_linear_185_6252)" />
									<path fillRule="evenodd" clipRule="evenodd" d="M0.160156 13.3023H1.26016L1.17017 10.3984H0.210175L0.160156 13.3023Z" fill="url(#paint20_linear_185_6252)" />
									<defs>
										<linearGradient id="paint0_linear_185_6252" x1="0.378959" y1="95.3532" x2="0.86725" y2="95.3532" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint1_linear_185_6252" x1="0.418622" y1="100.564" x2="0.792117" y2="100.564" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint2_linear_185_6252" x1="0.462738" y1="105.757" x2="0.714337" y2="105.757" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint3_linear_185_6252" x1="0.266831" y1="79.702" x2="1.06842" y2="79.702" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint4_linear_185_6252" x1="0.301428" y1="84.9124" x2="1.00311" y2="84.9124" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint5_linear_185_6252" x1="0.339144" y1="90.1056" x2="0.93725" y2="90.1056" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint6_linear_185_6252" x1="0.171822" y1="64.0507" x2="1.24323" y2="64.0507" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint7_linear_185_6252" x1="0.200219" y1="69.2611" x2="1.18931" y2="69.2611" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint8_linear_185_6252" x1="0.233269" y1="74.4544" x2="1.13246" y2="74.4544" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint9_linear_185_6252" x1="0.0825781" y1="48.4003" x2="1.40666" y2="48.4003" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint10_linear_185_6252" x1="0.117841" y1="53.6109" x2="1.33964" y2="53.6109" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint11_linear_185_6252" x1="0.145391" y1="58.8041" x2="1.29271" y2="58.8041" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint12_linear_185_6252" x1="-0.0013" y1="32.7491" x2="1.5597" y2="32.7491" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint13_linear_185_6252" x1="0.0056656" y1="37.9595" x2="1.54627" y2="37.9595" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint14_linear_185_6252" x1="0.0381625" y1="43.1527" x2="1.48487" y2="43.1527" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint15_linear_185_6252" x1="0.0910438" y1="17.0978" x2="1.39056" y2="17.0978" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint16_linear_185_6252" x1="0.0381625" y1="22.3084" x2="1.48497" y2="22.3084" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint17_linear_185_6252" x1="0.0051656" y1="27.5016" x2="1.54717" y2="27.5016" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint18_linear_185_6252" x1="0.377059" y1="1.4466" x2="0.87065" y2="1.4466" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint19_linear_185_6252" x1="0.256166" y1="6.65699" x2="1.08855" y2="6.65699" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
										<linearGradient id="paint20_linear_185_6252" x1="0.163856" y1="11.8502" x2="1.25836" y2="11.8502" gradientUnits="userSpaceOnUse">
											<stop offset="0.2568" stopColor="#65A5BE" />
											<stop offset="1" stopColor="#65A5BE" />
										</linearGradient>
									</defs>
								</svg>
							</motion.div>
						</div>
					</>
				) : null}
			</div>
		</div>
	);
}
