import React from "react";
import routes from "routes";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { normalizeRoutePath } from "utils";

const StyledAbout = styled.p`
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.825);
  margin-bottom: 10px;
`;

const StyledLink = styled.a`
  font-size: 1.4rem;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 400;
  &:hover {
    color: orangered;
  }
`;

const StyledRepository = styled(StyledLink)``;

const StyledAuthor = styled.h4`
  color: ${({ theme }) => theme.colors.black};
`;

function Library({ description, repository, location: { pathname } }) {
  const route = routes.find(route => normalizeRoutePath(route.path) === normalizeRoutePath(pathname));
  return (
    <>
      <StyledAuthor>
        Author
        <StyledLink target={"_blank"} href={repository.author}>
          <span dangerouslySetInnerHTML={{ __html: "&nbsp;:" }} /> {repository.author}
        </StyledLink>
      </StyledAuthor>
      <StyledAbout>{description}</StyledAbout>
      <StyledRepository target={"_blank"} href={repository.url}>
        <span role={"img"} aria-label={"Goto Emoji"}>
          👀
        </span>{" "}
        {repository.url}
      </StyledRepository>
      {!!route.subRoutes &&
        !!route.subRoutes.length &&
        route.subRoutes.map(({ component: Component, path }) => <Component key={path} />)}
    </>
  );
}

export default withRouter(Library);
