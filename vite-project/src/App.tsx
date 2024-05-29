import { DashboardLayout } from "./components/dashboardLayout";
import { Header } from "./components/header";
import { Usercard } from "./components/usercard";
import { users } from "./data/users";

export default function App() {
  return (
    <>
      <DashboardLayout>
        <div>Hello</div>
        <Header />
        <section>
          {users.map(({ id, ...props }) => {
            return <Usercard key={id} {...props} />;
          })}
        </section>
      </DashboardLayout>
    </>
  );
}
