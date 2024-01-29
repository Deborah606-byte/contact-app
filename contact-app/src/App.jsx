import "./App.css";
import Navbar from "./components/Navbar";
import ContactDetails from "./components/ContactDetails";
import ContactList from "./components/ContactList";

function App() {
  return (
    <>
      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      <div className="grid lg:grid-cols-12">
        {/* Contact list on the left */}
        <div className="col-span-4 p-4">
          <ContactList />
        </div>
        {/* Contact details on the right */}
        <div className="col-span-8 p-4">
          <ContactDetails />
        </div>
      </div>
    </>
  );
}

export default App;
