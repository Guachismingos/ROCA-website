import Footer from "@/shared/Footer";

const Home = () => {
  
  return (
    <div className="h-[calc(100svh-6rem)] overflow-auto snap-proximity snap-y scroll-smooth">
      <section id="home-section" className="relative flex items-center justify-center h-[calc(100svh-6rem)] snap-start bg-main-banner bg-no-repeat bg-cover bg-center">
        <span className="absolute z-0 px-10 text-3xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
          dolorum laboriosam error animi dolor, soluta tempore fugit eum, ea
          officiis adipisci? Sequi, ipsum. Quos blanditiis magni sint dicta
          sapiente temporibus!
        </span>
      </section>
      <section id="about-section" className="snap-start h-[calc(100svh-6rem)] bg-[red]">Conocenos</section>
      <section id="services-section" className="snap-start h-[calc(100svh-6rem)] bg-[green]">Servicios</section>
      <section id="projects-section" className="snap-start h-[calc(100svh-6rem)] bg-[purple]">Proyectos</section>
      <section id="contact-section" className="snap-start h-[calc(100svh-6rem)] bg-[yellow]">Contactenos</section>
      <div className="snap-end">
      <Footer />
      </div>
    </div>
  );
};

export default Home;
