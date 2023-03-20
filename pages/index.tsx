import type { GetStaticProps } from "next";
import Image from "next/image";
import { Client } from "@notionhq/client";
import React from "react";
import styled from "styled-components";
import { SEO } from "../components/seo/SEO";
import { VideoBackground } from "../components/media/VideoBackground";
import { Logo } from "../components/styled/Logo";

type TLink = { text: string; url: string };

export default function HomePage({ links }: { links: TLink[] }) {
  return (
    <>
      <SEO />
      <StyledHomePage>
        <header>
          <Logo />
        </header>
        <main>
          {links.map((link) => (
            <a
              key={link.url}
              className="link-box"
              rel="noreferrer"
              target="_blank"
              href={link.url}
            >
              {link.text}
            </a>
          ))}
        </main>
        <VideoBackground autoPlay src="/bg1.mp4" />
      </StyledHomePage>
    </>
  );
}

const StyledHomePage = styled.div`
  // background: #09cc6a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
  // ITEMS
  a,
  a:visited,
  a:active {
    color: #383823;
  }
  header,
  main {
    width: 100%;
    max-width: 400px;
    min-height: 120px;
    margin: 0 auto;
    z-index: 1;
  }
  header {
    background: url("/chaosgardenclub.svg"), rgba(10, 10, 10, 0.5);
    border-top: 4px solid #1f1;
    border-bottom: 4px solid #1f1;
    background-position: center;
    background-size: 200%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    svg {
      mix-blend-mode: difference;
      height: 120px;
      path {
        fill: #fff;
      }
    }
  }
  .link-box {
    display: block;
    background: #1f1;
    margin: 12px 0;
    padding: 16px 24px;
    font-weight: 500;
    font-size: 14px;
    line-height: 125%;
    border-bottom: 4px solid #1a1;
    text-transform: uppercase;
    text-align: center;
    &:hover {
      cursor: pointer;
      transform: scale(1.02);
    }
  }
`;

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  // DATA
  const notion = new Client({
    auth: process.env.NOTION_SECRET!,
  });
  const blocks = await notion.blocks.children.list({
    block_id: process.env.LINKS_PAGE_ID!,
  });
  // LINKS
  const links: TLink[] = [];
  blocks.results.forEach((block: any) => {
    if (block.type === "paragraph" && block.paragraph.rich_text[0]) {
      links.push({
        text: block.paragraph.rich_text[0].plain_text,
        url: block.paragraph.rich_text[0].href,
      });
    }
  });
  // RESULTS
  return {
    props: {
      links,
    },
    revalidate: 60, // seconds
  };
};
