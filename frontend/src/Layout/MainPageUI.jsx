const ParallaxSection = ({ image, title, subtitle }) => {
  return (
    <div
      className="relative h-screen bg-center bg-cover bg-no-repeat bg-scroll md:bg-fixed flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-wide">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-2xl mx-auto text-gray-200 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
export default ParallaxSection;