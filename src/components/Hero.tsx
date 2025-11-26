import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen py-2"
    >
      <h1 className="text-6xl font-extrabold text-light-blue-600 mb-4">
        Welcome to My Portfolio
      </h1>
      <p className="text-2xl text-light-blue-800 mb-8">
        Explore my projects, skills, and experience.
      </p>
      <Image
        src="" // Ensure this image exists in the public folder
        alt="Profile Picture"
        width={200}
        height={200}
        className="rounded-full border-4 border-light-blue-600"
      />
    </section>
  );
}
