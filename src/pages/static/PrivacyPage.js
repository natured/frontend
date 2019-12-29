import React from 'react';
// import { PageView } from '../../../services/Analytics';
import page from '../page';

class PrivacyPage extends React.Component {
  static head = () => ({ title: 'Privacy', robots: 'noindex, nofollow' });

  componentWillMount() {
    // PageView.track('Content', 'Privacy Policy');
  }

  render() {
    return (
      <div className="content-page">
        <div className="centered padded">
          <div className="non-header">Privacy Policy</div>
          <p className="larger-paragraph">Last Updated on March 19, 2018</p>
        </div>

        <p className="body-paragraph">
            We value your privacy. This policy explains our
            privacy practices for <u>natured.co</u> and services
            provided by Natured, Inc. ("Natured"). By visiting this website,
            you are accepting the terms of this Privacy Policy.
            We are not responsible for the content or the privacy
            policies of other websites linked to on our site.
        </p>

        <div className="title">Information We Gather or Receive</div>

        <p className="body-paragraph">
            Natured will not sell or disclose your name, email address
            or other personal information to third parties without
            your explicit consent, except as specified in this policy.
        </p>

        <p className="body-paragraph">
            Natured may require additional information, such as billing
            and payment information (including billing address,
            telephone number, credit card information), a telephone
            number, and/or a physical address. Credit card information
            on an account may be stored and used for billing purposes.
        </p>

        <p className="body-paragraph">
            Natured automatically receives and records some information
            from your browser when you visit the site, such as your
            IP address, cookies and data about which pages you visit
            on the site through the use of log files provided by our
            third-party tracking-utility partners. This information
            helps us analyze and understand how the site works for
            customers and visitors, and provide a more personalized
            experience for members and visitors.
        </p>

        <p className="body-paragraph">
            Natured may receive or collect information (for example:
            email address) about a person who is not yet a registered
            Natured customer in connection with certain Natured features,
            including but not limited to: a non-customer subscribing
            to a Natured newsletter or a non-customer requesting
            Natured near them.
        </p>

        <p className="body-paragraph">
            Natured uses the information described in this policy to
            provide and improve our services, for billing and
            payments, for identification and authentication purposes,
            to contact members or interested parties, and for general
            research and aggregate reporting.
        </p>

        <p className="body-paragraph">
            Natured’s Terms of Use require all account owners to be
            at least 18 years of age (or have the permission and
            supervision of a responsible parent or legal guardian),
            therefore, this policy does not discuss use of our site
            or services by minors.
        </p>

        <div className="title">Controlling Your Information</div>

        <p className="body-paragraph">
            We want you to have control over your own information,
            so Natured gives you the choice of providing, editing or
            removing certain information.
        </p>

        <p className="body-paragraph">
            You may change or correct your Natured account information
            at any time, such as your email address, phone number or
            credit card information.
        </p>

        <p className="body-paragraph">
            For various reasons, Natured may contact you about our
            services or your activity. Some of these messages are
            required, transaction-related message to customers. Other
            messages are not required, such as our newsletters, and
            you can control which optional messages you choose to
            receive by changing your settings in your account.
        </p>

        <p className="body-paragraph">
            If you no longer wish to use Natured’s services or receive
            service-related messages, please contact our support team.
        </p>

        <div className="title">Messages from Natured</div>

        <p className="body-paragraph">
            To fulfill orders and keep you informed, Natured will
            contact you. Typically, messages are delivered by email
            and SMS messages, and every account is required to keep a
            valid email address and phone number on file to receive
            messages. In some situations, Natured may contact you by
            telephone or physical mail to provide you with information
            about products and features you may find of interest or
            to provide you with customer support. You may update your
            contact preferences in your account settings.
        </p>

        <p className="body-paragraph">
            Some messages from Natured are service-related and required
            for customers. Examples of service-related messages include,
            but are not limited to: a welcome/confirmation email when
            you register your account, confirmation of your order,
            or correspondence with the Natured support team. These
            messages are not promotional in nature. You may not
            opt-out of receiving service-related messages from
            Natured, unless you close your account.
        </p>

        <p className="body-paragraph">
            As a customer, Natured may also send you messages related
            to certain features on the site or your activity. Natured
            may also send you news or updates about changes to our
            site or services. By default, customers will receive these
            messages via email, but you may choose to opt-out of
            getting certain emails under your account settings.
        </p>

        <p className="body-paragraph">
            Natured offers optional email newsletters. When you
            register for an account, or choose to subscribe, you will
            receive newsletters from us. Newsletters are available
            to both customers and non-customers. Customers may
            subscribe or unsubscribe from optional newsletters under
            your account settings or by following the instructions
            contained in the newsletter emails. Non-customers may
            subscribe by providing an email address. Non-customers
            may unsubscribe from newsletters by following the
            instructions contained in the newsletter emails.
        </p>

        <div className="title">What Information We Share</div>

        <p className="body-paragraph">
            Natured will never sell or disclose your name, email
            address or other personal information to third parties
            without your explicit consent, except as specified in
            this policy.
        </p>

        <p className="body-paragraph">
            As part of shopping from producers on our website,
            Natured will facilitate the sharing of information
            between the two members involved in the transaction. As
            part of the buying process, the producers you purchase
            from will receive your name, email address, and phone
            number, and/or other information, such as order date,
            to assist in fulfilling your order.
        </p>

        <p className="body-paragraph">
            Natured may release your personal information to a
            third-party in order comply with a subpoena or other
            legal requirement, or when we believe in good faith that
            such disclosure is necessary to comply with the law;
            prevent imminent physical harm or financial loss; or
            investigate or take action regarding illegal activities,
            suspected fraud, or violations of Natured’ Terms of Use.
            We may disclose personally identifiable information to
            parties in compliance with our Copyright Policy, as we
            in our sole discretion believe necessary or appropriate
            in connection with an investigation of fraud, intellectual
            property infringement, piracy, or other unlawful activity.
            In such events, Natured may disclose name, address,
            country, phone number, email address and company name.
        </p>

        <p className="body-paragraph">
            Natured uses other companies and people to perform tasks
            on our behalf, and we need to share your information
            with them to provide products and services to you.
            Examples include but are not limited to fulfilling orders,
            processing payments, handling billing disputes and
            collections, analyzing data, providing marketing assistance
            and providing customer service.
        </p>

        <p className="body-paragraph">
            In some cases, Natured may choose to buy or sell assets.
            In these types of transactions, member information is
            typically one of the business assets that is transferred.
            Natured will transfer information about you if Natured
            is acquired by or merged with another company. In this
            event, Natured will notify you by email or by putting a
            prominent notice on the site before information about
            you is transferred and becomes subject to a different
            privacy policy. When you a load a page on Natured that
            has a social plug-in from a third-party site or service,
            such as a Like or Send button, you are also loading
            content from that third-party site. That site may request
            cookies directly from your browser. These interactions
            are subject to the privacy policy of the third-party site.
        </p>

        <p className="body-paragraph">
            We can only speak for ourselves; this policy does not
            apply to the practices of third parties that Natured does
            not own or control, or individuals that Natured does not
            employ or manage. If you provide your information to
            others on Natured or throughout the Internet, different
            rules may apply to the use or disclosure of the information
            you provide to them. Natured does not control the privacy
            policies of third parties, and you are subject to the
            privacy policies of those third parties where applicable.
            Natured is not responsible for the privacy or security
            practices of other websites on the Internet, even those
            linked to or from the Natured site. We encourage you to
            ask questions before you disclose your personal
            information to others.
        </p>

        <p className="body-paragraph">
            We reserve the right to transfer information (including
            your personal data) to a third party in the event of a
            sale, merger, liquidation, receivership or transfer of
            all or substantially all of the assets of our company
            provided that the third party agrees to adhere to the
            terms of our Privacy Policy and provided that the third
            party only uses your personal data for the purposes that
            you provided it to us. You will be notified in the event
            of any such transfer and you will be afforded an
            opportunity to opt-out.
        </p>

        <div className="title">Cookies & Tracking Technologies</div>

        <p className="body-paragraph">
            Natured uses a variety of technologies to help us better
            understand how people use our site and services. Natured
            may partner with third-party services who may use various
            tracking technologies, such as browser cookies or Flash
            cookies, to provide certain services or features. These
            technologies allow a partner to recognize your computer
            each time you visit Natured, but do not allow access to
            personally identifiable information from Natured. Natured
            does not have access or control over these third-party
            technologies, and they are not covered by our privacy
            statement.
        </p>

        <div className="title">Data Retention</div>

        <p className="body-paragraph">
            Natured will retain your information only for as long as
            is necessary or your account is active or as needed to
            provide you services. If you no longer want Natured to
            use your information to provide you services, you may
            close your account. Natured will retain and use your
            information as necessary to improve your experience with
            our products and services, comply with law enforcement
            and resolve disputes.
        </p>

        <p className="body-paragraph">
            You may inform us of any changes or requests in regards
            to your personal data, and in accordance with our
            obligations under local data protection law, we may
            update or delete your personal data accordingly.
        </p>

        <div className="title">Privacy Policy Changes</div>

        <p className="body-paragraph">
            Natured reserves the right to modify this privacy statement
            at any time, so please review it periodically. We’ll
            communicate changes by posting a notice on the site. If we
            make material changes to this policy you will be notified
            here, by email, or other places Natured deems appropriate.
        </p>

        <div className="title">Contact Natured</div>

        <p className="body-paragraph">
            We welcome your questions or comments regarding the
            Privacy Policy.
        </p>

        <p className="body-paragraph">
            If you have questions or suggestions you can contact
            the Natured support team by sending an email to
            <a className="bright-link"> support@<u>natured.co</u></a>.
        </p>
      </div>
    );
  }
}

export default {
  component: page(PrivacyPage)
};
