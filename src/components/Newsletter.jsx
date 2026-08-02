import { useState } from 'react'; // Removed 'React' to fix the "defined but never used" error
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ subscribe, status, message }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.indexOf("@") > -1) {
      subscribe({ EMAIL: email });
    }
  };

  // We determine the value to show based on the status
  // If successful, we show an empty string; otherwise, we show the state
  const inputValue = status === "success" ? "" : email;

  return (
    <div className="max-w-md mx-auto py-12 px-4">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Enter Email"
          className="bg-black border border-zinc-800 text-white p-4 font-industrial tracking-widest focus:border-highlight focus:outline-none transition-colors text-center uppercase placeholder:text-xs"
          onChange={(e) => setEmail(e.target.value)}
          value={inputValue}
          required
        />
        <button 
          type="submit"
          disabled={status === "sending"}
          className="bg-zinc-950 text-highlight border border-highlight/30 py-4 tracking-[0.3em] font-bold hover:bg-highlight hover:text-black transition-all disabled:opacity-50 uppercase"
        >
          {status === "sending" ? "TRANSMITTING..." : "Join Mailing List"}
        </button>
      </form>

      <div className="mt-6 text-[10px] font-mono uppercase tracking-[0.2em] min-h-5 text-center">
        {status === "sending" && <div className="text-zinc-500">Connecting to frequency...</div>}
        {status === "error" && (
          <div 
            className="text-red-500" 
            dangerouslySetInnerHTML={{ __html: message }} 
          />
        )}
        {status === "success" && (
          <div className="text-highlight">You have been added to the archive.</div>
        )}
      </div>
    </div>
  );
};

const Newsletter = () => {
  const url = "https://gmail.us9.list-manage.com/subscribe/post?u=410d24934a471dd23864ad0b3&id=681240077d&f_id=0072d4e3f0";

  return (
    <section className="border-t border-zinc-900 bg-black">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            subscribe={formData => subscribe(formData)}
          />
        )}
      />
    </section>
  );
};

export default Newsletter;