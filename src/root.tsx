import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';

import 'src/shared/model/EnvironmentService';
import 'src/shared/model/ApiService';

interface LayoutProps {
  readonly children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Branching Tales — Demo RPG</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}
