# Giflin Godshia — Business Portfolio

React + Vite portfolio focused on business development, management and operations, and client relations.

## Contact form delivery

The form sends messages through EmailJS only when all three settings below are configured. Create an EmailJS service and a template addressed to `giflingodshia19@gmail.com`, with template variables `from_name`, `reply_to`, `subject`, and `message`. Add the service ID, template ID, and EmailJS public key to a local `.env` file:

```text
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Restart Vite after changing `.env`. Vite variables are included in browser code, so use only the EmailJS public key here—never put an email account password, private API key, or other secret in a `VITE_` variable. Restrict the EmailJS service to the portfolio’s deployed domain where possible.

If these settings are not present, submitting the validated form opens a prefilled draft in the visitor’s email application. The page explicitly tells the visitor that the draft is not sent until they send it from that application.

## Run locally

```sh
npm install
npm run dev
```

Run `npm run lint` and `npm run build` to validate the project and create the production build.
