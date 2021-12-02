import React, { useState } from "react";

const Tab = () => {
	const [isTabContent, setIsTabContent] = useState(1);

	const toggleTabContent = (index) => {
		setIsTabContent(index);
	};
	return (
		<>
			<div className="tab_section">
				<div className="tab_nav">
					<div className="full_tab_container">
						<div
							className={`flex tab_item flex-center ${
								isTabContent === 1 ? "tab_active" : ""
							}`}
							onClick={() => toggleTabContent(1)}>
							<span className="mr-10">
								<svg
									className="height_width"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</span>
							<h4>Earlest Buses</h4>
						</div>{" "}
						<div
							className={`flex tab_item flex-center ${
								isTabContent === 2 ? "tab_active" : ""
							}`}
							onClick={() => toggleTabContent(2)}>
							<span className="mr-10">
								<svg
									className="height_width"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</span>
							<h4>Cheapest Bus</h4>
						</div>{" "}
						<div
							className={`flex tab_item flex-center ${
								isTabContent === 3 ? "tab_active" : ""
							}`}
							onClick={() => toggleTabContent(3)}>
							<span className="mr-10">
								<svg
									className="height_width"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</span>
							<h4>Available Seats</h4>
						</div>{" "}
						<div
							className={`flex tab_item flex-center ${
								isTabContent === 4 ? "tab_active" : ""
							}`}
							onClick={() => toggleTabContent(4)}>
							<span className="mr-10">
								<svg
									className="height_width"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</span>
							<h4>Fastest Trips</h4>
						</div>
					</div>
				</div>
				<div className="tab_content_list">
					<div
						className={`content_one ${
							isTabContent === 1 ? "tab_content" : "hidden"
						}`}>
						<div className="p-16 w-75percent">
							<div className="sub_title mb-16px flex justify-between">
								<p className="sub_title text-lg">AC</p>

								<div className="mb-16px">
									<p className="sub_title text-lg">
										Hanif Enterprize
									</p>
									<p className="text-xs text-center text-dark">
										31 DEC DHK-CTG
									</p>
								</div>

								<p>
									<span style={{ paddingRight: "5px" }}>
										<img src="/images/coin.png" alt="" />
									</span>
									<span className="sub_title text-lg">
										55
									</span>
								</p>
							</div>
							<div className="transite_time_dive mb-4px">
								<div className="div_text_center">
									<p className="text-dark">From</p>
									<h4 className="sub_title mb-4px text-dark">
										DHAKA 11:30 PM
									</h4>
									<p className="text-dark">
										Kolabagan Counter
									</p>
									<p className="text-sm text-dark">
										22 june 2021
									</p>
								</div>
								<div className="flex flex-column div_text_center">
									<div className="img_height_width justify-center flex mx-auto">
										<img src="/images/bus.png" />
									</div>

									<p
										className="text-xs text-center text-sm"
										style={{ color: "#EF7E46" }}>
										16 Seats availabls
									</p>
									<p className="text-center text-dark text-base">
										6h 0m
									</p>
								</div>
								<div className="div_text_center">
									<p className="text-dark">To</p>
									<p className="sub_title text-dark">
										Chottogram 05.30 AM
									</p>
									<p className="text-dark text-sm">
										Dempara Counter
									</p>
									<p className="text-dark text-sm">
										22 june 2021
									</p>
								</div>
							</div>
						</div>

						<div className="price_div p-16 w-25percent flex items-end flex-column">
							<p className="mb-16px sub_title text-lg text-dark">
								Per Person
							</p>
							<p className="text-2xl sub_title">BDT 750</p>
							<p className="text-xl mb-8px text-dark">BDT 775</p>
							<button type="button" class="btn btn-primary">
								Primary
							</button>
						</div>
					</div>
					<div
						className={`content_one ${
							isTabContent === 2 ? "tab_content" : "hidden"
						}`}>
						<div className="p-16 w-75percent">
							<div className="sub_title mb-16px flex justify-between">
								<p className="sub_title text-lg">AC</p>

								<div className="mb-16px">
									<p className="sub_title text-lg">
										Shohagh Poribahan
									</p>
									<p className="text-xs text-center text-dark">
										31 DEC DHK-CTG
									</p>
								</div>

								<p>
									<span style={{ paddingRight: "5px" }}>
										<img src="/images/coin.png" alt="" />
									</span>
									<span className="sub_title text-lg">
										35
									</span>
								</p>
							</div>
							<div className="transite_time_dive mb-4px">
								<div className="div_text_center">
									<p className="text-dark">From</p>
									<h4 className="sub_title mb-4px text-dark">
										DHAKA 11:30 PM
									</h4>
									<p className="text-dark">
										Kolabagan Counter
									</p>
									<p className="text-sm text-dark">
										22 june 2021
									</p>
								</div>
								<div className="flex flex-column div_text_center">
									<div className="img_height_width justify-center flex mx-auto">
										<img src="/images/bus.png" />
									</div>

									<p
										className="text-xs text-center text-sm"
										style={{ color: "#EF7E46" }}>
										16 Seats availabls
									</p>
									<p className="text-center text-dark text-base">
										6h 0m
									</p>
								</div>
								<div className="div_text_center">
									<p className="text-dark">To</p>
									<p className="sub_title text-dark">
										Chottogram 05.30 AM
									</p>
									<p className="text-dark text-sm">
										Dempara Counter
									</p>
									<p className="text-dark text-sm">
										22 june 2021
									</p>
								</div>
							</div>
						</div>

						<div className="price_div p-16 w-25percent flex items-end flex-column">
							<p className="mb-16px sub_title text-lg text-dark">
								Per Person
							</p>
							<p className="text-2xl sub_title">BDT 550</p>
							<p className="text-xl mb-8px text-dark">BDT 575</p>
							<button type="button" class="btn btn-primary">
								Primary
							</button>
						</div>
					</div>
					<div
						className={`content_one ${
							isTabContent === 3 ? "tab_content" : "hidden"
						}`}>
						<div className="p-16 w-75percent">
							<div className="sub_title mb-16px flex justify-between">
								<p className="sub_title text-lg">AC</p>

								<div className="mb-16px">
									<p className="sub_title text-lg">
										Hanif Enterprize
									</p>
									<p className="text-xs text-center text-dark">
										31 DEC DHK-CTG
									</p>
								</div>

								<p>
									<span style={{ paddingRight: "5px" }}>
										<img src="/images/coin.png" alt="" />
									</span>
									<span className="sub_title text-lg">
										55
									</span>
								</p>
							</div>
							<div className="transite_time_dive mb-4px">
								<div className="div_text_center">
									<p className="text-dark">From</p>
									<h4 className="sub_title mb-4px text-dark">
										DHAKA 11:30 PM
									</h4>
									<p className="text-dark">
										Kolabagan Counter
									</p>
									<p className="text-sm text-dark">
										22 june 2021
									</p>
								</div>
								<div className="flex flex-column div_text_center">
									<div className="img_height_width justify-center flex mx-auto">
										<img src="/images/bus.png" />
									</div>

									<p
										className="text-xs text-center text-sm"
										style={{ color: "#EF7E46" }}>
										16 Seats availabls
									</p>
									<p className="text-center text-dark text-base">
										6h 0m
									</p>
								</div>
								<div className="div_text_center">
									<p className="text-dark">To</p>
									<p className="sub_title text-dark">
										Chottogram 05.30 AM
									</p>
									<p className="text-dark text-sm">
										Dempara Counter
									</p>
									<p className="text-dark text-sm">
										22 june 2021
									</p>
								</div>
							</div>
						</div>

						<div className="price_div p-16 w-25percent flex items-end flex-column">
							<p className="mb-16px sub_title text-lg text-dark">
								Per Person
							</p>
							<p className="text-2xl sub_title">BDT 750</p>
							<p className="text-xl mb-8px text-dark">BDT 775</p>
							<button type="button" class="btn btn-primary">
								Primary
							</button>
						</div>
					</div>
					<div
						className={`content_one ${
							isTabContent === 4 ? "tab_content" : "hidden"
						}`}>
						<div className="p-16 w-75percent">
							<div className="sub_title mb-16px flex justify-between">
								<p className="sub_title text-lg">AC</p>

								<div className="mb-16px">
									<p className="sub_title text-lg">
										Ena Transport
									</p>
									<p className="text-xs text-center text-dark">
										31 DEC DHK-CTG
									</p>
								</div>

								<p>
									<span style={{ paddingRight: "5px" }}>
										<img src="/images/coin.png" alt="" />
									</span>
									<span className="sub_title text-lg">
										75
									</span>
								</p>
							</div>
							<div className="transite_time_dive mb-4px">
								<div className="div_text_center">
									<p className="text-dark">From</p>
									<h4 className="sub_title mb-4px text-dark">
										DHAKA 11:30 PM
									</h4>
									<p className="text-dark">
										Kolabagan Counter
									</p>
									<p className="text-sm text-dark">
										22 june 2021
									</p>
								</div>
								<div className="flex flex-column div_text_center">
									<div className="img_height_width justify-center flex mx-auto">
										<img src="/images/bus.png" />
									</div>

									<p
										className="text-xs text-center text-sm"
										style={{ color: "#EF7E46" }}>
										16 Seats availabls
									</p>
									<p className="text-center text-dark text-base">
										6h 0m
									</p>
								</div>
								<div className="div_text_center">
									<p className="text-dark">To</p>
									<p className="sub_title text-dark">
										Chottogram 05.30 AM
									</p>
									<p className="text-dark text-sm">
										Dempara Counter
									</p>
									<p className="text-dark text-sm">
										22 june 2021
									</p>
								</div>
							</div>
						</div>

						<div className="price_div p-16 w-25percent flex items-end flex-column">
							<p className="mb-16px sub_title text-lg text-dark">
								Per Person
							</p>
							<p className="text-2xl sub_title">BDT 950</p>
							<p className="text-xl mb-8px text-dark">BDT 975</p>
							<button type="button" class="btn btn-primary">
								Primary
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Tab;
