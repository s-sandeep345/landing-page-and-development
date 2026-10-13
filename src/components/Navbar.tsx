import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
const links = [{ label: 'About', href: '#about' }, { label: 'Features', href: '#features' }, { label: 'How it works', href: '#how-it-works' }, { label: 'Pricing', href: '#pricing' }];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="navbar"><a className="brand" href="#home" aria-label="Launchly home"><span className="brand-mark">L</span><span>launchly<span className="brand-dot">.</span></span></a><nav className={open ? 'nav-links nav-open' : 'nav-links'}>{links.map(l => <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}<a className="mobile-cta" href="#pricing" onClick={() => setOpen(false)}>Get started <ArrowUpRight size={16}/></a></nav><a className="button button-dark nav-cta" href="#pricing">Get started <ArrowUpRight size={16}/></a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X/> : <Menu/>}</button></header>;
}
