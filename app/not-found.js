export default function NotFound() {
  return (
    <main className="not-found">
      <a className="not-found-mark" href="/" aria-label="Return to Nate Xu home">
        NX
      </a>
      <div>
        <p className="eyebrow dark">404 / OPEN CIRCUIT</p>
        <h1>This path ends here.</h1>
        <p>
          The page may have moved, but the work is still connected.
        </p>
        <a className="button primary" href="/">
          Return home <span aria-hidden="true">→</span>
        </a>
      </div>
    </main>
  );
}
