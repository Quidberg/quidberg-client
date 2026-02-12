import AdminAuthForm from "../../containers/authentication/AdminAuthForm";

const AdminAuth = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen mt-10">
      <div className="mb-6 font-semibold">
        <p>{"ADMINISTRATOR LOGIN"}</p>
      </div>
      <AdminAuthForm />
    </div>
  );
};

export default AdminAuth;
