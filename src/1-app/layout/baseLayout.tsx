import Header from "./header/ui";

type Props = Readonly<{
  children: React.ReactNode;
}>;

function BaseLayout(props: Props) {
  const { children } = props;
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="px-4 py-5 max-w-5xl m-auto">{children}</main>
    </div>
  );
}

export default BaseLayout;