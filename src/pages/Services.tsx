import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard";
import cardiologyImage from "@/assets/cardiology.jpg";
import orthopedicsImage from "@/assets/orthopedics.jpg";
import oncologyImage from "@/assets/oncology.jpg";
import entImage from "@/assets/ent.jpg";
import neurologyImage from "@/assets/neurology.jpg";
import nephrologyImage from "@/assets/nephrology.jpg";
import dentistryImage from "@/assets/dentistry.jpg";
import vascularImage from "@/assets/vascular.jpg";
import plasticSurgeryImage from "@/assets/plastic-surgery.jpg";
import pulmonologyImage from "@/assets/pulmonology.jpg";
import gastroenterologyImage from "@/assets/gastroenterology.jpg";
import dermatologyImage from "@/assets/dermatology.jpg";

const services = [
  {
    id: "cardiology",
    title: "Cardiology & CTVS",
    description: "Centre of excellence in cardiology and cardiothoracic vascular surgery with robotic-assisted procedures",
    image: cardiologyImage,
  },
  {
    id: "orthopedics",
    title: "Robotic Orthopedics",
    description: "Center of excellence in robotic-assisted orthopedic surgeries with advanced joint replacement",
    image: orthopedicsImage,
  },
  {
    id: "neurology",
    title: "Neurosciences",
    description: "Comprehensive neurology, interventional neurology, neurosurgery, brain & spine services",
    image: neurologyImage,
  },
  {
    id: "nephrology",
    title: "Nephrology & Urology",
    description: "Advanced kidney transplants, nephrology care, urology services with robotic-assisted surgeries",
    image: nephrologyImage,
  },
  {
    id: "oncology",
    title: "Oncology - Cancer Care",
    description: "Comprehensive cancer treatment with medical, surgical & radiation oncology, bone marrow transplant",
    image: oncologyImage,
  },
  {
    id: "pulmonology",
    title: "Pulmonology & Respiratory",
    description: "Advanced pulmonology, respiratory medicine, sleep & allergy studies with interventional procedures",
    image: pulmonologyImage,
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology & Hepatology",
    description: "Expert gastro & liver care with robotic surgeries, liver transplants, and advanced endoscopy",
    image: gastroenterologyImage,
  },
  {
    id: "dermatology",
    title: "Dermatology & Aesthetics",
    description: "Comprehensive skin care, cosmetic dermatology, hair transplants, and advanced aesthetic treatments",
    image: dermatologyImage,
  },
  {
    id: "ophthalmology",
    title: "Ophthalmology",
    description: "Advanced eye surgeries including LASIK, cataract surgery, retina services, and pediatric ophthalmology",
    image: orthopedicsImage,
  },
  {
    id: "ent",
    title: "ENT & Cochlear Implants",
    description: "World-class ENT care and cochlear implant services with advanced treatments",
    image: entImage,
  },
  {
    id: "dentistry",
    title: "Dentistry & Implantology",
    description: "Comprehensive dental care, implantology, and maxillofacial surgery",
    image: dentistryImage,
  },
  {
    id: "vascular",
    title: "Vascular Surgery",
    description: "Advanced care for arteries, veins & circulatory disorders with minimally invasive procedures",
    image: vascularImage,
  },
  {
    id: "plastic-surgery",
    title: "Plastic & Cosmetic Surgery",
    description: "World-class plastic and cosmetic surgery including reconstructive and aesthetic procedures",
    image: plasticSurgeryImage,
  },
  {
    id: "general-medicine",
    title: "General Medicine",
    description: "Comprehensive internal medicine, endocrinology, infectious diseases & metabolic disorders",
    image: cardiologyImage,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-12 bg-gradient-to-b from-secondary/30 via-background to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 gradient-text">
              Our Medical Services
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              World-class treatment across multiple specialties with internationally accredited hospitals and experienced medical professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="animate-fade-in-scale" style={{ animationDelay: `${index * 0.05}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
