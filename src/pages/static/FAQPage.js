import React, { Component } from 'react';
// import { PageView } from '../../../services/Analytics';
import page from '../page';
import { Link } from '../../components/elements';
import FAQSection from '../../components/static/FAQ/FAQSection';
import FAQItem from '../../components/static/FAQ/FAQItem';

class FAQPage extends Component {
  static head = () => ({ title: 'FAQs' });

  // componentWillMount() {
  //   PageView.track('Content', 'FAQ');
  // }

  render() {
    return (
      <div className="faq--page content-page">
        <div className="faq--intro">
          <div className="header--2">FAQs</div>
          <p className="subtitle">
            Can’t find an answer in our FAQs? Send us an e-mail
            at <a href="mailto:help@natured.co">
              help@natured.co
            </a> and our Community Care team will get right back to you!
          </p>
        </div>

        <FAQSection title="Commonly Asked">
          <FAQItem question="Is delivery free?">
            Delivery is <span className="yellow--emphasis">FREE</span> on
            orders over $50 ($9.99 when below). A $9.99 delivery charge
            helps us create a sustainable business model for the future while supporting producers & customers alike.
          </FAQItem>
          <FAQItem question="When do you deliver?">
            We deliver on Tuesdays between 2 & 8 PM. We’ll be adding additional delivery days in the near future.
          </FAQItem>
          <FAQItem question="Where do you deliver?">
            We currently deliver to Metro & Greater Boston areas. <Link to="REGISTER">Check if we deliver to you</Link>.
          </FAQItem>
          <FAQItem question="Do I need to checkout?">
            Nope - we’re currently checkout free! All you'll need is a valid payment method (credit/debit card) in your Account.
          </FAQItem>
          <FAQItem question="How is Natured different?">
            To put it simply, Natured is like shopping a farmers' market for your weekly groceries.
            <ul>
              <li>Support local farmers & artisans.</li>
              <li>Enjoy the best that each season offers.</li>
              <li>Have it all delivered. We’ll take back your packaging & glass bottles on your next delivery!</li>
            </ul>
          </FAQItem>
          <FAQItem question="When do I pay for my order?">
            Your card is authorized at midnight before your delivery. You’re payment is processed after your order is packed. You’ll receive a finalized order receipt to your e-mail.
          </FAQItem>
          <FAQItem question="How do my groceries arrive?">
            Natured groceries arrive reusable insulated bags with cold items kept cool by biodegradale/reusable ice packs.
          </FAQItem>
        </FAQSection>
        <FAQSection title="My Account">
          <FAQItem question="How do I create an Account?">
            You can create your account here: <Link to="REGISTER">Create An Account</Link>.
          </FAQItem>
          <FAQItem question="How do I access My Account?">
            <ul>
              <li><b>On a Desktop:</b> Click ”My Account” in the top right of your screen.</li>
              <li><b>On a Phone:</b> Click the menu button in the top left of your screen & click ”My Account”.</li>
            </ul>
          </FAQItem>
          <FAQItem question="What if I forgot my password?">
            Create a new password by clicking ”Forgot your password?” when trying to login. You’ll be prompted to enter your e-mail address & a password reset link will be sent to your e-mail.
          </FAQItem>
        </FAQSection>
        <FAQSection title="Referring Friends & Family">
          <FAQItem question="How do I use referral credits?">
            Referral credits are automatically applied to your future orders. Referral credits are only applied when the person you’ve referred places their first order.
          </FAQItem>
          <FAQItem question="How do I keep track of my referrals?">
            You can keep track of referrals sent, pending credits, & received credits on the <Link to="INVITE">Referral Page</Link>.
          </FAQItem>
          <FAQItem question="Will my friend know I invited them?">
            Yes, they will. The subject of the invite e-mail mentions your name so your friends know invited them.
          </FAQItem>
          <FAQItem question="How do I invite someone to eat with Natured?">
            Invite someone to eat with Natured by visiting the <Link to="INVITE">Share Local Food, Get $5</Link> page. You can enter multiple e-mails at once!
          </FAQItem>
          <FAQItem question="What if I want to customize my invite message?">
            You are currently unable to customize referral messages.
          </FAQItem>
        </FAQSection>
        <FAQSection title="Ordering">
          <FAQItem question="Is there really no minimum order?">
            Yes! Order a half gallon of milk or a feast for the whole family. We ensure a sustainable business model by adding a $9.99 delivery charge for orders below $50.
          </FAQItem>
          <FAQItem question="Do I need to checkout to place my order?">
            Nope - we’re checkout free at the moment! Shop until midnight the day before
            your delivery. Your order will only be processed if you have a valid payment method in your account (debit/credit card).
          </FAQItem>
          <FAQItem question="Can I edit my order after shopping?">
            Yes, you can! Edit your order up until midnight the day before
            your delivery.
          </FAQItem>
          <FAQItem question="Why do I see “estimated prices” in my cart?">
            You will see estimated prices when you have added weighted items to your cart. These items are weighed when we pack your order & actual weights are reflected in your finalized order receipt.
          </FAQItem>
          <FAQItem question="Why is some food not available?">
            For most items, our producers make-to-order. For example, dough for the bread you’ve ordered needs 2 days to prepare before baking. Or weather fluctuations create unpredictable growing conditions & harvesting periods for our farmers.
            <br /><br />
            Our team is hard at work building tools to keep the market fully stocked for you.
          </FAQItem>
        </FAQSection>
        <FAQSection title="Subscriptions">
          <FAQItem question="How do subscriptions work?">
            Easy – click ”subscribe” on any items that are available for subscription.
            <br /><br />
            Items that <b>are not available</b> to order when you subscribe will be added to you cart for the upcoming week & refill for upcoming weeks.
            <br /><br />
            Items that <b>are available</b> to order when you subscribe will be added to your current order & will automatically refill for upcoming weeks.
          </FAQItem>
          <FAQItem question="Why are subscriptions helpful?">
            We built subscriptions for two primary reasons:
            <ol>
              <li>Help make getting weekly staples as easy as possible.</li>
              <li>Help provide more predictable ordering for our producers.</li>
            </ol>
          </FAQItem>
          <FAQItem question="How do I edit my subscriptions?">
            Edit your subscriptions in the <Link to="ACCOUNT_SUBSCRIPTIONS">subscriptions tab</Link> of your Account page.
          </FAQItem>
          <FAQItem question="Why are some items not subscribable?">
            We only allow subscription to items that are typically non-seasonal or considered household staples.
            <br /><br />
            Think an item should be subscribable? <a href=" mailto:help@natured.co">Send us an e-mail</a>.
          </FAQItem>
          <FAQItem question="What if an item I subscribed to is unavailable?">
            If an item you are subscribed to is not available, we will do our best to find a replacement (free of charge) & will let you know ahead of time by e-mail.
          </FAQItem>
        </FAQSection>
        <FAQSection title="Food">
          <FAQItem question="How does Natured choose the food in the market?">
            We choose the food in the market based on three aspects:
            <ol>
              <li><b>Taste</b> – as delicious as possible.</li>
              <li><b>Location</b> – as close & local whenever possible.</li>
              <li><b>People & Practices</b> – as honest & pure as possible.</li>
            </ol>
          </FAQItem>
          <FAQItem question="What if I have dietary restrictions?">
            We are looking for ways to make Natured a great grocery & eating experience for all. Send us a note with your dietary restrictions – <a href="mailto:hello@natured.co">contact us</a>.
          </FAQItem>
          <FAQItem question="Why is some food not local?">
            We love hearing from our community. After initially being 100% local, many in our community asked if they would eventually be able to get everyday staples such as strawberries, carrots, & more when not available locally.
            <br/><br/>
            We offer a select amount of non-local items that we consider must-haves. Overall, our community is able to get the food they love, conveniently, while not having to make multiple trips elsewhere for items they are getting anyways.
          </FAQItem>
        </FAQSection>
        <FAQSection title="Delivery">
          <FAQItem question="Where do you deliver?">
            We currently deliver to Metro & Greater Boston areas. <Link to="REGISTER">Check if we deliver to you</Link>.
          </FAQItem>
          <FAQItem question="When do you deliver?">
            We deliver on Tuesdays between 2 & 8 PM. We’ll be adding additional delivery days in the near future.
          </FAQItem>
          <FAQItem question="How do my groceries arrive?">
            Natured groceries arrive reusable insulated bags with cold items kept cool by biodegradale/reusable ice packs.
          </FAQItem>
          <FAQItem question="Is delivery free?">
            Delivery is <span className="yellow--emphasis">FREE</span> on
            orders over $50 ($9.99 when below). A $9.99 delivery charge
            helps us create a sustainable business model for the future while supporting producers & customers alike.
          </FAQItem>
          <FAQItem question="What if something was wrong with my delivery?">
            We want you to be thrilled when you’re Natured order is delivered.
            Anything less is not up to our company’s standards. Reach out to
            our Community Care team and we’ll make it right. Please send your
            concerns to <a className="success" href="mailto:help@natured.co">
              help@natured.co
            </a>.
          </FAQItem>
        </FAQSection>
        <FAQSection title="Packaging & Glass Bottles">
          <FAQItem question="What do I do with my packaging?">
            Leave out your reusable packaging on the day of your next delivery. Your Natured delivery driver will take it back. We’ll also take back your glass milk & yogurt bottles!
          </FAQItem>
          <FAQItem question="Can I really return my glass milk & yogurt bottles?">
            You can! Leave them out on the day of your next delivery alonside any other reusable packaging you may have.
          </FAQItem>
          <FAQItem question="Can I request to eliminate plastic packaging from my order?">
            Yes, you can and we love it! We already use very little packaging. Let us know you want no plastic in your deliveries by sending a note to <a className="success" href="help@natured.co">help@natured.co</a>.
          </FAQItem>
        </FAQSection>
        <FAQSection title="Payment & Receipt">
          <FAQItem question="When do I pay for my order?">
            Your card is authorized at midnight before your delivery. You’re payment is processed after your order is packed. You’ll receive a finalized order receipt to your e-mail.
          </FAQItem>
          <FAQItem question="Does Natured accept EBT/SNAP?">
            At this moment, we do not. The State of Massachusetts prohibits
            online acceptance of any government assistance payment programs.
          </FAQItem>
          <FAQItem question="Will I receive a receipt for my order?">
            Yes, you will. A finalized order receipt will be sent to your provided e-mail when your order is packed.
          </FAQItem>
          <FAQItem question="How does Natured keep my information safe?">
            We use Stripe, a world-class online payment processor that is a
            certified PCI Service Provider Level 1, the most stringent level
            of certification in the payments industry. <a href="https://stripe.com/docs/security/stripe">
            Learn more about Security at Stripe</a>.
          </FAQItem>
          <FAQItem question="I have a question about my order, where do I go?">
            Here are a few ways to find an answer to your question:
            <ol>
              <li>FAQ page</li>
              <li>Respond directly to your e-mail receipt</li>
              <li><a href="mailto:help@natured.co">E-mail our Commuity Care Team</a></li>
            </ol>
          </FAQItem>
        </FAQSection>
        <FAQSection title="Employment">
          <FAQItem question="I'd like to work at Natured, what should I do?">
            Awesome! <a href="mailto:hello@natured.co">Send us an e-mail with your resumé</a>. A member of our team will be reaching out.
          </FAQItem>
          <FAQItem question="Can I intern at Natured?">
            <a href="mailto:hello@natured.co">Send us an e-mail with your resumé and a brief description on why you'd like to join us</a>.
          </FAQItem>
        </FAQSection>
        <FAQSection title="Other">
          <FAQItem question="I think I found an issue with Natured's website?">
            We’re all about squashing bad bugs. Send your issue with
            the following information to <a href="mailto:help@natured.co?subject:Bad Bug%Report">
            help@natured.co</a>:
            <br /><br />
            <ul>
              <li>The page on which the issue occurred</li>
              <li>What you were doing when the issue occurred</li>
            </ul>
          </FAQItem>
          <FAQItem question="I want to help, how do I provide feedback?">
            Thank you for your help - we appreciate it! Send your feedback
            to <a href="mailto:help@natured.co">help@natured.co</a>.
          </FAQItem>
          <FAQItem question="I'm from a news organization & want to get in touch?">
            Thank you for your inquiry! Send us a note at
            <a href="mailto:hello@natured.co">hello@natured.co</a>.
          </FAQItem>
        </FAQSection>
      </div>
    );
  }
}

export default { component: page(FAQPage) };
