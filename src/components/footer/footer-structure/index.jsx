import { ContentFooter } from "./content";
import { LinksFooter } from "./links";
import { LinkFooter } from "./links/links";
import { LogoFooter } from "./logo";
import { MediasFooter } from "./medias";
import { MediaFooter } from "./medias/medias";
import { FooterRoot } from "./root";

export const FooterStructure = {
    Root: FooterRoot,
    Medias: MediasFooter,
    Media: MediaFooter,
    Links: LinksFooter,
    Link: LinkFooter,
    Logo: LogoFooter,
    Content: ContentFooter,
}