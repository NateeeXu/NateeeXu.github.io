import Portfolio from "../components/Portfolio";
import { pageMetadata } from "./metadata";

export const metadata = pageMetadata("en");

export default function Home() {
  return <Portfolio lang="en" />;
}
