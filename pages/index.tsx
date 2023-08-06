import React from "react";
import styled from "styled-components";
import { SEO } from "../components/seo/SEO";
import { QuestTree } from "../components/quests/QuestTree";
import { HeaderActions } from "../components/layout/HeaderActions";
import { TQuest } from "../components/quests/types";
import { ProjectList } from "../components/projects/ProjectList";
import { ugcTheme } from "../components/styled/theme";
import { HeaderNav } from "../components/layout/HeaderNav";
import { EquipmentList } from "../components/equipment/EquipmentList";
import { Sidebar } from "../components/layout/Sidebar";

export default function HomePage({ quests }: { quests: TQuest[] }) {
  // RENDER
  return (
    <>
      <SEO />
      <HeaderNav />
      <StyledHomePage>
        <main>
          <QuestTree quests={quests} />
        </main>
        <Sidebar />
      </StyledHomePage>
    </>
  );
}

const StyledHomePage = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  main {
    margin: 0;
    z-index: 1;
    flex-grow: 1;
    height: 100%;
  }
  aside {
    max-width: 420px;
    width: 100%;
    padding: 0.75em;
    background: ${ugcTheme.colors.blue[100]};
    overflow: hidden;
  }

  // on mobile, stack the quest tree + sidebar buttons
  @media (max-width: 720px) {
    flex-direction: column;
    main {
      height: 90%;
    }
    aside {
      max-width: 100%;
    }
  }
`;

// LEGACY: NOW JUST HARD CODING THE MAP
// export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
//   // DATA
//   const notion = new Client({
//     auth: process.env.NOTION_SECRET!,
//   });
//   const blocks = await notion.blocks.children.list({
//     block_id: process.env.LINKS_PAGE_ID!,
//   });
//   // LINKS
//   const quests: TQuest[] = [];
//   blocks.results.forEach((block: any) => {
//     if (block.type === "paragraph" && block.paragraph.rich_text[0]) {
//       quests.push({
//         title: block.paragraph.rich_text[0].plain_text,
//         url: block.paragraph.rich_text[0].href,
//       });
//     }
//   });
//   // RESULTS
//   return {
//     props: {
//       quests,
//     },
//     revalidate: 60, // seconds
//   };
// };
