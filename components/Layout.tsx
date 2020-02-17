import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
};

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => (
  <div style={layoutStyle}>
    <Header />
    {children}
  </div>
);

export default Layout;
