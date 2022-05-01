import { AddButton } from "./ButtonStyle";
import propTypes from "prop-types";
export const Button = ({ type, onClick, text }) => {
	return (
		<AddButton type={type} onClick={onClick}>
			{text}
		</AddButton>
	);
};

Button.propTypes = {
	type: propTypes.string.isRequired,
	onClick: propTypes.func,
	text: propTypes.string,
};
