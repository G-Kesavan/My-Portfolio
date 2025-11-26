export default function Experience() {
  return (
    <section id="experience" className="p-10 bg-amber-200">
      <h2 className="text-4xl font-bold text-light-blue-600 mb-6">
        Experience
      </h2>
      <div className="space-y-6 text-light-blue-800">
        <div>
          <h3 className="text-2xl font-semibold">
            Software Developer at Tech Solutions
          </h3>
          <p className="italic">Jan 2022 - Present</p>
          <ul className="list-disc list-inside mt-2">
            <li>
              Developed and maintained web applications using React and Node.js.
            </li>
            <li>
              Collaborated with cross-functional teams to define project
              requirements.
            </li>
            <li>
              Implemented RESTful APIs and integrated third-party services.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Intern at Web Innovators</h3>
          <p className="italic">Jun 2021 - Dec 2021</p>
          <ul className="list-disc list-inside mt-2">
            <li>
              Assisted in the development of client websites using HTML, CSS,
              and JavaScript.
            </li>
            <li>Participated in code reviews and team meetings.</li>
            <li>Gained experience in version control using Git.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
