import React from "react";
import PropTypes from "prop-types";

import { ContentBlock, SectionTitle } from "../../common";

const SideBarSection = (props) => {
	const { title, data } = props;
	return (
		<section className="my-1">
			<SectionTitle title={title} fromSideBar />
			<article>
				{data.map((value, index) => (
					<ContentBlock key={index} data={value} />
				))}
			</article>
		</section>
	);
};

SideBarSection.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.array.isRequired,
};

export default SideBarSection;
