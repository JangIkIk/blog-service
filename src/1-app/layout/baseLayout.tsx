import Header from "../layout/header/ui";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function BaseLayout(props: Props) {
  const { children } = props;
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
}
