import Contact from "./SiteComponents/Contact";
import Header from "./SiteComponents/Header";
import ImageBlock from "./SiteComponents/ImageBlock";
import List from "./SiteComponents/List";
import Paragraph from "./SiteComponents/Paragraph";
import Location from "./SiteComponents/Location";
import Block from "./SiteComponents/Block";
import LinkComponent from "./SiteComponents/Link";
import Separator from "./SiteComponents/Separator";
import Grid from "./SiteComponents/Grid";

export const registry: Record<string, React.FC<{ component: any }>> = {
  header: Header,
  paragraph: Paragraph,
  list: List,
  image: ImageBlock,
  contact: Contact,
  location: Location,
  block: Block,
  link: LinkComponent,
  separator: Separator,
  grid: Grid
};