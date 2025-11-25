import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-amber-400">
      {/* Home Section */}
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-extrabold text-light-blue-600 mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-2xl text-light-blue-800 mb-8">
          Explore my projects, skills, and experience.
        </p>
        <Image
          src="/profile-picture.jpg" // Ensure this image exists in the public folder
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full border-4 border-light-blue-600"
        />
      </div>
      {/*About Me Section */}
      <div id="about" className="p-10 bg-amber-100">
        <h2 className="text-4xl font-bold text-light-blue-600 mb-6">About Me</h2>
        <p className="text-lg text-light-blue-800 max-w-3xl">
          Hello! I'm Kesavan, a passionate developer with experience in building web applications using modern technologies. I love creating efficient and scalable solutions to solve real-world problems.
        </p>
      </div>
      {/*Skills Section */}
      <div id="skills" className="p-10 bg-amber-200">
        <h2 className="text-4xl font-bold text-light-blue-600 mb-6">My Skills</h2>
        <ul className="list-disc list-inside space-y-2 text-light-blue-800">
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js / Express</li>
          <li>Python / Django</li>
          <li>HTML5 & CSS3</li>
          <li>Database Management (SQL, MongoDB)</li>
        </ul> 
      </div>

      {/*Experience Section */}
      <div id="experience" className="p-10 bg-amber-200">
        <h2 className="text-4xl font-bold text-light-blue-600 mb-6">Experience</h2>
        <div className="space-y-6 text-light-blue-800">
          <div>
            <h3 className="text-2xl font-semibold">Software Developer at Tech Solutions</h3>
            <p className="italic">Jan 2022 - Present</p>
            <ul className="list-disc list-inside mt-2">
              <li>Developed and maintained web applications using React and Node.js.</li>
              <li>Collaborated with cross-functional teams to define project requirements.</li>
              <li>Implemented RESTful APIs and integrated third-party services.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Intern at Web Innovators</h3>
            <p className="italic">Jun 2021 - Dec 2021</p>
            <ul className="list-disc list-inside mt-2">
              <li>Assisted in the development of client websites using HTML, CSS, and JavaScript.</li>
              <li>Participated in code reviews and team meetings.</li>
              <li>Gained experience in version control using Git.</li>
            </ul>
          </div>
        </div>
      </div>
            {/*Certifications Section */}
            <div id="certifications" className="p-10 bg-amber-100">
        <h2 className="text-4xl font-bold text-light-blue-600 mb-6">Certifications</h2>
        <ul className="list-disc list-inside space-y-2 text-light-blue-800">
          <li>Certified JavaScript Developer - XYZ Institute</li>
          <li>Full Stack Web Development - ABC Academy</li>
          <li>Cloud Computing Fundamentals - CloudCert</li>
        </ul> 
      </div>
      {/* Contact Section */}
      <div id="contact" className="p-10 bg-amber-300">
        <h2 className="text-4xl font-bold text-light-blue-600 mb-6">Contact Me</h2>
        <form className="space-y-4 max-w-md">
          <div>
            <label className="block text-light-blue-800 mb-2" htmlFor="name">Name</label>
            <input className="w-full p-2 border border-light-blue-400 rounded" type="text" id="name" name="name" />
          </div>
          <div>
            <label className="block text-light-blue-800 mb-2" htmlFor="email">Email</label>
            <input className="w-full p-2 border border-light-blue-400 rounded" type="email" id="email" name="email" />
          </div>
          <div>
            <label className="block text-light-blue-800 mb-2" htmlFor="message">Message</label>
            <textarea className="w-full p-2 border border-light-blue-400 rounded" id="message" name="message" rows={4}></textarea>
          </div>
          <button className="bg-light-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition duration-300" type="submit">Send Message</button>
        </form>
      </div>

    </main>
  );
}
