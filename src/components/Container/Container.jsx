import React from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.main`
	max-width: 1280px;
	margin: 0 auto;
	padding: 2rem;
`;

const Container = ({ children }) => (
	<ContainerStyled>{children}</ContainerStyled>
);

export default Container;
