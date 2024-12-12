import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";

const Footer = () => {
    return ( <footer className="text-slate-200 text-sm mt-16" style={{ backgroundColor: "#3c5453" }}>
        <Container>
            <div className="flex flex-col md:flex-row justify-between pt-16 pb-8 transition hover:text-bold">
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Categories</h3>
                    <Link href='#'>Vinyls</Link>
                    <Link href='#'>Turntables</Link>
                    <Link href='#'>Accessories</Link>
                </FooterList>
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Customer Service</h3>
                    <Link href='#'>Contact Us</Link>
                    <Link href='#'>Shipping Policy</Link>
                    <Link href='#'>FAQs</Link>
                </FooterList>
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <h3 className="text-base font-bold mb-2">About Us</h3>
                    <p className="mb-2 text-justify">VinylVortex is your ultimate destination for all things vinyl. We specialize in premium vinyl records, high-quality turntables, and essential accessories to elevate your listening experience. Whether you’re a seasoned audiophile or a curious newcomer, VinylVortex connects you with the timeless magic of analog sound.</p>
                    <p>&copy; {new Date().getFullYear()} VinylVortex. All rights reserved.</p>
                </div>
            </div>
        </Container>
    </footer> );
}
 
export default Footer;