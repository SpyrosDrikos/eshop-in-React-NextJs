import { useI18n } from "../src/i18n/i18ncontext";

export default function PreFooter({ promises, footerCols }) {
  const { t } = useI18n();

  // Map promise titles to translation keys
  const translatePromise = (p) => {
    const titleMap = {
      "FREE SHIPPING": { title: t.footer.freeShipping, text: t.footer.freeShippingText },
      "24/7 CUSTOMER SUPPORT": { title: t.footer.support, text: t.footer.supportText },
      "FREE EXCHANGE": { title: t.footer.freeExchange, text: t.footer.freeExchangeText },
      "SECURE PAYMENTS": { title: t.footer.securePayments, text: t.footer.securePaymentsText },
    };
    return titleMap[p.title] || p;
  };

  // Map footer column titles to translation keys
  const translateColTitle = (title) => {
    const map = {
      "CONTACT": t.footer.contact,
      "USEFUL LINKS": t.footer.usefulLinks,
      "COMPANY": t.footer.company,
      "LEGAL": t.footer.legal,
    };
    return map[title] || title;
  };

  return (
    <>
      <div className="prefooterPromises">
        {promises.map(p => {
          const translated = translatePromise(p);
          return (
            <div className="promiseCard" key={p.title}>
              <h3>{translated.title}</h3>
              <p>{translated.text}</p>
            </div>
          );
        })}
      </div>
      <div className="footerLinks">
        {footerCols.map(col => (
          <div className="footerCol" key={col.title}>
            <h4>{translateColTitle(col.title)}</h4>
            {col.links.map(l => <a key={l} href="#">{l}</a>)}
          </div>
        ))}
      </div>
      <div className="footerBar">
        <span>📍 {t.footer.location}</span>
        <span>© Spyros Drikos {t.footer.rights}</span>
      </div>
    </>
  );
}