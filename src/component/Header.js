import React from "react";

const Header = () => {
	return (
		<>
			<section className="header_section">
				<div className="container">
					<div className="center_item">
						<div className="header_div">
							<span>
								<img src="/images/onward.png" />
							</span>
							<div className="ml-12">
								<span className="div_title">
									Onward Journey
								</span>
								<h4 className="div_location">
									Dhaka - Chottogram
								</h4>
								<p className="div_date">
									22 june, 2021 (Tuesday)
								</p>
							</div>
						</div>

						<div className="header_div indicator_icon">
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									className="h-50px w-50px"
									style={{
										fill: "#fff",
										transform: "",
										msfilter: "",
									}}>
									<path d="M19.924 10.383a1 1 0 0 0-.217-1.09l-5-5-1.414 1.414L16.586 9H4v2h15a1 1 0 0 0 .924-.617zM4.076 13.617a1 1 0 0 0 .217 1.09l5 5 1.414-1.414L7.414 15H20v-2H5a.999.999 0 0 0-.924.617z" />
								</svg>
							</span>
						</div>

						<div className="header_div">
							<span>
								<img src="/images/return.png" />
							</span>
							<div className="ml-12">
								<span className="div_title">
									Return Journey
								</span>
								<h4 className="div_location">
									Chottogram - Dhaka
								</h4>
								<p className="div_date">
									24 june, 2021 (Thursday)
								</p>
							</div>
						</div>

						<div className="mod_btn">
							<button type="button" class="modify_btn btn btn-lg">
								Modify Search
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Header;
