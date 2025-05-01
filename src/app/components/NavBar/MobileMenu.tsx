import NavLinks from "./NavLinks";

export default function MobileMenu({ open }: { open: boolean }) {
  if (!open) return null;

  return (
    <div className="md:hidden border-b-1 border-slate-200 bg-white/20 px-4 py-3 space-y-3 ">
      <NavLinks isMobile />
    </div>
  );
}
