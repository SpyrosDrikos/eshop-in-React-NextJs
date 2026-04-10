export default function PreFooter({ promises, footerCols }) {
  return (
    <>
      <div className="prefooterPromises">
        {promises.map(p => (
          <div className="promiseCard" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
      <div className="footerLinks">
        {footerCols.map(col => (
          <div className="footerCol" key={col.title}>
            <h4>{col.title}</h4>
            {col.links.map(l => <a key={l} href="#">{l}</a>)}
          </div>
        ))}
      </div>
      <div className="footerBar">
        <span>📍 Greece</span>
        <span>© Spyros Drikos All Rights Reserved 2024</span>
      </div>
    </>
  );
}
