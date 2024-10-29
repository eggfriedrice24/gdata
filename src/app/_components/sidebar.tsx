const routes = [
  {
    url: "About",
  },
  {
    url: "Workflow",
  },
  {
    url: "Tier III",
  },
  {
    url: "Career",
  },
  {
    url: "Contact",
  },
  {
    url: "Partners",
  },
];

export function Sidebar() {
  return (
    <div className="fixed top-80">
      <ul className="flex flex-col gap-2 pl-14">
        {routes.map((r) => (
          <li key={r.url} className="text-4xl text-[#ABD98FB0]">
            {r.url}
          </li>
        ))}
      </ul>
    </div>
  );
}
