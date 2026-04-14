import { useI18n } from "../src/i18n/i18ncontext";

const CATEGORY_SLUGS = {
  "DRESSES": "dresses",
  "SKIRTS": "skirts",
  "BLOUSES": "blouses",
  "JEANS": "jeans",
  "MEN'S PANTS": "mens-pants",
  "ACCESSORIES": "accessories"
};

export default function HotCategories({ categories, setPage }) {
  const { t } = useI18n();

  const getTranslatedLabel = (label) => {
    const map = {
      "DRESSES": t.categories.dresses?.toUpperCase(),
      "SKIRTS": t.categories.skirts?.toUpperCase(),
      "BLOUSES": t.categories.blouses?.toUpperCase(),
      "JEANS": t.categories.jeans?.toUpperCase(),
      "MEN'S PANTS": t.categories.mensPants?.toUpperCase(),
      "ACCESSORIES": t.categories.accessories?.toUpperCase()
    };
    return map[label] || label;
  };

  return (
    <>
      <h2 className="sectionTitle">{t.sections.hotCategories}</h2>
      <div className="catGrid">
        {categories.map(cat => {
          const slug = CATEGORY_SLUGS[cat.label];
          return (
            <div
              className="catCard"
              key={cat.label}
              onClick={() => slug && setPage(`category:${slug}`)}
              style={{ cursor: slug ? "pointer" : "default" }}
            >
              <img src={cat.img} alt={cat.label} />
              <div className="catLabel">{getTranslatedLabel(cat.label)}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}