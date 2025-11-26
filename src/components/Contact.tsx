export default function Contact() {
  return (
    <section id="contact" className="p-10 bg-amber-300">
      <h2 className="text-4xl font-bold text-light-blue-600 mb-6">
        Contact Me
      </h2>
      <form className="space-y-4 max-w-md">
        <div>
          <label className="block text-light-blue-800 mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-2 border border-light-blue-400 rounded"
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div>
          <label className="block text-light-blue-800 mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-2 border border-light-blue-400 rounded"
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div>
          <label className="block text-light-blue-800 mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full p-2 border border-light-blue-400 rounded"
            id="message"
            name="message"
            rows={4}
          ></textarea>
        </div>
        <button
          className="bg-light-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition duration-300"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
