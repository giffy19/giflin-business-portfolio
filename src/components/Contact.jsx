import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const RECIPIENT = 'giflingodshia19@gmail.com';
const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
const hasEmailJsConfig = Object.values(emailJsConfig).every(Boolean);

const initialForm = { name: '', email: '', subject: '', message: '' };

const validateForm = form => {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Please enter your full name.';
  if (!form.email.trim()) errors.email = 'Please enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!form.subject.trim()) errors.subject = 'Please enter a subject.';
  if (!form.message.trim()) errors.message = 'Please enter a message.';
  return errors;
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = event => {
    const { name, value } = event.target;
    setForm(current => ({ ...current, [name]: value }));
    setErrors(current => ({ ...current, [name]: undefined }));
    setStatus(null);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (submitting) return;

    const validationErrors = validateForm(form);
    setErrors(validationErrors);
    setStatus(null);
    if (Object.keys(validationErrors).length > 0) {
      document.getElementById(`contact-${Object.keys(validationErrors)[0]}`)?.focus();
      return;
    }

    const cleanForm = {
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    };

    if (!hasEmailJsConfig) {
      const body = [
        `Name: ${cleanForm.name}`,
        `Email: ${cleanForm.email}`,
        '',
        cleanForm.message,
      ].join('\n');
      const query = new URLSearchParams({ subject: cleanForm.subject, body });
      setStatus({
        type: 'info',
        message: 'No email service is configured. Your email app should open with a draft; the message is not sent until you press Send there.',
      });
      window.location.href = `mailto:${RECIPIENT}?${query.toString()}`;
      return;
    }

    setSubmitting(true);
    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: cleanForm.name,
          reply_to: cleanForm.email,
          subject: cleanForm.subject,
          message: cleanForm.message,
        },
        { publicKey: emailJsConfig.publicKey },
      );
      setForm(initialForm);
      setErrors({});
      setStatus({ type: 'success', message: 'Your message has been sent. Thank you for reaching out.' });
    } catch {
      setStatus({
        type: 'error',
        message: `Your message could not be sent. Please try again or email ${RECIPIENT} directly.`,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const fieldProps = name => ({
    id: `contact-${name}`,
    name,
    value: form[name],
    onChange: handleChange,
    required: true,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
  });

  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-copy">
            <p className="section-eyebrow">Let’s connect</p>
            <h2 className="section-title" id="contact-title">Contact</h2>
            <h3>Have an opportunity or want to connect?</h3>
            <p>
              Feel free to send me a message. I’d be happy to hear from you.
            </p>
            <address className="contact-details">
              <a href={`mailto:${RECIPIENT}`}>{RECIPIENT}</a>
              <a
                href="https://www.linkedin.com/in/giflin-godshia-889428258"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn profile
              </a>
              <span>Chennai, India</span>
            </address>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="contact-name">Full Name</label>
              <input
                {...fieldProps('name')}
                type="text"
                autoComplete="name"
                aria-label="Full Name"
              />
              {errors.name && <span className="field-error" id="contact-name-error">{errors.name}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">Email Address</label>
              <input
                {...fieldProps('email')}
                type="email"
                autoComplete="email"
                aria-label="Email Address"
              />
              {errors.email && <span className="field-error" id="contact-email-error">{errors.email}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="contact-subject">Subject</label>
              <input {...fieldProps('subject')} type="text" />
              {errors.subject && <span className="field-error" id="contact-subject-error">{errors.subject}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea {...fieldProps('message')} rows="5" />
              {errors.message && <span className="field-error" id="contact-message-error">{errors.message}</span>}
            </div>

            <button className="btn btn-primary form-submit" type="submit" disabled={submitting}>
              {submitting ? 'Sending…' : 'Send Message'}
            </button>

            {submitting && <p className="form-status" role="status">Sending your message…</p>}
            {status && (
              <p className={`form-status form-status-${status.type}`} role={status.type === 'error' ? 'alert' : 'status'}>
                {status.message}
                {status.type === 'error' && <> <a href={`mailto:${RECIPIENT}`}>Email Giflin directly.</a></>}
              </p>
            )}
          </form>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} Giflin Godshia</span>
          <a className="contact-link-item" href="/GIFLIN_GODSHIA_DS.pdf" download="Giflin_Godshia_Resume.pdf">
            Download Resume
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
