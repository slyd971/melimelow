export default function Custom404() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#080607",
        color: "white",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: 24,
      }}
    >
      <div>
        <h1 style={{ margin: 0, fontSize: 48, textTransform: "uppercase" }}>
          MelyMelow
        </h1>
        <p style={{ marginTop: 16, color: "#cfc3bb" }}>Page introuvable.</p>
      </div>
    </main>
  );
}
