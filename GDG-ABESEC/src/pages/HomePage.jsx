import About from "../components/About";
import OrganisersAndActingGenerals from "../components/OrganiserAndActingGenerals"; 
export default function HomePage() {
  return (
    <div className="w-full  overflow-x-hidden">
      <About /> 
      <OrganisersAndActingGenerals />
    </div>
  );
}