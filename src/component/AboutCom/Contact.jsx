const Contact = () => {
  return (
    <div className="card flex-col p-10">
      <p className="font-semibold text-md mb-1">Contact with us</p>
      <h1 className="text-4xl font-semibold mb-2">Get in touch</h1>
      <p className="font-semibold text-sm lg:w-1/2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aut,
        quod eius fugit non ipsa libero consectetur officia illo quae?
      </p>
      <div className="flex flex-col md:flex-row justify-between mt-6">
        <form className="p-5 flex flex-col gap-4 md:w-[60%]">
          <div className="flex items-center gap-6">
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Your Email"
            />
          </div>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Your Subject"
          />
          <textarea
            type="text"
            className="textarea textarea-bordered w-full"
            placeholder="Your Message"
          ></textarea>
          <div className="flex justify-end">
            <button className="btn btn-neutral px-8">Send Message</button>
          </div>
        </form>
        <div className="flex flex-col">
          <div className="card p-5">
            <p className="font-semibold">Cloty Store</p>
            <p className="text-sm font-semibold">
              Germany — 785 15h Street, Office 478/B Green Mall Berlin, De 81566
            </p>
            <div className="mt-8 flex flex-col">
              <p className="font-semibold">Phone: +1 1234 567 88</p>
              <p className="font-semibold">Email: contact@example.com</p>
            </div>
          </div>
          <div className="card p-5">
            <p className="font-semibold">Opening Hours</p>
            <div className="mt-6">
              <p className="font-semibold">Monday-Friday : 09.am / 05.pm</p>
              <p className="font-semibold">Weekend Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
