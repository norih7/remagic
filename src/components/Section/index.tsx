import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
};
const Section = (props: Props) => {
  const { children, className = "" } = props;
  return (
    <section className={`${className} ${styles.section} mb-12`}>
      {children}
    </section>
  );
};

export default Section;
