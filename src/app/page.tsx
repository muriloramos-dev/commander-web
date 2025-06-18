"use client";
export default function Home() {

  const handleLogin = () => {
    window.location.href = "http://localhost:8081/oauth2/authorization/keycloak";
  };

  return (
    <div className="flex flex-col items-center justify-center border border-secondary rounded-xl shadow-shadow shadow-3xl text-secondary p-4 gap-4 cursor-pointer hover:bg-secondary hover:text-onSecondary transition-colors duration-300 hover:text-shadow">
      {/* <h1 className="text-xl">To login please provide your email</h1>
      <form className="flex flex-col">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border border-gray-300 rounded p-2 mb-4 w-full max-w-xs"
          required />
          <button type="submit" className="self-end px-4 py-2 bg-primary rounded-lg">Send</button>
      </form> */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
