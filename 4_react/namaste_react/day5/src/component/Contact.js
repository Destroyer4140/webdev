
const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form aria-label="contact-us">
        <input type="text" placeholder="name" className=" border border-black p-2 m-2"></input>
        <input type="text" placeholder="message" className="border border-black p-2 m-2"></input>
        <button className="border border-black p-2 m-2 rounded-2xl bg-gray-200">Submit</button>
      </form>
    </div>
  );
};

export default Contact;