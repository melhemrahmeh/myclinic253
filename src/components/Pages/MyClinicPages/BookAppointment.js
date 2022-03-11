import Header from "../../myclinic/Header.js"
import NavBar from "../../myclinic/NavBar.js"
import Appointment from "../../myclinic/Appointment.js"
import Footer from "../../myclinic/Footer.js"

const BookAppointment = () => {
    return (
        <div >
            <Header />
            <NavBar isMain={false} isTeam={false} isOperations={false} isAbout={false} />
            <Appointment />
            <Footer isMain={false} isTeam={false}/>
        </div>
    );
}

export default BookAppointment;