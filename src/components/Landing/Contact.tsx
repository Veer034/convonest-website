import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import Image from "next/image";
export default function Contact() {
  const items = [
    {
      category: "Our Location",
      description:
        "Ananya City, Simaliya, Fulkibagan, Ratu, Ranchi, Jharkhand, 835222",
    },
    {
      category: "How Can We Help?",
      description: "admin@convonest.com",
    },
  ];

  return (
    <div>
      <section
        id="contact"
        className="bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 py-24"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-10 text-5xl font-bold text-gray-800">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform">
              <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                <Image
                  src="/Images/ranveer.jpg" // Replace with the actual image path
                  alt="Ranveer Singh"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-700">
                Ranveer Singh
              </h3>
              <p className="text-lg text-blue-600">Co-Founder</p>
              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/ranveersingh92"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-blue-500 hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
            {/* Team Member 2 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform">
              <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                <Image
                  src="/Images/bharat.png" // Replace with the actual image path
                  alt="Bharat Jaigad"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-700">
                Bharat Jaigad
              </h3>
              <p className="text-lg text-blue-600">Co-Founder</p>
              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/bharat-jangid-b3891697"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-blue-500 hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-10 text-5xl font-bold text-gray-800">Contact Us</h2>
          <div className="space-y-8">
            {items.map((item, index) => (
              <div key={index} className="text-lg">
                <p className="mb-2 text-2xl font-semibold text-blue-600">
                  {item.category}
                </p>
                {item.category === "How Can We Help?" ? (
                  <a
                    href={`mailto:${item.description}`}
                    className="text-gray-700 hover:text-blue-500 hover:underline"
                  >
                    {item.description}
                  </a>
                ) : (
                  <p className="text-gray-700">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
