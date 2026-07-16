import { createParentPageName } from "@/utils";
import styles from "./styles.module.css";
import { CategoryKey } from "@/constants";
import { usePathname } from "next/navigation";

type Props = {
  category: CategoryKey;
  pageTitle: string;
};
const Breadcrumb = (props: Props) => {
  const pathname = usePathname();
  const page = pathname.split("/")[2];
  const { category, pageTitle } = props;
  const parentTitle = createParentPageName(category);
  const parentPage =
    page === undefined ? null : (
      <li>
        <a href={`/${category}`}>{parentTitle}</a>
      </li>
    );
  return category === "none" ? null : (
    <nav aria-label="Breadcrumb" className={`${styles.breadcrumb} mb-7`}>
      <ol>
        <li>
          <a href="/">トップ</a>
        </li>
        {parentPage}
        {/* <li aria-current="page">{pageTitle}</li> */}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
