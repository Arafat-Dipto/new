import React, { useEffect, useState } from "react";
function Navbar() {
	const [isOpenNavBar, setIsOpenNavBar] = useState(false);
	// const [button, setButton] = useState(true);

	const handleClick = () => setIsOpenNavBar(!isOpenNavBar);
	const closeMObileMenu = () => setIsOpenNavBar(false);
	useEffect(() => {
		const body = document.querySelector("body");

		body.style.overflow = "hidden";

		return () => {
			body.style.overflow = "visible";
		};
	}, []);
	// const showButton = () => {
	//   if (window.innerWidth <= 960) {
	//     setButton(false);
	//   } else {
	//     setButton(true);
	//   }
	// };

	// window.addEventListener("resize", showButton);
	return (
		<>
			<nav className="navbar_bg">
				<div className="container">
					<div className="navbar">
						<div className="flex justify-between">
							<div className="flex">
								<a to="#" className="navbar_logo">
									<img src="/images/logo.png" alt="" />
								</a>

								<ul
									className={
										isOpenNavBar
											? "nav_menu mobile_menu"
											: "nav_menu"
									}>
									<li className="nav_item">
										<a
											href="#"
											className="nav_links"
											onClick={closeMObileMenu}>
											Flight
										</a>
									</li>
									<li className="nav_item">
										<a
											href="#"
											className="nav_links"
											onClick={closeMObileMenu}>
											Bus
										</a>
									</li>
									<li className="nav_item">
										<a
											href="#"
											className="nav_links"
											onClick={closeMObileMenu}>
											Holiday
										</a>
									</li>
									<li className="nav_item">
										<a
											href="#"
											className="nav_links"
											onClick={closeMObileMenu}>
											Visa
										</a>
									</li>
									<li className="nav_item">
										<a
											href="#"
											className="nav_links"
											onClick={closeMObileMenu}>
											Visa Guide
										</a>
									</li>
									<li className="nav_item">
										<a
											href="#"
											className="nav_links"
											onClick={closeMObileMenu}>
											Group Request
										</a>
									</li>
									<li className="nav_item">
										<a
											href="#"
											className="nav_links"
											onClick={closeMObileMenu}>
											Travel Advisory
										</a>
									</li>
									<li className="nav_item">
										<a
											href="#"
											className="nav_links"
											onClick={closeMObileMenu}>
											Promotions
										</a>
									</li>
									<li className="nav_item">
										<a
											href="#"
											className="nav_links"
											onClick={closeMObileMenu}>
											Blog
										</a>
									</li>
								</ul>
							</div>
							<div
								className="humberger_div"
								onClick={handleClick}>
								<svg
									className=""
									fill="none"
									stroke="#000"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</div>
							<div
								className="signup_div flex justify-justify-between"
								style={{ marginRight: "10px" }}>
								<a
									href="#"
									style={{
										height: "30px",
										width: "115px",
										marginTop: "10px",
										padding: "3px",
									}}
									className="spin_wheel flex align-items justify-center">
									<img
										style={{ paddingRight: "2px" }}
										src="/images/spin-wheel-mono.png"
										alt=""
									/>
									<span>Spin To Win</span>
								</a>
								<a href="#" className="">
									<img
										style={{
											height: "40px",
											width: "85px",
											paddingLeft: "10px",
											marginTop: "5px",
										}}
										src="/images/signin.png"
										alt=""
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
