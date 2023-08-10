export default function DashboardLayout({
  team,
  analytics,
  children, // will be a page or nested layout
}: {
  team: any;
  analytics: any;
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="mb-4">dashboard layout</nav>
      <div className="flex">
        {team}
        {analytics}
      </div>
      <div className="p-5 border-white border-2">{children}</div>
    </section>
  );
}
