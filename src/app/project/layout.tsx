import Layout from "@/app/project/components/layout";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Layout>
        <div className="flex flex-row justify-center items-center">
          {children}
        </div>
      </Layout>
    </div>
  );
}