import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled, { createGlobalStyle, ThemeConsumer } from "styled-components";
import { Flex } from 'rebass';
import { H1 } from "../Heading";
import { SearchButton } from '../Buttons';
import { Section } from '../Section';


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, sans-serif;
  }
`;

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: black;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 15px;
  color: ${({ theme }) => theme.variants.header.primary.color};
 
`;

const Image = styled.img`
  margin: 0;
  max-width: 100px; /* Adjust size as needed */
`;

const Nav = styled(Flex)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: black;

`;

const Title = styled(H1)`
  flex: 4;
`;

const Header = ({ siteTitle }) => (
  <>
    <GlobalStyle />
    <StyledHeader>
      <Section>
        <Nav>
          <Title>
            <StyledLink to="/">
              {siteTitle}       
            </StyledLink>
          </Title>
        </Nav>
      </Section>
      <Section flex>
        <ThemeConsumer>
          {theme => <Image src={theme.images.mainHeaderImage} />}
        </ThemeConsumer>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
          <SearchButton variant='contrast' />
        </Nav>
      </Section>
    </StyledHeader>
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: "Header"
};

export { Header };
