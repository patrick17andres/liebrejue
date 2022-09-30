import IndexContent from "../content";
import Footer from "./footer";
import Header from "./header";
import Carrusel from "../content/accesories/carrusel";
export default function Container() {
    return (
        <div className="bg-black">
            <div className="">
                <Header />
            </div>
            <div className="p-4 sm:p-4">
                <div className="h-full sm:flex-col sm:flex-row  justify-center shadow-xl ">
                    <div className="min-h-screen">
                        <IndexContent />
                    </div>
                </div>
            </div>
            <div className="">
                <Footer />
            </div>
        </div>
    );
}
