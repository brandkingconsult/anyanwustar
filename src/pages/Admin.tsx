import { useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import {
  LayoutGrid,
  FolderKanban,
  Inbox,
  Settings as SettingsIcon,
  Plus,
  Pencil,
  Trash2,
  ArrowUpRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { projects as seedProjects, type Project, type ProjectKind } from "@/data/projects";

/* ---------------- Layout ---------------- */

const navItems = [
  { to: "/admin", label: "Overview", icon: LayoutGrid, end: true },
  { to: "/admin/projects", label: "Projects", icon: FolderKanban },
  { to: "/admin/inquiries", label: "Inquiries", icon: Inbox },
  { to: "/admin/settings", label: "Settings", icon: SettingsIcon },
];

const AdminShell = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const current = navItems.find((n) =>
    n.end ? pathname === n.to : pathname.startsWith(n.to),
  );
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <aside className="hidden w-64 shrink-0 border-r border-border md:block">
        <div className="flex h-16 items-center border-b border-border px-6">
          <Link to="/" className="font-display text-sm font-semibold">
            Star<span className="text-primary">.</span>
            <span className="ml-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Admin
            </span>
          </Link>
        </div>
        <nav className="p-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                }`
              }
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="absolute bottom-6 left-6 text-xs text-muted-foreground">
          Local UI · No backend
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-border px-6 md:px-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Dashboard
            </p>
            <h1 className="font-display text-lg">{current?.label ?? "Admin"}</h1>
          </div>
          <Link
            to="/"
            className="link-underline inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
          >
            View site <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </header>
        <main className="flex-1 p-6 md:p-10">{children}</main>
      </div>
    </div>
  );
};

/* ---------------- Overview ---------------- */

const Stat = ({ label, value, hint }: { label: string; value: string; hint: string }) => (
  <div className="border border-border p-6">
    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
    <p className="mt-6 font-display text-4xl">{value}</p>
    <p className="mt-2 text-xs text-muted-foreground">{hint}</p>
  </div>
);

const Overview = () => (
  <div className="space-y-10">
    <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
      <div className="bg-background"><Stat label="Total projects" value="7" hint="4 work · 3 product" /></div>
      <div className="bg-background"><Stat label="Inquiries · 30d" value="12" hint="+3 vs prior period" /></div>
      <div className="bg-background"><Stat label="Profile views" value="2,418" hint="+18% vs prior period" /></div>
      <div className="bg-background"><Stat label="Strategy Calls" value="3" hint="Booked this month" /></div>
    </div>

    <div className="border border-border">
      <div className="flex items-center justify-between border-b border-border px-6 py-4">
        <p className="font-display text-base">Recent activity</p>
        <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Mock data</span>
      </div>
      <ul className="divide-y divide-border text-sm">
        {[
          ["New inquiry", "Mira K.; Fintech strategy call", "2h ago"],
          ["Project updated", "Lumen; Mobile Banking", "Yesterday"],
          ["Inquiry replied", "Daniel R.", "2 days ago"],
          ["Project created", "Signal", "Last week"],
        ].map(([a, b, c]) => (
          <li key={b} className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-6">
              <span className="w-32 text-xs uppercase tracking-[0.18em] text-muted-foreground">{a}</span>
              <span>{b}</span>
            </div>
            <span className="text-xs text-muted-foreground">{c}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

/* ---------------- Projects (CRUD, local state) ---------------- */

const emptyDraft: Project = {
  slug: "",
  kind: "work",
  title: "",
  role: "",
  year: new Date().getFullYear().toString(),
  date: new Date().toISOString().slice(0, 10),
  summary: "",
  tags: [],
  overview: "",
  problem: [],
  solution: "",
  keyFeatures: [],
  myRole: [],
  outcome: "",
};

const Projects = () => {
  const [items, setItems] = useState<Project[]>(seedProjects);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<Project>(emptyDraft);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);

  const startCreate = () => {
    setDraft(emptyDraft);
    setEditingSlug(null);
    setOpen(true);
  };
  const startEdit = (p: Project) => {
    setDraft(p);
    setEditingSlug(p.slug);
    setOpen(true);
  };
  const save = () => {
    if (!draft.title || !draft.slug) return;
    if (editingSlug) {
      setItems((prev) => prev.map((p) => (p.slug === editingSlug ? draft : p)));
    } else {
      setItems((prev) => [draft, ...prev]);
    }
    setOpen(false);
  };
  const remove = (slug: string) =>
    setItems((prev) => prev.filter((p) => p.slug !== slug));

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{items.length} projects</p>
        <button
          onClick={startCreate}
          className="inline-flex items-center gap-2 border border-foreground px-4 py-2 text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background"
        >
          <Plus className="h-3.5 w-3.5" /> New project
        </button>
      </div>

      <div className="border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Year</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead className="w-32 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((p) => (
              <TableRow key={p.slug}>
                <TableCell>
                  <p className="font-medium">{p.title}</p>
                  <p className="text-xs text-muted-foreground">{p.role}</p>
                </TableCell>
                <TableCell>
                  <span className="border border-border px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {p.kind}
                  </span>
                </TableCell>
                <TableCell>{p.year}</TableCell>
                <TableCell className="text-xs text-muted-foreground">
                  {p.tags.join(" · ")}
                </TableCell>
                <TableCell className="text-right">
                  <button
                    onClick={() => startEdit(p)}
                    className="mr-2 inline-flex h-8 w-8 items-center justify-center text-muted-foreground hover:bg-secondary hover:text-foreground"
                    aria-label="Edit"
                  >
                    <Pencil className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => remove(p.slug)}
                    className="inline-flex h-8 w-8 items-center justify-center text-muted-foreground hover:bg-secondary hover:text-destructive"
                    aria-label="Delete"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl border-border bg-background">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">
              {editingSlug ? "Edit project" : "New project"}
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4 md:grid-cols-2">
            <Field label="Title">
              <input className={inputCls} value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} />
            </Field>
            <Field label="Slug">
              <input className={inputCls} value={draft.slug} onChange={(e) => setDraft({ ...draft, slug: e.target.value })} />
            </Field>
            <Field label="Role">
              <input className={inputCls} value={draft.role} onChange={(e) => setDraft({ ...draft, role: e.target.value })} />
            </Field>
            <Field label="Year">
              <input className={inputCls} value={draft.year} onChange={(e) => setDraft({ ...draft, year: e.target.value })} />
            </Field>
            <Field label="Type">
              <select
                className={inputCls}
                value={draft.kind}
                onChange={(e) => setDraft({ ...draft, kind: e.target.value as ProjectKind })}
              >
                <option value="work">Work</option>
                <option value="product">Product</option>
              </select>
            </Field>
            <Field label="Tags (comma separated)">
              <input
                className={inputCls}
                value={draft.tags.join(", ")}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    tags: e.target.value.split(",").map((t) => t.trim()).filter(Boolean),
                  })
                }
              />
            </Field>
            <Field label="Summary" full>
              <textarea rows={2} className={inputCls} value={draft.summary} onChange={(e) => setDraft({ ...draft, summary: e.target.value })} />
            </Field>
            <Field label="Overview" full>
              <textarea rows={2} className={inputCls} value={draft.overview} onChange={(e) => setDraft({ ...draft, overview: e.target.value })} />
            </Field>
            <Field label="Solution" full>
              <textarea rows={2} className={inputCls} value={draft.solution} onChange={(e) => setDraft({ ...draft, solution: e.target.value })} />
            </Field>
            <Field label="Outcome" full>
              <textarea rows={2} className={inputCls} value={draft.outcome} onChange={(e) => setDraft({ ...draft, outcome: e.target.value })} />
            </Field>
          </div>

          <DialogFooter>
            <button
              onClick={() => setOpen(false)}
              className="border border-border px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
            >
              Cancel
            </button>
            <button
              onClick={save}
              className="border border-foreground px-4 py-2 text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background"
            >
              Save
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const inputCls =
  "w-full border border-border bg-secondary/40 px-3 py-2 text-sm text-foreground outline-none focus:border-primary";

const Field = ({
  label,
  children,
  full,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) => (
  <div className={`space-y-2 ${full ? "md:col-span-2" : ""}`}>
    <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
      {label}
    </label>
    {children}
  </div>
);

/* ---------------- Inquiries ---------------- */

const seedInquiries = [
  { id: 1, name: "Mira K.", email: "mira@northbeam.io", topic: "Strategy Call", status: "new", date: "Today" },
  { id: 2, name: "Daniel R.", email: "daniel@field.studio", topic: "Product build", status: "replied", date: "Yesterday" },
  { id: 3, name: "Imani O.", email: "imani@atlashealth.io", topic: "UI/UX engagement", status: "new", date: "2 days ago" },
  { id: 4, name: "Theo P.", email: "theo@ledgerlite.app", topic: "Partnership", status: "archived", date: "Last week" },
];

const Inquiries = () => {
  const [items, setItems] = useState(seedInquiries);
  const cycle = (id: number) =>
    setItems((prev) =>
      prev.map((i) =>
        i.id === id
          ? {
              ...i,
              status:
                i.status === "new" ? "replied" : i.status === "replied" ? "archived" : "new",
            }
          : i,
      ),
    );

  return (
    <div className="border border-border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>From</TableHead>
            <TableHead>Topic</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Received</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((i) => (
            <TableRow key={i.id}>
              <TableCell>
                <p className="font-medium">{i.name}</p>
                <p className="text-xs text-muted-foreground">{i.email}</p>
              </TableCell>
              <TableCell>{i.topic}</TableCell>
              <TableCell>
                <button
                  onClick={() => cycle(i.id)}
                  className={`border px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] ${
                    i.status === "new"
                      ? "border-primary text-primary"
                      : i.status === "replied"
                      ? "border-border text-foreground"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {i.status}
                </button>
              </TableCell>
              <TableCell className="text-right text-xs text-muted-foreground">
                {i.date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

/* ---------------- Settings ---------------- */

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "Star",
    title: "Designer · Founder · Product Builder",
    email: "hello@star.studio",
    bio: "I design interfaces, build real products end-to-end with AI-assisted development, and help businesses sharpen their digital presence.",
    twitter: "https://x.com/",
    linkedin: "https://linkedin.com/in/",
  });
  const [saved, setSaved] = useState(false);

  return (
    <div className="max-w-2xl space-y-8">
      <div className="grid gap-6">
        <Field label="Display name">
          <input className={inputCls} value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
        </Field>
        <Field label="Tagline">
          <input className={inputCls} value={profile.title} onChange={(e) => setProfile({ ...profile, title: e.target.value })} />
        </Field>
        <Field label="Public email">
          <input className={inputCls} value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
        </Field>
        <Field label="Bio">
          <textarea rows={4} className={inputCls} value={profile.bio} onChange={(e) => setProfile({ ...profile, bio: e.target.value })} />
        </Field>
        <Field label="X / Twitter">
          <input className={inputCls} value={profile.twitter} onChange={(e) => setProfile({ ...profile, twitter: e.target.value })} />
        </Field>
        <Field label="LinkedIn">
          <input className={inputCls} value={profile.linkedin} onChange={(e) => setProfile({ ...profile, linkedin: e.target.value })} />
        </Field>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            setSaved(true);
            setTimeout(() => setSaved(false), 1600);
          }}
          className="border border-foreground px-4 py-2 text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background"
        >
          Save changes
        </button>
        {saved && (
          <span className="text-xs uppercase tracking-[0.18em] text-primary">
            Saved locally
          </span>
        )}
      </div>
    </div>
  );
};

/* ---------------- Root ---------------- */

const Admin = () => {
  return (
    <AdminShell>
      <Routes>
        <Route index element={<Overview />} />
        <Route path="projects" element={<Projects />} />
        <Route path="inquiries" element={<Inquiries />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </AdminShell>
  );
};

export default Admin;
