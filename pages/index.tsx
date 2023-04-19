import type { GetStaticProps } from "next";
import { Client } from "@notionhq/client";
import React from "react";
import styled from "styled-components";
import { SEO } from "../components/seo/SEO";
import { QuestTree } from "../components/quests/QuestTree";
import { Header } from "../components/layout/Header";
import { TQuest } from "../components/quests/types";
import { QuestList } from "../components/quests/QuestList";
import { ViewMode, ugcStore } from "../components/ugcStore";

export default function HomePage({ quests }: { quests: TQuest[] }) {
  const { viewMode, setViewMode } = ugcStore();
  // RENDER
  return (
    <>
      <SEO />
      {/* NAV */}
      <Header />
      {/* VIEW */}
      <StyledHomePage>
        {viewMode === ViewMode.diagram ? (
          <main>
            <QuestTree quests={quests} />
          </main>
        ) : (
          <main>
            <QuestList quests={quests} />
          </main>
        )}
      </StyledHomePage>
    </>
  );
}

const StyledHomePage = styled.div`
  min-height: 100vh;
  margin: 0;
  padding: 0;
  main {
    width: 100%;
    max-width: 400px;
    min-height: 120px;
    margin: 0 auto;
    z-index: 1;
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
