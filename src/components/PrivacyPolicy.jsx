import React from 'react'

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Your privacy is important to us
          </p>
        </div>

        <div className="contact-card">
          <div className="text-gray-300 leading-relaxed space-y-6">
            <div>
              <p className="text-sm text-gray-400 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <p className="mb-4">
                We collect information you provide directly to us, such as when you contact us through our website, 
                subscribe to our newsletter, or use our services.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Contact information (name, email address, phone number)</li>
                <li>Professional information (company, job title)</li>
                <li>Messages and communications you send to us</li>
                <li>Usage information and analytics data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you updates about our services (with your consent)</li>
                <li>Analyze usage patterns to improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Information Sharing</h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as described in this policy:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Service providers who assist us in operating our website and services</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
                privacy policy, unless a longer retention period is required or permitted by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Objection to processing of your information</li>
                <li>Data portability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, 
                and understand user preferences. You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Services</h2>
              <p>
                Our website may contain links to third-party websites or services. We are not responsible for the privacy 
                practices of these third parties. We encourage you to review their privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Children's Privacy</h2>
              <p>
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal 
                information from children under 13. If we become aware of such collection, we will delete the information immediately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate 
                safeguards are in place to protect your information in accordance with this privacy policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new 
                privacy policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 rounded-lg p-4 border border-gray-800">
                <p className="text-gray-300">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:gustavo.canaleslopez@gmail.com" className="text-blue-400 hover:text-blue-300">
                    gustavo.canaleslopez@gmail.com
                  </a>
                </p>
                <p className="text-gray-300 mt-2">
                  <strong>Company:</strong> DevLab
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/" className="btn btn-secondary">
            Back to Home
          </a>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy