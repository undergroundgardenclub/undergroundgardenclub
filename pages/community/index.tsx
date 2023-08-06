import React from "react";
import styled from "styled-components";
import { ugcTheme } from "../../components/styled/theme";
import { HeaderActions } from "../../components/layout/HeaderActions";
import { ProjectCreatorButton } from "../../components/projects/ProjectCreatorButton";
import { ProjectList } from "../../components/projects/ProjectList";
import { SEO } from "../../components/seo/SEO";
import { Sidebar } from "../../components/layout/Sidebar";

export default function CommunityPage() {
  // RENDER
  return (
    <>
      <SEO title="PROJECTS | UNDERGROUND GARDEN CLUB" />
      <StyledCommunityPage>
        <div className="community">
          <Sidebar alwaysShowLists />
        </div>
      </StyledCommunityPage>
    </>
  );
}

const StyledCommunityPage = styled.div`
  background: ${ugcTheme.colors.blue[100]};
  width: 100%;
  max-width: 100vw;
  min-width: 100vw;
  height: 100vh;
  position: fixed;
  overflow-y: scroll;
  & > * {
    max-width: 600px;
    margin: 0 auto 1em;
  }
  & > .community {
    padding: 0.5em;
  }
`;
