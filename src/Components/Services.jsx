const services = [
  "Product listing with reusable components",
  "Add to cart functionality",
  "Responsive UI using Tailwind CSS",
  "Fast and optimized React rendering",
  "Clean and modern user interface",
];

const Services = () => {
  return (
    <div className="min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>

      <div className="max-w-xl mx-auto">
        <ul className="space-y-4">
          {services.map((service, index) => (
            <li
              key={index}
              className="p-4 border rounded-lg shadow-sm"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
