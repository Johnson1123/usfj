import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import ContactFormSection from '@/components/medium/ContactFormSection';
import ContactBanner from '@/components/medium/ContactUsBanner';
import ContactUsNewsletter from '@/components/small/ContactUsNewsletter';
import { ToastContainer } from 'react-toastify';

const ContactUsPage = () => {
    return (
        <>
            <Header />
            <ContactBanner />
            <ContactFormSection />
            <ContactUsNewsletter />
            <Footer />
            <ToastContainer />
        </>
    );
};

export default ContactUsPage;
