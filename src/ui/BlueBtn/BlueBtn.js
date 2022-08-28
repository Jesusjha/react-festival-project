import styled from 'styled-components';

export const BlueBtn = styled.button`
	height: 1.9rem;
	width: ${({ styleCheck, styleLog }) => styleCheck ? '24rem' : '6rem' && styleLog ? '15rem' : '6rem'};
	background-color: #2bb0c7;
	border: none;
	border-radius: 0.3rem;
	font-family: var(--project-font);
	font-size: 0.7rem;
	font-weight: 300;
	letter-spacing: ${({ styleCheck, styleLog }) => (styleCheck ? '.4rem' : '.1rem' && styleLog ? '.4rem' : '')};
	color: #fff;

	&:hover {
		border: none;
		box-shadow: 0 0 20px #11dafd91;
	}
`;
