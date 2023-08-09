export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="mb-4">dashboard layout</nav>
      <div className="p-5 border-white border-2">{children}</div>
    </section>
  );
}
