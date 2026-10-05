export const metadata = {
  title: "404 — Nate Xu",
};

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>This page doesn’t exist.</h1>
      <p>It may have moved. The work is still on the home page.</p>
      <a className="pill pill-primary" href="/">
        <span>Return home</span>
      </a>
    </main>
  );
}
