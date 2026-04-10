export default function PreFooter({ promises, footerCols }) {
  return (
    <>
      <div className="prefooter-promises">
        {promises.map(p => (
          <div className="promise-card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
      <div className="footer-links">
        {footerCols.map(col => (
          <div className="footer-col" key={col.title}>
            <h4>{col.title}</h4>
            {col.links.map(l => <a key={l} href="#">{l}</a>)}
          </div>
        ))}
      </div>
      <div className="footer-bar">
        <span>📍 Greece</span>
        <span>© Spyros Drikos All Rights Reserved 2024</span>
      </div>
    </>
  );
}
