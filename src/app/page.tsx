"use client";
export default function Home() {

  const handleLogin = () => {
    window.location.href = "http://localhost:8081/oauth2/authorization/keycloak";
  };

  return (
    <div className="flex flex-col items-center justify-center border border-secondary rounded-xl shadow-shadow shadow-3xl text-secondary p-4 gap-4 cursor-pointer hover:bg-secondary hover:text-onSecondary transition-colors duration-300 hover:text-shadow">
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
