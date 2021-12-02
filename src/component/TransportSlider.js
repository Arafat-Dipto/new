import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const TransportSlider = () => {
	const settings = {
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div>
			<Slider {...settings}>
				<div>
					<div className="slider_item">
						<h5 className="text-base">Hanif Enterprize</h5>
						<span className="text-sm">40 Buses</span>
					</div>
				</div>
				<div>
					<div className="slider_item">
						<h5 className="text-base">Shohagh Paribahan</h5>
						<span className="text-sm">40 Buses</span>
					</div>
				</div>
				<div>
					<div className="slider_item">
						<h5 className="text-base">Ena Transport</h5>
						<span className="text-sm">40 Buses</span>
					</div>
				</div>
				<div>
					<div className="slider_item">
						<h5 className="text-base">Saintmartin Travels</h5>
						<span className="text-sm">40 Buses</span>
					</div>
				</div>
				<div>
					<div className="slider_item">
						<h5 className="text-base">Soudia Coach</h5>
						<span className="text-sm">40 Buses</span>
					</div>
				</div>
				<div>
					<div className="slider_item">
						<h5 className="text-base">Hanif Enterprize</h5>
						<span className="text-sm">40 Buses</span>
					</div>
				</div>
				<div>
					<div className="slider_item">
						<h5 className="text-base">Saintmartin Travels</h5>
						<span className="text-sm">40 Buses</span>
					</div>
				</div>
				<div>
					<div className="slider_item">
						<h5 className="text-base">Hanif Enterprize</h5>
						<span className="text-sm">40 Buses</span>
					</div>
				</div>
				<div>
					<div className="slider_item">
						<h5 className="text-base">Shohagh Paribahan</h5>
						<span className="text-sm">40 Buses</span>
					</div>
				</div>
			</Slider>
		</div>
	);
};

export default TransportSlider;
