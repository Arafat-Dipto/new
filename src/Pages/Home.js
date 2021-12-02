import React from "react";
import Header from "../component/Header";
import Tab from "../component/Tab";
import TransportSlider from "../component/TransportSlider";

const Home = () => {
	return (
		<>
			<Header />

			<div className="section mt-32">
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-3">
							<div className="blank_div"></div>
						</div>
						<div className="col-12 col-lg-9">
							<h4 className="mb-32px text-2xl">
								48 Available Buses
							</h4>
							<div className="all_slider">
								<TransportSlider />
							</div>
							<div className="">
								<Tab />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
