export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        gap: "10px",
      }}
    >
      <a href="error-page">Page with autoCapitalize mismatch error</a>
      <a href="no-error-page">Page without autoCapitalize mismatch error</a>
    </main>
  );
}
