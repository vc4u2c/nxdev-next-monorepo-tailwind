'use client';

export interface FooterProps {
  companyName: string;
}

export function Footer(props: FooterProps) {
  return (
    <footer className="p-4 text-center border-t">
      © {props.companyName} {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
