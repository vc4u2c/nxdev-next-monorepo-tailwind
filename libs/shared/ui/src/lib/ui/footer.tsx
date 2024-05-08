'use client';

export interface FooterProps {
  companyName: string;
}

export function Footer(props: FooterProps) {
  return (
    <footer className="p-3 text-right border-t text-xs">
      © {props.companyName} {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
