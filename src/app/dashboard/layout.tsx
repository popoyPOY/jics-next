import { verifySession } from "@/auth/stateless";
export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {


    const verify = await verifySession();

    return (
        <>
        {children}
        </>
    );
  }