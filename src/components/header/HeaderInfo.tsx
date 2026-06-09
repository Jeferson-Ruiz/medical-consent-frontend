import Header from "./Header";

export function HeaderInfo(){
  return(
    <Header
      appName="Api Consentimiento Demo"
      userName="Jeferson"
      navLinks={[
        { label: "Inicio",        href: "/" },
      ]}
      onLogout={() => console.log("logout")}
    />
  );
}

export default HeaderInfo;