import type { GetStaticProps } from "next";
import { Client } from "@notionhq/client";
import React from "react";
import styled from "styled-components";
import { SEO } from "../components/seo/SEO";
import { QuestTree } from "../components/quests/QuestTree";
import { HeaderActions } from "../components/layout/HeaderActions";
import { TQuest } from "../components/quests/types";
import { QuestList } from "../components/quests/QuestList";
import { ProjectList } from "../components/projects/ProjectList";
import { ugcTheme } from "../components/styled/theme";
import { HeaderNav } from "../components/layout/HeaderNav";

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
        <aside>
          <HeaderActions invert />
          <ProjectList />
        </aside>
      </StyledHomePage>
    </>
  );
}

const StyledHomePage = styled.div`
  min-height: 100vh;
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
    width: 420px;
    padding: 0.75em;
    background: ${ugcTheme.colors.blue[100]};
    overflow: hidden;
    & > header {
      margin-bottom: 0.5em;
    }
    @media (max-width: 45em) {
      display: none;
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
