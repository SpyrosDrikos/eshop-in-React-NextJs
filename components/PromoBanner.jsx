// ─── PROMO BANNER ─────────────────────────────────────────────────────────────
export default function PromoBanner({ title, subtitle, image, buttonText, buttonLink, backgroundColor }) {
  return (
    <div 
      className="promoBanner" 
      style={{ 
        backgroundImage: image ? `url(${image})` : 'none',
        backgroundColor: backgroundColor || 'rgba(182, 39, 30, 0.9)'
      }}
    >
      <div className="promoBannerContent">
        <h2 className="promoBannerTitle">{title}</h2>
        {subtitle && <p className="promoBannerSubtitle">{subtitle}</p>}
        {buttonText && (
          <a href={buttonLink || '#'} className="promoBannerBtn">
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
}
