import Sidebar from "../sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-[90%] max-h-[90%] min-w-[90%] max-w-[90%] bg-onBackground rounded-2xl md:grid-cols-[minmax(0,_12%)_1fr] md:grid md:grid-rows-[1fr] p-4 shadow-lg">
      <Sidebar />
      {children}
    </div>
  )
}