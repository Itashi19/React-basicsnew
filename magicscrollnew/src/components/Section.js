export default function Section(props) {
    const { refSection, className, title, subtitle, children } = props;
  
    return (
      <section className={className} ref={refSection}>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        {subtitle && <p dangerouslySetInnerHTML={{ __html: subtitle }} />}
        {children}
      </section>
    );
  }
  