import Sidebar from "../sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-[90vh] w-[90vw] bg-onBackground rounded-2xl md:grid-cols-[auto_1fr] md:grid md:grid-rows-[1fr] p-4 shadow-lg">
      <Sidebar />
      {children}
    </div>
  )
}