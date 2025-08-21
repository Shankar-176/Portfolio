import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import { profile } from '../data/profile'

export function Contact(){
  const formRef = useRef(null)
  const [status, setStatus] = useState({ type: '', msg: '' })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', msg: 'Sending your message...' })
    
    try {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if(!serviceID || !templateID || !publicKey){
        throw new Error('EmailJS is not configured. Add VITE_EMAILJS_* vars to .env')
      }

      const res = await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      setStatus({ type: 'success', msg: 'Message sent successfully! I will get back to you soon.' })
      formRef.current.reset()
    } catch (err) {
      setStatus({ type: 'error', msg: err.message || 'Failed to send message. Please try again later.' })
    }
  }

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      title: "Email",
      value: profile.email,
      link: `mailto:${profile.email}`,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
      ),
      title: "Phone",
      value: profile.phone,
      link: `tel:${profile.phone}`,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
        </svg>
      ),
      title: "LinkedIn",
      value: "Connect with me",
      link: profile.linkedin,
      gradient: "from-blue-600 to-blue-700",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
        </svg>
      ),
      title: "GitHub",
      value: "View my code",
      link: profile.github,
      gradient: "from-gray-700 to-gray-900",
      bgGradient: "from-gray-50 to-gray-100"
    }
  ]

  return (
    <section id="contact" className="card-hover animate-fade-in-up">
      <div className="section-header">
        <div className="section-icon">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
        </div>
        <h2 className="section-title">Let's Connect</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 margin-400">Get in Touch</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or simply have a conversation about technology and innovation. Feel free to reach out!
            </p>
          </div>

          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noreferrer' : ''}
                className={`contact-item bg-gradient-to-r ${method.bgGradient} border-l-4 border-transparent hover:border-current`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`contact-icon bg-gradient-to-r ${method.gradient}`}>
                  {method.icon}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{method.title}</div>
                  <div className="text-gray-600 text-sm">{method.value}</div>
                </div>
                <div className="ml-auto">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
            
            <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input 
                  name="from_name" 
                  required 
                  className="form-input" 
                  placeholder="John Doe" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Your Email</label>
                <input 
                  name="reply_to" 
                  type="email" 
                  required 
                  className="form-input" 
                  placeholder="john@example.com" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input 
                  name="subject" 
                  required 
                  className="form-input" 
                  placeholder="Project Collaboration" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea 
                  name="message" 
                  required 
                  rows="5" 
                  className="form-input form-textarea" 
                  placeholder="Tell me about your project or just say hello..." 
                />
              </div>
              
              <button 
                type="submit" 
                disabled={status.type === 'loading'}
                className="btn-primary w-full justify-center text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.type === 'loading' ? (
                  <>
                    <svg className="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                  </>
                )}
              </button>
              
              {status.msg && (
                <motion.div 
                  className={`p-4 rounded-lg text-sm font-medium ${
                    status.type === 'success' ? 'status-success' :
                    status.type === 'error' ? 'status-error' : 'status-loading'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center">
                    {status.type === 'success' && (
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    )}
                    {status.type === 'error' && (
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    )}
                    {status.msg}
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}