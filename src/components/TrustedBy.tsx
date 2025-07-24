import Image from "next/image";

export default function TrustedBy() {
  const logos = [
    "microsoft.png",
    "gspann.png",
    "realme.png",
    "welspun.png",
    "enablex.png",
    "indigo.png",
    "coding-ninjas.png",
  ];

  return (
    <section className="py-10 bg-white text-center">
      <p className="text-black text-2xl font-medium mb-6">
        Trusted by Leading Organisations, Schools, Colleges & NGOs
      </p>
      <div className="flex flex-wrap justify-center items-center gap-10 bg-blue-50 py-6">
        {logos.map((logo, idx) => (
          <Image
            key={idx}
            src={`/logos/${logo}`}
            alt={logo.replace(".png", "")}
            width={100}
            height={40}
          />
        ))}
      </div>
    </section>
  );
}