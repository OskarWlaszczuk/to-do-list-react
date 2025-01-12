import Section from "../../common/Section";
import { PageTitle } from "../../common/PageTitle";
import { Image } from "./styled";
import { CenteredParagraph } from "../../common/CenteredParagraph";

export const AuthorPage = () => (
    <>
        <PageTitle content="Autor" />
        <Section
            title="Oskar Właszczuk"
            body={

                <>
                    <Image src="https://avatars.githubusercontent.com/u/155220171?v=4" />
                    <CenteredParagraph>
                        Cześć! <br />Jestem młodym, zdeterminowanym i zdescyplinowanym chłopakiem, który z pasją podchodzi do siłowni i programowania. Każdego dnia staram się rozwijać swoje umiejętności, zarówno fizyczne, jak i umysłowe, starając się przy okazji dobrze, przy tym bawić. Moje zaangażowanie w treningi i kodowanie pozwala mi nieustannie pokonywać własne granice i osiągać nowe cele.
                    </CenteredParagraph>
                    <CenteredParagraph>
                        Jeżeli chcesz się dowiedzieć więcej o projekcie, sprawdź moje
                        <a
                            title="Repozytorium Listy zadań na GitHub"
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/OskarWlaszczuk/to-do-list-react.git"
                        >
                            repozytorium na GitHub
                        </a>
                    </CenteredParagraph>
                </>
            }
        />
    </>
);