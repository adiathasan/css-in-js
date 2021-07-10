import styled from 'styled-components';

export const HeaderStyled = styled.header`
	position: relative;
	padding: 1rem 2rem;
	border-bottom: 1px solid hsla(0, 0%, 50%, 0.432);
	display: flex;
`;

export const Nav = styled.nav`
	flex: 1;
	display: flex;
`;

export const NavItem = styled.div`
	position: relative;
	font-size: 1.4rem;
	cursor: pointer;

	&::before {
		content: '';
		position: absolute;
		top: 30px;
		height: 2px;
		width: 0;
		opacity: 0;
		transition: 0.3s ease-in-out;
		background: ${({ theme }) => theme['text-primary']};
	}

	&:hover {
		&::before {
			width: 96px;
			opacity: 1;
		}
	}
`;

export const ToggleButton = styled.button`
	position: absolute;
	right: 16px;
	top: 4px;
	background: transparent;
	display: grid;
	place-items: center;
	border: none;
	height: 50px;
	width: 50px;
	cursor: pointer;
	transition: 0.1s ease-in-out;
	opacity: 0.85;
	border-radius: 50%;

	&::after {
		content: attr(aria-label);
		background: ${({ theme }) => theme['text-primary']};
		color: ${({ theme }) => theme['bg-primary']};
		position: absolute;
		top: 10px;
		left: -80px;
		transform: scale(0);
		opacity: 0;
		white-space: nowrap;
		border-radius: 6px;
		transition: 0.3s ease;
		padding: 0.5rem 1rem;
	}

	&:hover {
		&::after {
			left: -160px;
			opacity: 0.8;
			transform: scale(1);
		}
	}

	&:hover,
	&:focus {
		opacity: 1;
		background: hsla(0, 0%, 50%, 0.5);
	}
`;

export const SvgToggleDark = styled.svg`
	width: 33px;
	height: 33px;

	.sun,
	.circle {
		transform-origin: center center;
		transition: transform 750ms cubic-bezier(0.11, 0.14, 0.29, 1.32);
		fill: ${({ theme }) => theme['text-primary']};
	}

	.sun.dark {
		transform: rotate(0.5turn);
	}

	.circle.dark {
		transform: translateX(-70px);
	}
`;
