import React, { useEffect, useState } from "react";
import "./terms.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

type Props = {};

const TermsAndConditions = (props: Props) => {
  const [scrollState, setScrollState] = useState(0);

  const handleScroll = (event: any) => {
    setScrollState(() => window.scrollY);
  };

  const scrollToTop = (e: any) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="terms-card">
        <div className="termsWrapper">
          <h6 className="heading headingColor">
            {" "}
            Terms & Conditions and Privacy Policy – Rayy{" "}
          </h6>
          <div className="contentWrapper">
            <p className="contentHead contentHeadColor">1. Introduction:</p>
            <p className="terms_content contentColor">
              Welcome to www.rayy.com. The Service is operated by Pouring Pounds
              Ltd and/ or Pouring Pounds India Private Limited (
              <strong>“We”, “Us”, “Rayy” or “Our”</strong> where such expression
              shall unless repugnant to the context thereof, be deemed to
              include its respective legal heirs, representatives,
              administrators, permitted successors and assigns). Please read
              these terms and conditions (
              <strong>“Terms and Conditions” or “Agreement”</strong>) carefully
              as they contain the legal terms and conditions that you agree to
              when you use the service provided by us through the Website and
              the App (<strong>“Platform”, “Website”</strong>) .
            </p>
          </div>
          <div className="contentWrapper">
            <p className="contentHead contentColor">2. Membership:</p>
            <p className="terms_content contentColor">
              Our membership is available through registration process after you
              submit certain requested information to Rayy. During registration
              we display our current Terms and Conditions for your perusal.
            </p>
            <p className="terms_content contentColor">
              Please be aware that a member of Rayy is not allowed to run any
              paid ads on Google, Facebook or any other platform pointing to
              Rayy. If the member does not comply with this then it would result
              in immediate termination of his/her account.
            </p>
          </div>
          <div className="contentWrapper">
            <p className="contentHead contentColor">3. Our Service:</p>
            <p className="terms_content contentColor">
              Our Service allows users who register on the Platform (“
              <strong>Members</strong>“) and therefore create an account with us
              (“<strong>Account</strong>“) to earn profit on tracked purchases
              from customized links shared by Members on their personal networks
              from retailers on the Platform (“<strong>Retailers</strong>“). To
              qualify for profit, the Retailer must confirm that the Member’s
              purchase through the customized link is tracked, genuine and
              successful (constituting a “
              <strong>Qualifying Transaction</strong>
              “). Members can share these customized Rayy links with their
              friends, family and so on. When any Qualifying Transactions are
              generated through these links and Rayy receives commission fee for
              these Qualifying Transactions from Retailers, Rayy will pay
              Members “Profit” for sales generated via their customized Rayy
              links. Please note that if for any reason whatsoever, Rayy does
              not get paid commission from Retailers for Qualifying
              Transactions, then no Profit is due to the Member as well.
            </p>
            <p className="terms_content contentColor">
              In the event that the Retailers do not track a transaction using
              their affiliate tracking system, then such sales might not be paid
              to Rayy, and hence any due or expected profit from these sales
              will also not be paid to the Member.
            </p>
          </div>
          <div className="contentWrapper">
            <p className="contentHead contentColor">4. Becoming a Member:</p>
            <p className="terms_content contentColor">
              If You are a natural person, (i) as a condition to Your use of the
              Platform, You must be 18 (eighteen) years of age or older; and
              (ii) by visiting the Platform or accepting these Terms and
              Conditions, You represent and warrant to Rayy that You are 18
              (eighteen) years of age or older, and that You have the right,
              authority and capacity to use the Platform and agree to and abide
              by these Terms and Conditions; provided however that if You are a
              parent or legal guardian of a person younger than 18 (eighteen)
              years of age, You are permitted to access and use the Platform for
              the purposes of procuring the Services, on behalf of such persons.
              You must register for the Service using accurate and current
              information about yourself – including your correct name, address
              and any other requested details. If you are asked for, and
              provide, details of a bank account or Cheque payment details or
              other payment mode details into which you wish to receive payments
              (your “<strong>Profit Receipt Method</strong>“), you (a) must
              ensure that you are, and remain, fully entitled to use that profit
              Receipt Method, and (b) confirm that you wish to receive profit
              through that Profit Receipt Method. You should keep this
              information updated through your Account. Please note that Profit
              payments by Cheque carry an additional fee of Rs 30 to cover for
              administrative costs.
            </p>
            <p className="terms_content contentColor">
              Generation, collection and dissemination of ‘Sensitive Personal
              Data or Information’ is in accordance with Information Technology
              Act, 2000 as amended from time to time and allied rules requires
              the User’s express consent.. By affirming assent to this Policy by
              clicking on the “<strong>I agree with Terms and Policy</strong>”
              button at the time of registration, the User provides consent to
              such information generation and collection as required under
              applicable laws. We may also be required to share this data with
              our retailer partners for the purpose of their risk analysis and
              any other statutory requirements. By clicking on the “
              <strong>I agree with Terms and Policy</strong>” button you allow
              us to share your data and information with the retailer partner.
            </p>
            <p className="terms_content contentColor">
              Note that your Profit Receipt Method (such as NEFT, Cheque, Gift
              Cards or other payment modes as We may introduce) may have rules
              about the maximum or minimum payment that you can receive through
              that Profit Receipt Method.
            </p>
            <p className="terms_content contentColor">
              Important: You must ensure that the email address and mobile
              number we hold for you is kept up-to-date and that you have full
              access to it – we will be sending you important messages there. If
              you change email address or mobile number, then you must change
              the details we hold for you on your Account.
            </p>
          </div>
          <div className="contentWrapper">
            <p className="contentHead contentColor">
              5. Profit and Referral Fees:
            </p>
            <p className="terms_content contentColor">
              After a Member successfully completes a Qualifying Transaction,
              and once we have received the resulting Profit for that Qualifying
              Transaction, we pass that Profit to the Member through his/her
              Profit Receipt Method.
            </p>
            <p className="terms_content contentColor">
              Please note that there are various circumstances in which a
              transaction with a Retailer may not constitute a Qualifying
              Transaction, or Profit may not result from it. This is also true
              for a Qualifying Referral. The Member understands that all
              transactions made by him/her are not with us, but with the
              individual Retailer. Our help pages provide further information
              about these circumstances. Further, from time to time Retailers
              may increase or decrease the commission paid – in which case the
              profit offer illustrated on our Platform may be incorrect. By
              default, your applicable transactions will be credited in line
              with the commission reported to us by the Retailer, which may be
              more or less than the advertised rate. We shall not be liable for
              any difference in the expected profit by the Member and the actual
              Profit received by the Member.
            </p>
            <p className="terms_content contentColor">
              When we have traced a paying, Qualifying Transaction to your
              Account, we will credit your Account with a ‘pending payment’.
              Once the Retailer confirms the transaction, the payment will be
              marked as ‘validated’ – this can take 90 days or more from the
              date of the purchase. If the goods are returned or the sale
              reversed or amended by any means then the Profit payment will not
              be made. Apart from the Retailer, it is also mandatory for the
              members to intimate Rayy about any returns or exchanges for which
              they might have earned Profit unduly.
            </p>
            <p className="terms_content contentColor">
              Whether a transaction shall qualify as a Qualifying for Profit
              Transaction (including Profit through a Qualifying Referral) shall
              be at the sole discretion of the Retailer or us and the Member
              understands and agrees to the same. We shall not be held
              responsible if the Retailer fails to report a sale to us or does
              not qualify a transaction as Qualifying Transaction. Further, we
              shall not be responsible in the event due to some technical or
              other error we cannot trace a sale back to the Member and does not
              qualify the transaction as a Qualifying Transaction or a
              Qualifying Referral for any reason whatsoever. Whilst we will
              endeavour to recuperate non-payments from the Retailer, the
              decision of ourselves, the Retailer or Retailer’s tracking agent
              is final. Whilst we will try and recuperate missing commissions,
              at any point we reserve the right not to chase missing commission
              claims, particularly where no purchase has been made.
            </p>
            <p className="terms_content contentColor">
              Further, in the event that the Retailer feels that the purchase is
              not genuine for any reason whatsoever and we do not receive any
              Profit for the transaction, the Member will not receive any
              Profit.
            </p>
            <p className="terms_content contentColor">
              We reserve the right to reclaim or make balance adjustments
              accordingly where it has been established that any credit has been
              applied in error. This will include but is not limited to
              transactions where the credit is not genuinely due or payment for
              any credited transaction has not been received from a Retailer or
              its agencies and/or misuse or fraud. This can include transactions
              which are already marked as payable or validated in your Account,
              or for transactions which have already been paid over to you by
              NEFT, Cheque, Gift Cards or any other payment modes as We may
              introduce from time to time. In all such incidences, Rayy has the
              right to recover all unduly paid profit which the member is not
              entitled to earn, through legal proceedings.
            </p>
          </div>
          <div className="contentWrapper">
            <p className="contentHead contentColor">6. Your Account:</p>

            <p className="terms_content contentColor">
              You can withdraw your validated profit when you have at least INR
              10 in your Account. In the event the Member decides to close the
              Account with us, and if at such time of closure, the validated
              Profit in your account is less than INR 10 then the entire amount
              will be forfeited. If the validated Profit in your account is Rs
              250 or above, then you can request payment of the same via any of
              the Profit Receipt Methods. Profit payments by Cheque carry an
              additional fee of Rs 30. This is charged by our Bank to cover
              administration and postage costs. We have the discretion to
              forfeit any such validated balance showing on your Account for the
              reasons provided elsewhere in this Agreement.
            </p>
          </div>
          <div className="contentWrapper">
            <p className="contentHead contentColor">
              7. Intellectual Property:
            </p>

            <p className="terms_content contentColor">
              You acknowledge that all copyright, trademarks, and other
              intellectual property rights in and relating to the Platform
              (including the material which is contributed by Members or
              Retailers) are owned by, or licensed to, us. It is easy to copy
              material which appears on web-sites, but this does not mean it is
              legal. Therefore, no-one may copy, distribute, show in public or
              create any derivative work from the Platform, or any of the
              material which is found on the Platform unless properly licensed
              to do so by us.
            </p>
            <p className="terms_content contentColor">
              By uploading or including any material on the Platform, a Member
              expressly grants:
            </p>
            <ol type="a">
              <li>
                to us a non-exclusive license (including the right to grant
                sub-licenses) to use, reproduce and distribute that material
                through our Service and any other interactive services through
                which we or our sub-licensee make the Service (or a service
                based on our service) available; and
              </li>
              <li>
                to other Members (through us, under the license referred to in
                a. above), the non-exclusive, personal, non-transferable right
                to view the relevant material.
              </li>
            </ol>
          </div>
          <div className="contentWrapper">
            <p className="contentHead contentColor">8. Privacy Policy:</p>

            <p className="terms_content contentColor">
              Our Privacy Policy forms part of this Agreement, and by entering
              into this Agreement you also give your consent to the way we
              handle your personal data under that policy. Given the global
              nature of the World Wide Web, please note that a posting on the
              Platform may be accessible to internet users around the world.
            </p>
            <p className="terms_content contentColor">
              Pouring Pounds Limited and/ or Pouring Pounds India Private
              Limited (as the case may be) ({" "}
              <strong>We”, “Our”, “Rayy” or “Us”,</strong> where such expression
              shall unless repugnant to the context thereof, be deemed to
              include its respective legal heirs, representatives,
              administrators, permitted successors and assigns) own and/ or
              operate the website and mobile application rayy.com{" "}
              <strong>(“Website”, “Our Website”, “Site”)</strong>.<br />
              For the purpose of providing the Services (as defined in clause 1
              below), Rayy is required to collect and use certain information of
              the users of the Website (“Users”) using the Services and involves
              capturing, storage and transmission of such information. This
              privacy policy <strong>(“Privacy Policy“/ “Policy”)</strong>{" "}
              explains how We collect, use, share and protect personal
              information of the Users of the Services (jointly and severally
              referred to as <strong>“You”, “Your”, “Yourself”</strong> or
              “User” or “Users” in this Privacy Policy). We have created this
              Privacy Policy to ensure our steady commitment to the privacy of
              the information of the Users who interact with our Services. Your
              use of and access to the Services is subject to this Privacy
              Policy and our Terms and Conditions. Any capitalized term used,
              but not defined, in this Privacy Policy shall have the meaning
              attributed to it in our Terms and Conditions.
            </p>
            <p className="terms_content contentColor">
              The headings used herein are only for the purpose of arranging the
              various provisions of the Privacy Policy. The headings are for the
              purpose of reference only and shall not be interpreted to limit or
              expand the provisions of the clauses contained therein.
            </p>
            <p className="terms_content sub-header contentColor">
              <strong>8.1. Definitions</strong>
            </p>
            <ol type="a">
              <li>
                <strong>“Personal Information”</strong> shall have the same
                meaning as given in Rule 2(1)(i) of the Information Technology
                (Reasonable Security Practices and Procedures and Sensitive
                Personal Data or Information) Rules, 2011 to mean any
                information that relates to a natural person, which, either
                directly or indirectly, in combination with other information
                available or likely to be available to a body corporate, is
                capable of identifying such person.
              </li>
              <li>
                The SPI Rules further define{" "}
                <strong>“Sensitive Personal Data or Information”</strong> of a
                person to mean Personal Information about that person relating
                to:
                <ol type="i">
                  <li>passwords;</li>
                  <li>
                    financial information such as bank accounts, credit and
                    debit card details or other payment instrument details;
                  </li>
                  <li>physical, physiological and mental health condition;</li>
                  <li>sexual orientation;</li>
                  <li>medical records and history;</li>
                  <li>biometric information;</li>
                  <li>
                    information received by body corporate under lawful contract
                    or otherwise;
                  </li>
                  <li>
                    visitor details as provided at the time of registration or
                    thereafter; and
                  </li>
                  <li>call data records.</li>
                </ol>
              </li>
              <li>
                <strong>“You”, “Your”, “Yourself” </strong> and{" "}
                <strong>“User”</strong> shall mean and refer to natural &amp;
                legal individuals and legal entities/companies who visit and/or
                use the Services and will also include the
                individuals/entities/companies who avail the services by
                submission of details by some other person
              </li>
              <li>
                <strong>“Third Parties”</strong> refer to any
                website/application/web portal, company or individual apart from
                the User and Us.
              </li>
              <li>
                <strong>“Services”</strong> shall mean the Website
                (https://rayy.com/) and Mobile Application (Rayy) and contextual
                information transmitted to/ received from Users via various
                communication channels including but not limited to e-mail, SMS,
                WhatsApp, phone calls, website chat, IVR. We are primarily
                engaged in the business of allowing Users to share customized
                links for various products in the network of such Users, the
                customized links drive sales to e-commerce websites and in turn
                the Users earn cashbacks. We currently operate under the brand
                name Rayy.
              </li>
              <li>
                <strong>“User Information”</strong> shall mean Personal
                Information and Sensitive Personal Data or Information.
              </li>
              <li>
                <strong>“Website”</strong> shall mean and refer to{" "}
                <a href="https://rayy.com/">https://rayy.com/</a>, the{" "}
                <strong>“Application”</strong> and/ or <strong>“App”</strong>{" "}
                shall refer to the Rayy mobile application available on Android
                Play Store or iOS App Store. These shall be collectively
                referred to as the <strong>“Platform”</strong>
              </li>
            </ol>

            <p className="terms_content sub-header contentColor">
              <strong>8.2. WHY THIS PRIVACY POLICY?</strong>
            </p>
            <p className="terms_content contentColor">
              This Privacy Policy is published in compliance with, inter alia,
            </p>
            <ol type="a">
              <li>Section 43A of the Information Technology Act, 2000;</li>
              <li>Regulation 4 of the SPI Rules; and</li>
              <li>
                Regulation 3(1) of the Information Technology (Intermediaries
                Guidelines) Rules, 2011{" "}
                <strong>(“Intermediaries Guidelines”)</strong>.
              </li>
            </ol>
            <p className="terms_content contentColor">
              This Privacy Policy states, inter alia, the following:
            </p>

            <ol type="a">
              <li>
                The type of information collected from the Users, including
                Sensitive Personal Data or Information;
              </li>
              <li>
                The purpose, means and modes of usage of such information; and
              </li>
              <li>How and to whom we will disclose such information</li>
            </ol>

            <p className="terms_content sub-header contentColor">
              <strong>8.3. GENERAL</strong>
            </p>
            <ol type="a">
              <li>
                The User unequivocally agrees that this Policy and the
                aforementioned Terms and Conditions constitute a legally binding
                agreement between the User and Rayy, and that the User shall be
                subject to the rules, guidelines, policies, terms, and
                conditions applicable to any service that is provided by Rayy
                including the Services, and that the same shall be deemed to be
                incorporated into the Terms and Conditions, and shall be treated
                as part of the same.
              </li>
              <li>
                This document is an electronic record in terms of Information
                Technology Act, 2000 and rules there under as applicable and the
                amended provisions pertaining to electronic records in various
                statutes as amended by the Information Technology Act, 2000.
                This electronic record is generated by a computer system and
                does not require any physical or digital signatures. Further,
                this document is published in accordance with the provisions of
                the SPI Rules and Intermediaries Guidelines.
              </li>
              <li>
                The terms ‘Party’ and ‘Parties’ shall respectively be used to
                refer to the User and Rayy individually and collectively, as the
                context so requires.
              </li>
              <li>
                The headings of each section in this Policy are only for the
                purpose of organizing the various provisions under this Policy
                in an orderly manner and shall not be used by either Party to
                interpret the provisions contained herein in any manner.
                Further, it is specifically agreed to by the Parties that the
                headings shall have no legal or contractual value.
              </li>
              <li>
                The Parties expressly agree that subject to clause 13 of this
                Policy, Rayy retains the sole and exclusive right to amend or
                modify the Policy and the aforementioned Terms and Conditions
                without any prior permission or intimation to the User keeping
                in mind best practices and laws set by State/Central Government
                of India, and the User expressly agrees that any such amendments
                or modifications shall come into effect immediately. The User
                has a duty to periodically check the Policy and Terms and
                Conditions and stay updated on their provisions and
                requirements. If the User continues to use the Services
                following such a change, the User will be deemed to have
                consented to any and all amendments/ modifications made to the
                Policy and Terms and Conditions. In so far as the User complies
                with the Policy and Terms and Conditions, he/she is granted a
                personal, non-exclusive, non-transferable, revocable, limited
                privilege to enter, access and use the Services.
              </li>
            </ol>
            <p className="terms_content sub-header contentColor">
              <strong>
                8.4 COLLECTION AND HANDLING OF PERSONAL INFORMATION
              </strong>
            </p>
            <p className="terms_content contentColor">
              Privacy of the Parties is of prime importance to Us and all
              Services are strictly designed within the jurisdiction of laws
              defined by the Government of India.
            </p>
            <p className="terms_content contentColor">
              Generally, the Services require us to know who you are so that we
              can best meet your needs. When you access the Services, we may ask
              you to voluntarily provide us with certain information that
              personally identifies you or could be used to personally identify
              you. Without prejudice to the generality of the above, information
              collected by us from you may include (but is not limited to) the
              following:
            </p>

            <ol type="a">
              <li>
                Contact data (such as your email address and phone number);
              </li>
              <li>User name and passwords;</li>
              <li>
                Demographic data (such as your name, gender, age, your date of
                birth and your pin code);
              </li>
              <li>
                Data regarding your usage of the services and other transactions
                made by or with you through the use of Services;
              </li>
              <li>
                Information about your clicks on and from Rayy mobile device,
                web browser, web and mobile browsing patterns, retailer
                preferences
              </li>
              <li>
                Your bank account information including name of the bank
                account, account number, IFSC code, bank branch or any other
                payment related information
              </li>
              <li>
                Any other information that you voluntarily choose to provide to
                us (such as information shared by you with us through emails,
                calls or letters, your work details, home / work address, your
                family details, details about transactions done on ecommerce
                sites, screenshots of transactions, order IDs for transactions,
                alternate numbers and emails and various other information
                provided from time to time).
              </li>
            </ol>
            <p className="terms_content contentColor">
              The information collected from You by Us shall constitute
              ‘Personal Information’ or ‘Sensitive Personal Data Information’
              under the SPI Rules.
            </p>
            <p className="terms_content sub-header contentColor">
              <strong>8.5. PRIVACY STATEMENTS</strong>
            </p>

            <p className="terms_content contentColor">
              The User expressly agrees and acknowledges
            </p>
            <ol type="a">
              <li>
                Information that is freely available in the public domain or
                accessible under the Right to Information Act, 2005 or any other
                law will not be considered as ‘Personal Information’ or
                ‘Sensitive Personal Data or Information’ for the purposes of
                this Policy.That Rayy may automatically track information about
                the User based on the User’s IP address and the User’s behaviour
                on the Platform, and the User expressly consents to the same.
                The User is aware that this information may be used to conduct
                internal research on user demographics, interests, and
                behaviour, to enable Rayy to better understand, and cater to the
                interests of the Users. Further, the User is expressly made
                aware that such information may include the User’s computer
                &amp; web browser information, the User’s IP address, mobile
                device details etc. The linkage between User’s IP address and
                User’s personally identifiable information may be shared with or
                disclosed to third parties in order to facilitate the provisions
                of the Services to You. The User hereby consents to the sharing
                of such information to such third parties as may be determined
                by Rayy from time to time. Further, we may also share and/or
                disclose some of the aggregate findings (not the specific data)
                in anonymized form (i.e., non-personally identifiable) with
                third parties for market research and new feature development.
              </li>
              <li>
                That any and all information pertaining to the User collected by
                Rayy, whether or not directly provided by the User to Rayy,
                including but not limited to personal correspondence such as
                emails or letters or SMS or WhatsApp or calls, feedback from
                other users or third parties regarding the User’s activities or
                postings on the Platform, etc., may be collected and compiled by
                Rayy into a file/folder specifically created for/allotted to the
                User, and the User hereby expressly consents to the same.Also,
                in order to keep You informed of Your activities on the Website
                we occasionally send You emails, SMS, App notifications and
                other marketing communication. These include Your transaction
                messages to show how much You have earned, referral messages
                that show You how much You have earned from referrals, payment
                confirmations for payments to You and, important administrative
                messages and messages to confirm Your activities on the Website.
                These emails are not shared with anyone else apart from You.We
                also send newsletters, SMSs, App notifications, browser
                notification and other marketing that features some of our best
                ideas to help You save more. You may choose not to receive this
                marketing communication from Rayy by informing Us at any time.
                <br />
                We do not support spamming by our members and we explicitly
                prohibit it in our Terms and Conditions. If You would like to
                report an incident of spamming, please contact us so we can
                investigate and take suitable action.
              </li>
              <li>
                That the contact information provided to Rayy may be used to
                send the User offers and promotions, whether or not based on the
                User’s previous interests, and the User hereby expressly
                consents to receiving the same. The User may choose to
                unsubscribe from promotional communications by clicking on the
                ‘unsubscribe’ link provided at the end of such promotional
                communication or by emailing us on support@rayy.com
              </li>
              <li>
                That Rayy may occasionally request the User to complete optional
                online surveys. These surveys may require the User to provide
                contact information and demographic information (like zip code,
                age, income bracket, sex, etc.). The User is aware that this
                information is used to improve/customise the Services for the
                benefit of the User and providing all users of the Platform with
                services that Rayy believes they might be interested in availing
                of.
              </li>
              <li>
                That Rayy may keep records of electronic communications and
                telephone calls received and made for support or other purposes
                for the purpose of administration of Services, customer support,
                research and development and for better assistance to Users.That
                Rayy may occasionally request the User to write reviews for
                services availed of by the User from the Platform. The User is
                aware that such reviews will help potential users of the
                Platform in availing the Services, and the User hereby expressly
                authorizes Rayy to publish any and all reviews written by the
                User on the Platform, along with the User’s name and certain
                contact details, for the benefit and use of other users.
              </li>
              <li>
                Nothing contained herein shall be deemed to compel Rayy to
                store, upload, publish, or display in any manner
                content/reviews/surveys/feedback submitted by the User, and the
                User hereby expressly authorizes Rayy to remove from the
                Platform any such content, review, survey, or feedback submitted
                by the User, without cause or being required to notify the User
                of the same.
              </li>
              <li>
                Generation and collection of ‘Sensitive Personal Data or
                Information’ in accordance with Information Technology Act, 2000
                as amended from time to time and allied rules requires the
                User’s express consent. By affirming assent to this Policy as
                well as clicking on the{" "}
                <strong>“I agree with Terms and Policy”</strong> button at the
                time of registration, the User provides consent to such
                generation and collection as required under applicable laws.
              </li>
              <li>
                The User is responsible for ensuring that the accuracy of the
                information submitted to Rayy. The User may correct, delete
                inaccuracies, or amend information by contacting Rayy through
                email on support@rayy.com. Rayy will make good faith efforts to
                make requested changes in the databases as soon as reasonably
                practicable. If the User provides any information that is
                untrue, inaccurate, out of date or incomplete (or becomes
                untrue, inaccurate, out of date or incomplete), or Rayy has
                reasonable grounds to suspect that the information provided by
                the User is untrue, inaccurate, out of date or incomplete, Rayy
                may, at its sole discretion, discontinue the provision of the
                Services to you as per the provisions laid down in the Terms and
                Conditions. There may be circumstances where Pouring Pounds will
                not correct, delete or update your Personal Data, including (a)
                where the Personal Data is opinion data that is kept solely for
                evaluative purpose; and (b) the Personal Data is in documents
                related to a prosecution if all proceedings relating to the
                prosecution have not been completed.
              </li>
              <li>
                All the information provided to Us by a User, including
                Sensitive Personal Data or Information, is voluntary. User has
                the right to withdraw his/ her/ its consent at any time, in
                accordance with the terms of this Privacy Policy, and the Terms
                and Conditions applicable to such User, it being however
                clarified that withdrawal of consent will not be retroactive. If
                the User wishes to delete his/her account or request that Rayy
                no longer uses the User’s information to provide Services, the
                User may contact Rayy on support@rayy.com. We shall not retain
                such information for longer than is required for the purposes
                for which the information may lawfully be used or is otherwise
                required under any other law for the time being in force. After
                a period of time, your data may be anonymized and aggregated,
                and then may be held by us as long as necessary for us to
                provide our Services effectively, but our use of the anonymized
                data will be solely for analytic purposes. Please note that your
                withdrawal of consent, or cancellation of account may result in
                Pouring Pounds being unable to provide you with its Services or
                to terminate any existing relationship Pouring Pounds may have
                with you.
              </li>
              <li>
                If you wish to opt-out of receiving non-essential communications
                such as promotional and marketing-related information regarding
                the Services, please send us an email at support@rayy.com.
              </li>
            </ol>
            <p className="terms_content contentColor">
              The User expressly agrees and acknowledges
            </p>
            <p className="terms_content sub-header contentColor">
              <strong>8.6. OUR USE OF YOUR INFORMATION</strong>
            </p>
            <p className="terms_content contentColor">
              All the information provided to Rayy by a User, including Personal
              Information or any Sensitive Personal Data or Information, is
              voluntary. Such information in its original form may be shared
              with any Third Parties in furtherance of the consent from the User
              as provided hereunder. You understand that Rayy may use certain
              information of yours, which has been designated as Personal
              Information or ‘Sensitive Personal Data or Information’ under the
              SPI Rules for the following purposes:
            </p>

            <ol type="a">
              <li>providing you the Services;</li>
              <li>taking product &amp; Services feedback;</li>
              <li>
                for offering new products or services and marketing of the
                Services;
              </li>
              <li>
                for analysing software usage patterns for improving product
                design and utility;
              </li>
              <li>
                for providing the services of generating alerts/reminders/SMS
                for offers and also for internal record.
              </li>
              <li>
                for commercial purposes and in an aggregated or non-personally
                identifiable form for research, statistical analysis and
                business intelligence purposes,
              </li>
              <li>
                for sale or transfer of such research, statistical or
                intelligence data in a non-personally identifiable form to third
                parties and affiliates;
              </li>
              <li>debugging customer support related issues; and</li>
            </ol>
            <p className="terms_content contentColor">
              We may use your tracking information such as IP addresses, and or
              Device ID to help identify You and to gather broad demographic
              information.
            </p>

            <p className="terms_content contentColor">
              In case we are acquired by or merged with another company, We
              shall transfer information disclosed by You and information about
              You to the company we are acquired by or merged with, and such
              company will have the right to continue to use the User’s Personal
              Information and/ or other information that a User provides to Us.
              In the event of a merger or acquisition, We shall notify You by
              email/by putting a notice on the Website and/ or Application
              before Your Personal Information is transferred and becomes
              subject to a different privacy policy.
            </p>
            <p className="terms_content contentColor">
              The Users expressly agree and acknowledge that Rayy collects and
              stores the User’s Personal Information and/or Sensitive Personal
              Information in a secure cloud based platform which is provided by
              the User from time to time on the Platform or while using other
              Services.
            </p>
            <p className="terms_content contentColor">
              The User is aware that this information will be used by Rayy to
              deliver its services and help customize/improve the Platform
              experience safer and easier but no personally identifiable
              information will be shared with any Third Party under any
              circumstances without User’s explicit consent unless directed by
              the law.
            </p>
            <p className="terms_content contentColor">
              Rayy may need to disclose/ transfer User’s Personal Information to
              the following third parties for the purposes mentioned in this
              Privacy Policy, and the Terms and Conditions as applicable to such
              User:
            </p>

            <ol type="a">
              <li>
                To government institutions/ authorities to the extent required:
                <ol>
                  <li>
                    under the laws, rules, and regulations and/ or under orders
                    of any relevant judicial or quasi-judicial authority;
                  </li>
                  <li>to protect and defend the rights or property of Rayy;</li>
                  <li>to fight fraud and credit risk;</li>
                  <li>
                    to enforce Rayy’s Terms and Conditions applicable to the
                    Users; or
                  </li>
                  <li>
                    when Rayy, in its sole discretion, deems it necessary in
                    order to protect its rights or the rights of others.
                  </li>
                </ol>
              </li>
              <li>
                If otherwise required by an order under any law for the time
                being in force including in response to enquiries by government
                agencies for the purpose of verification of identity, or for
                prevention, detection, investigation including cyber incidents,
                prosecution, and punishment of offences.
              </li>
            </ol>

            <p className="terms_content contentColor">
              However, We contract with third parties to serve ads on our behalf
              across the Internet and sometimes on this site. They may collect
              information about Your visits to our website, and Your interaction
              with our products and services. They may also use information
              about Your visits to this and other websites to target
              advertisements for goods and services. This information is
              collected through the use of a pixel tag, which is industry
              standard technology used by most major websites. Such third
              parties are not permitted to sell or share Your personally
              identifiable information as part of this process.
            </p>
            <p className="terms_content contentColor">
              The following third-party vendors, including Google, Facebook,
              advertising platforms, remarketing platforms like CleverTap,
              customer query management platforms like Freshworks &amp; Exotel
              use cookies to serve ads based on a user’s prior visits to Your
              website.
            </p>
            <p className="terms_content contentColor">
              Google’s use of the DoubleClick cookie enables it and its partners
              to serve ads to your users based on their visit to your sites
              and/or other sites on the Internet.
            </p>
            <p className="terms_content contentColor">
              Users may opt out of the use of the DoubleClick cookie for
              interest-based advertising by visiting Ads Settings.
            </p>
            <p className="terms_content sub-header contentColor">
              <strong>8.7. CONFIDENTIALITY AND SECURITY</strong>
            </p>
            <p className="terms_content contentColor">
              8.7.1. Your information is regarded as confidential and therefore
              shall not be divulged to any Third Parties, unless as provided
              hereunder and unless legally required to do so to the appropriate
              authorities, or if necessary, for providing the Services through
              the Platform.
            </p>
            <p className="terms_content contentColor">
              8.7.2. Your Personal Information/Sensitive Personal Data is
              maintained by Us in an electronic form on our equipments, and on
              the equipments of our employees. Such information may also be
              converted to physical form from time to time.
            </p>
            <p className="terms_content contentColor">
              8.7.3. People who can access your Personal Information
              <br />
              User Information will be processed by our employees, authorised
              staff, marketing agencies or agents, on a need to know basis,
              depending on the specific purposes for which the User Information
              have been collected by Us. Rayy may, therefore, retain and submit
              all such records to the relevant stakeholders.
            </p>
            <p className="terms_content contentColor">
              8.7.4. Security Practices. We treat data as an asset that must be
              protected against loss and unauthorised access. We employ many
              different security techniques to protect such data from
              unauthorized access by members inside and outside Rayy. We follow
              generally accepted industry standards to protect the User
              Information submitted to Us and information that We have accessed,
              including managerial, technical, operational and physical security
              control measures. However, for any data loss or theft due to
              unauthorized access to the User’s electronic devices through which
              the User avails the Services, We shall not be held liable for any
              loss whatsoever incurred by the User.
            </p>
            <p className="terms_content contentColor">
              8.7.5. Measures We expect you to take: It is important that you
              also play a role in keeping your User Information safe and secure.
              When signing up for an online account, please be sure to choose an
              account password that would be difficult for others to guess and
              never reveal your password to anyone else. You are responsible for
              keeping this password confidential and for any use of your
              account. If you use a shared or public computer, never choose to
              have your login ID/email address or password remembered and make
              sure to log out of your account every time you leave the computer.
              You should also make use of any privacy settings or controls We
              provide you in Our Platform.
            </p>
            <p className="terms_content contentColor">
              8.7.6. Unauthorised use of User’s account. We do not undertake any
              liability for any unauthorized use of your account and password.
              If you suspect any unauthorized use of your account, you must
              immediately notify Us by sending an email to support@Rayy.com.
            </p>
            <p className="terms_content contentColor">
              8.7.7. Notwithstanding the above, Rayy is not responsible for the
              confidentiality, security or distribution of your Personal
              Information by third parties outside the scope of our agreement
              with such third parties. Further, Rayy shall not be responsible
              for any breach of security or for any actions of any third parties
              or events that are beyond the reasonable control of Rayy including
              but not limited to the, acts of government, computer hacking,
              unauthorised access to computer data and storage device, computer
              crashes, breach of security and encryption.
            </p>
            <p className="terms_content sub-header contentColor">
              <strong>8.8. RETENTION OF YOUR PERSONAL DATA</strong>
            </p>
            <p className="terms_content contentColor">
              In accordance with applicable laws, We will use the User
              Information for as long as necessary to satisfy the purposes for
              which such User Information was collected (as described in Section
              4 above) or to comply with applicable legal requirements.
            </p>
            <p className="terms_content sub-header contentColor">
              <strong>8.9. YOUR RIGHTS</strong>
            </p>
            <p className="terms_content contentColor">
              8.9.1. Access to Personal Data. You have the right to access,
              review and request a physical or electronic copy of information
              held about you. You also have the right to request information on
              the source of your Personal Information/Sensitive Personal
              Information.
            </p>
            <p className="terms_content  contentColor">
              8.9.2. Additional rights (e.g. modification, deletion of Personal
              Data). Where provided by law, you can (i) request deletion, the
              portability, correction or revision of your User Information; (ii)
              limit the use and disclosure of your Personal Data; and (iii)
              revoke consent to any of our data processing activities. Provided
              that, we may be required to retain some of your User Information
              after you have requested deletion, to satisfy our legal or
              contractual obligations. We may also be permitted by applicable
              laws to retain some of your User Information to satisfy our
              business needs.
            </p>
            <p className="terms_content sub-header contentColor">
              <strong>8.10. CHILDREN’S AND MINOR’S PRIVACY</strong>
            </p>
            <p className="terms_content contentColor">
              We strongly encourage parents and guardians to supervise the
              online activities of their minor children and consider using
              parental control tools available from online services and software
              manufacturers to help provide a child-friendly online environment.
              These tools can also prevent minors from disclosing their name,
              address, and other personally identifiable information online
              without parental permission. Although the Services are not
              intended for use by minors, We respect the privacy of minors who
              may inadvertently use the internet or the mobile application.
            </p>
            <p className="terms_content sub-header contentColor">
              <strong>8.11. CONSENT TO THIS POLICY</strong>
            </p>
            <p className="terms_content contentColor">
              You acknowledge that this Privacy Policy is a part of the Terms
              and Conditions of the Website and the other Services, and you
              acknowledge that you have unconditionally agreed as User of the
              Platform and the Services signifies your assent to this Privacy
              Policy. Your visit to the Website, use of the App and use of the
              Services is subject to this Privacy Policy and the Terms and
              Conditions.
            </p>
            <p className="terms_content sub-header sub-header contentColor">
              <strong>8.12. COOKIES</strong>
            </p>
            <p className="terms_content contentColor">
              When You avail our Services on the Platform, a persistent cookie
              is placed on Your computer.
            </p>
            <p className="terms_content contentColor">
              This enables us to track any purchases You make with our
              participating retailers and award cashback / rewards / points to
              You. If You do not have such persistent cookies enabled on Your
              computer You will not be able to earn cashback / points on Your
              online shopping via Our Platform.
            </p>
            <p className="terms_content contentColor">
              Disabling/enabling cookies: You have the ability to accept or
              decline cookies by modifying the settings in Your browser.
              However, You may not be able to use all the interactive features
              of Our Platform if cookies are disabled.
              <br />
              Please note: if You disable the cookies in Your browser which are
              used to track Your purchases via Our Platform, You will not be
              able to earn cashback / point when You shop from our website.
            </p>
            <p className="terms_content contentColor">
              There are a number of ways to manage cookies. If You use different
              computers in different locations You will need to ensure that each
              browser is adjusted to suit Your cookie preferences.
            </p>
            <p className="terms_content contentColor">
              You can easily delete any cookies that have been installed in the
              cookie folder of your browser. For example, if you are using
              Microsoft Windows Explorer:
            </p>

            <ol type="a">
              <li>Open ‘Windows Explorer’</li>
              <li>Click on the ‘Search’ button on the tool bar</li>
              <li>Type “cookie” into the search box for ‘Folders and Files’</li>
              <li>Select ‘My Computer’ in the ‘Look In’ box</li>
              <li>Click ‘Search Now’</li>
              <li>Double click on the folders that are found</li>
              <li>‘Select’ any cookie file</li>
              <li>Hit the ‘Delete’ button on your keyboard</li>
            </ol>

            <p className="terms_content contentColor">
              If you are not using Microsoft Windows Explorer, then you should
              select “cookies” in the “Help” function for information on where
              to find your cookie folder
            </p>
            <p className="terms_content contentColor">
              If you are not using Microsoft Windows Explorer, then you should
              select “cookies” in the “Help” function for information on where
              to find your cookie folder
            </p>
            <p className="terms_content sub-header contentColor">
              <strong>8.13. AFFILIATE COMMISSION</strong>
            </p>
            <p className="terms_content contentColor">
              Rayy, an affiliate platform, is essentially a service provider
              that connects retailers and publishers. Rayy is not liable to pay
              for any commission which is cancelled by the partner retailer due
              to any reason whatsoever and not limited to bulk buying, self
              consumption, unattributed sale, return or cancellation of product
              and/or violating any affiliate policy of our partner retailer.
              Users are required to constantly keep a check on profit rates and
              terms of campaigns as these are subject to change real time
              without prior notice. Rayy reserves the right to cancel the profit
              as directed by the partner retailer. By signing up on Rayy, user
              agrees to abide by this clause.
            </p>
            <p className="terms_content sub-header contentColor">
              <strong>8.14. AMENDMENTS OR CHANGE TO PRIVACY POLICY</strong>
            </p>
            <p className="terms_content contentColor">
              Rayy may update this Privacy Policy at any time, with or without
              advance notice. In the event there are significant changes in the
              way Rayy treats User Information, or in the Privacy Policy itself,
              Rayy will display a notice on the Website or send Users an email,
              as provided for above, so that the User may review the changed
              terms prior to continuing to use the Services. As always, if the
              User objects to any of the changes to our terms, and the User no
              longer wish to use the Services, the User may communicate the same
              to support@rayy.com to deactivate Your account. Unless stated
              otherwise, the current Privacy Policy applies to all information
              that Rayy has about You and Your account.
            </p>
            <p className="terms_content contentColor">
              If a User uses the Services after a notice of changes has been
              sent to such User or published on the Platform, such User hereby
              provides his/her/its consent to the changed terms.
            </p>
            <p className="terms_content sub-header contentColor">
              <strong>8.15. ADDRESS FOR PRIVACY QUESTIONS</strong>
            </p>
            <p className="terms_content contentColor">
              Should You have any questions about this Privacy Policy or Rayy’s
              information collection, use and disclosure practices, You may
              contact, the Data Protection Officer appointed by Rayy. We will
              use reasonable efforts to respond promptly to any requests,
              questions or concerns, which You may have regarding our use of
              Your Personal Information. If You have any grievance with respect
              to Our use of Your information, You may communicate such grievance
              to the Data Protection Officer:
            </p>
            <p className="terms_content contentColor">
              <strong>Name: Manish Saini, IT Manager</strong>
              <br />
              <strong>Pouring Pounds India Private Limited,</strong>
              <br />
              <strong>
                UM House, 2nd Floor, Gurgaon, Sector 44, 122002, Haryana, India
              </strong>
              <br />
              <strong>Email: support@rayy.com</strong>
            </p>
          </div>
          <div className="contentWrapper">
            <p className="contentHead contentColor">9. Our Role:</p>

            <p className="terms_content contentColor">
              We are not a party to any transactions with Retailers, and are not
              the seller or supplier of any of the goods or services that they
              make available. Thus, we do not have any of the legal obligations
              that apply to the sellers of those goods or services.
            </p>
            <p className="terms_content contentColor">
              Accordingly, we have no control over or responsibility for:
            </p>

            <ol type="a">
              <li>
                the quality, safety, or legality of those goods or services
                available from Retailers; or
              </li>
              <li>
                whether the Retailer can or will supply and pass good title to
                any goods or services.
              </li>
            </ol>
            <p className="terms_content contentColor">
              Members should exercise no lesser degree of caution in entering
              into transactions with Retailers than they would when entering
              into a similar transaction offline. To the extent that the
              Applicable Law permits, you release us, our agents and employees
              from all liability arising out of or in connection with any
              transactions with Retailers, including (without limitation) all
              claims and demands relating to uncompleted or completed
              transactions with Retailers, or goods or services offered for sale
              or supply, or actually sold or supplied, through or in connection
              with any transactions with Retailers.
            </p>
          </div>
          <div className="contentWrapper">
            <p className="contentHead contentColor">10. Misuse:</p>

            <p className="terms_content contentColor">
              We reserve the right to suspend or terminate any Members access to
              our service, or parts of it, if in our reasonable view the
              relevant Member or Account appears to be in breach of any
              provision of this Agreement.
            </p>
            <p className="terms_content contentColor">
              Members must not enter into, or attempt to enter into, any
              transaction with a Retailer or to gain Profit (a) by providing
              personal information of someone else, or a payment method which
              they are not entitled to use, (b) by deceptively or unfairly
              exploiting a Retailers’ offering including but not limited to
              creating fake or unauthorized referral links, or (c) in breach of
              any terms and conditions applied by us or the Retailer to that
              transaction. We reserve the right to forfeit any pending payments
              or validated payments in the Member’s Account in case of such
              misuse of our service by the Member.
            </p>
            <p className="terms_content contentColor">
              It is each Member’s obligation to ensure that any material posted
              by him/her or associated with his/her Account:
            </p>
            <ol type="a">
              <li>
                is not defamatory, offensive, or abusive or of an obscene,
                indecent or menacing nature;
              </li>
              <li>
                is not intended or likely to cause needless annoyance,
                inconvenience or distress to any person;
              </li>
              <li>
                does not contain any computer virus, macro virus, Trojan horse,
                worm, or anything else designed to interfere with, interrupt, or
                disrupt the normal operating procedures of a computer or to
                surreptitiously intercept, access without authority, or
                expropriate any system, data or personal information;
              </li>
              <li>
                does not contravene the Applicable Law or regulation (including,
                but not limited to, laws governing consumer protection, distance
                selling, unfair competition, anti-discrimination, false
                advertising, copyright, trademark and privacy);
              </li>
              <li>
                does not breach the rights of any person or entity (including
                any rights or expectations of privacy);
              </li>
              <li>
                where it constitutes feedback on a Retailer, is accurate and
                fair; and
              </li>
              <li>does not advertise any goods or services.</li>
            </ol>
            <p className="terms_content contentColor">
              Notwithstanding anything contained elsewhere in this Agreement and
              the Privacy Policy, we reserve the right to investigate complaints
              or reported violations of this Agreement and to take any action we
              deem appropriate, including but not limited to reporting any
              suspected unlawful activity to law enforcement officials,
              regulators, or other third parties and disclosing any information
              necessary or appropriate to such persons or entities relating to
              your Account, email addresses, usage history, posted materials, IP
              addresses and traffic information. Any Member, who in the sole
              discretion of the Retailer or us, has committed fraud in use of
              the Platform or our Service or misused the Platform or the
              Service, their Account will be closed, email and IP address will
              be blacklisted so they cannot use it again and cannot register
              from the same PC.
            </p>
            <p className="terms_content contentColor">
              If you see or experience anything on our Platform that appears to
              infringe any of the above requirements, we would like you to
              inform us by using our contact form.
            </p>
            <p className="terms_content contentColor">
              If you see or experience anything on our Platform that appears to
              infringe any of the above requirements, we would like you to
              inform us by using our contact form.
            </p>
            <p className="terms_content contentColor">
              Each Member acknowledges that we are entitled, but not obliged, to
              withdraw any material, which appears – based on information
              received from third parties or other Members – to be in breach of
              this Agreement.
            </p>
          </div>
          <div className="contentWrapper">
            <p className="contentHead contentColor">
              11. Contact from third parties:
            </p>
            <p className="terms_content contentColor">
              If anyone contacts us in relation to material or transactions
              associated with you or your Account, then you agree:
            </p>
            <ol type="a">
              <li>
                to provide all reasonable information and assistance we may
                require in connection with responding to that contact; and
              </li>
              <li>
                to respond promptly and accurately to it, should we pass the
                message to you for a response.
              </li>
            </ol>
          </div>
          <div className="contentWrapper">
            <p className="contentHead contentColor">12. Additional services:</p>

            <p className="terms_content contentColor">
              We or our partners may offer new or additional services through
              the Platform from time to time. Your use of those services may be
              subject to additional terms and conditions, which you must comply
              with. Provided that those terms are notified to you on the
              Platform in an appropriate manner (as determined by us in our
              reasonable discretion) when you agree to take those services, any
              failure by you to comply with a material provision of the terms
              governing those services will amount to a breach of this
              Agreement.
            </p>
          </div>
          <div className="contentWrapper">
            <p className="contentHead contentColor">
              13. Operation of our Service:
            </p>
            <p className="terms_content contentColor">
              We reserve the right to withdraw, modify or suspend aspects of the
              Service, or the entirety of it, where we have legal, security,
              technical or commercial reasons to do so. We will endeavour to
              give you 30 days advance notice before taking such action, except
              where it is necessary to take earlier action for security reasons
              or because of technical difficulties which would otherwise
              adversely affect our service. There may also be times when the
              Service becomes inaccessible as a result of technical difficulties
              experienced by us or on the Internet; we will, however, use
              reasonable skill and care to overcome these difficulties where
              they are within our control. Please note, however, that we cannot
              guarantee continuous access to the Service or any of the content
              that appears on it.
            </p>
            <p className="terms_content contentColor">
              Nevertheless, we will strive to ensure that any periods of planned
              unavailability, which you will be informed of when you access the
              Service at the relevant time, are kept to a minimum.
            </p>
            <p className="terms_content contentColor">
              For security or other reasons, we may require you to change
              password or other information which facilitates access to the
              Service; however, we will never ask you for your password via
              email, telephone, or any other means other than through the
              Platform. You are solely responsible for maintaining the
              confidentiality of your password and any additional identifying
              information.
            </p>
          </div>
          <div className="contentWrapper">
            <p className="contentHead contentColor">
              14. Rayy Amazon Affiliate
            </p>
            <ol>
              <li>
                By applying to Rayy Amazon Affiliate Program, the User is guided
                and expected to abide by a separate{" "}
                <a href="https://rayy.com/amazon-main-terms-condition">
                  T&amp;C document.
                </a>{" "}
                The user shall adhere to the Privacy Policy which is common for
                Rayy &amp; Rayy Amazon Affiliate Program.
              </li>
              <li>
                This is a moderated program and only eligible users (as decided
                by Rayy and/or Amazon) will be allowed to function.
              </li>
              <li>
                If a user is blocked either by Rayy or Amazon, any amount
                pending shall stand cancelled and forfeited.
              </li>
              <li>
                Rayy and/or Amazon, reserves the right to allow/disallow/block
                the users from accessing the program.
              </li>
            </ol>
          </div>
          <div className="contentWrapper">
            <p className="contentHead contentColor">
              15. Disclaimer and Limitation of Liability:
            </p>

            <p className="terms_content contentColor">
              <strong>Disclaimer:</strong>
            </p>
            <p className="terms_content contentColor">
              The content and material from or through the Platform are provided
              “as-is,” “as available,” with “all faults”, and all warranties,
              express or implied, are disclaimed (including but not limited to
              the disclaimer of any implied warranties of merchantability,
              non-infringement, freedom from error, and fitness for a particular
              purpose). The information and services may contain bugs, errors,
              problems or other limitations. We and our affiliated parties have
              no liability whatsoever for your use of any information or
              service, except as provided in sub-section 13(d). In particular,
              but not as a limitation thereof, we and our affiliated parties are
              not liable for any indirect, special, incidental or consequential
              damages (including damages for loss of business, loss of profits,
              savings, litigation, or the like), whether based on breach of
              contract, breach of warranty, tort (including negligence), product
              liability or otherwise, even if advised of the possibility of such
              damages. The negation and limitation of damages set forth above
              are fundamental elements of the basis of the agreement between us
              and you. This Platform and the products, services, documents,
              content and materials and information presented would not be
              provided without such limitations. No advice or information,
              whether oral or written, obtained by you from us through the
              Platform or otherwise shall create any warranty, representation or
              guarantee not expressly stated in this agreement. All
              responsibility or liability for any damages caused by viruses
              contained within the electronic file containing a form or document
              is disclaimed.
            </p>
            <p className="terms_content contentColor">
              <strong>Liability:</strong>
            </p>
            <ol type="a">
              <li>
                We warrant that the Service will be provided with reasonable
                care and skill with the intention of meeting our specifications
                for the Service, but we cannot and do not guarantee that the
                Service will meet your requirements.
              </li>
              <li>
                We shall be liable as expressly provided in this Agreement, but
                shall have no other obligation, duty or liability whatsoever in
                contract, tort (including negligence, breach of statutory duty
                and any other tort) or otherwise.
              </li>
              <li>
                <strong>Limitation of Liability:</strong> Subject always to
                sub-Clause d. below, we shall be liable for direct loss or
                damage only, whether in contract, tort (including negligence,
                breach of statutory duty or other tort) or otherwise, and
                whether caused by its act or omission or that of its employees,
                agents or subcontractors. The aggregate liability of Rayy and
                the affiliated parties in connection with any claim arising out
                of or relating to the Platform and/or the products, information,
                documents and services provided herein or hereby shall not
                exceed Rs 500 and that amount shall be in lieu of all other
                remedies which you may have against us and any affiliated party
                to us.
              </li>
              <li>
                We will not be liable to you or anyone else, whether in
                contract, tort (including negligence, breach of statutory duty
                or other tort) or otherwise
                <ol type="i">
                  <li>
                    (A) for any loss of revenue, business, anticipated savings
                    or profits; (B)any errors in or omissions from the Platform
                    or any services or products obtainable therefrom; (C) the
                    unavailability or interruption of the Platform or any
                    features thereof; (D) your use of the Platform; (E) the
                    content and materials contained on the Platform; (F) or any
                    delay or failure in performance beyond our control or any of
                    our affiliated parties.
                  </li>
                  <li>
                    for any indirect, special or consequential loss damage,
                    costs or other claims, howsoever caused or arising, whether
                    through non-supply or late supply of the Service or other
                    non-performance of this Agreement or otherwise.
                  </li>
                  <li>
                    Except as expressly stated elsewhere in this Agreement, all
                    representations, warranties, conditions and other terms,
                    whether express or implied (by common law, statute,
                    collaterally or otherwise) are hereby excluded, except in
                    the case of fraud, or where such exclusion is not permitted
                    by Applicable Law.
                  </li>
                  <li>
                    For the avoidance of doubt, we will not have liability to
                    you or any other person in respect of material contributed
                    by Members, transactions (or non-transactions) with
                    Retailers, or any activity or communication relating to such
                    material or transactions.
                  </li>
                </ol>
              </li>
            </ol>
            <p className="terms_content contentColor">
              The provisions of this Clause 14 shall survive the termination or
              expiry of this Agreement.
            </p>
          </div>{" "}
          <div className="contentWrapper">
            <p className="contentHead contentColor">16. Third Party Content:</p>
            <p className="terms_content contentColor">
              Third party content and materials may appear on the Platform or
              may be accessible via hyperlinks from the Platform. We are not
              responsible for and assume no liability whatsoever for any
              mistakes, misstatements of law, defamation, omissions, falsehood,
              obscenity, pornography or profanity in the statements, opinions,
              representations or any other form of content and materials
              appearing on the Platform or accessible via hyperlinks from the
              Platform.
            </p>
          </div>{" "}
          <div className="contentWrapper">
            <p className="contentHead contentColor">17. Communications:</p>
            <p className="terms_content contentColor">
              You hereby expressly agree to receive communications by way of
              SMS, e-mails, mobile app and browser notifications, and any other
              messages from time to time from Rayy relating to Services provided
              through the Website
            </p>
          </div>{" "}
          <div className="contentWrapper">
            <p className="contentHead contentColor">18. Indemnity:</p>
            <p className="terms_content contentColor">
              You agree to indemnify us against all liabilities, claims and
              expenses that may arise out of or in connection with (a) any
              breach of this Agreement by you or through your Account, or (b)
              any transaction with a Retailer.
            </p>
          </div>{" "}
          <div className="contentWrapper">
            <p className="contentHead contentColor">19. Assignment:</p>
            <p className="terms_content contentColor">
              We reserve the right to assign this Agreement, and to assign or
              subcontract any or all of our rights and obligations under this
              Agreement, but will not do so in such a way as to reduce any
              guarantees you are given under this Agreement. You may not without
              our written consent assign or dispose of this Agreement, nor
              subcontract any of your rights and obligations under it.
            </p>
          </div>{" "}
          <div className="contentWrapper">
            <p className="contentHead contentColor">20. Entire Agreement:</p>
            <p className="terms_content contentColor">
              This Agreement is intended to contain your entire agreement with
              us relating to the Service; we believe it to be fair and
              reasonable. It replaces all earlier agreements and understandings
              with you relating to the Service, except for any fraud or
              fraudulent representation by either of u
            </p>
          </div>{" "}
          <div className="contentWrapper">
            <p className="contentHead contentColor">
              21. Changes to this Agreement:
            </p>
            <p className="terms_content contentColor">
              We reserve the right to change this Agreement from time to time,
              and post the new version on the Service. When we do so, we will
              post the new version of the Agreement on the Service, and the new
              version of these terms and conditions will take effect, and will
              govern the Service and your relationship with us:
            </p>
            <ol type="a">
              <li>
                commencing no less than three days after the date of posting (or
                such later date as we indicate in the relevant posting), if any
                of the changes is to an operative provision of this Agreement
                which is capable of adversely affecting you; if you do not wish
                to be governed by the new version of the Agreement, you may
                notify us on or before the date when the new version of the
                Agreement is to take effect, and from that date you must cease
                to use our service or
              </li>
              <li>
                immediately upon the date of posting (or such later date as we
                indicate in the relevant posting), if the changes are not to
                operative provisions, or not capable of adversely affecting you
                – examples of which would include, without limitation, changes
                to contact details referred to, or the refinement of provisions
                that are already included, in this Agreement.
              </li>
            </ol>
          </div>{" "}
          <div className="contentWrapper">
            <p className="contentHead contentColor">22. General:</p>
            <p className="terms_content contentColor">
              In the event that any term of this Agreement is held to be invalid
              or unenforceable, the remainder of this Agreement shall remain
              valid and enforceable. You and us are independent contractors, and
              no agency, partnership, joint venture or employee-employer
              relationship is intended or created by this Agreement. Our failure
              to act with respect to a breach by you or others does not waive
              our right to act with respect to subsequent or similar breaches.
            </p>
          </div>{" "}
          <div className="contentWrapper">
            <p className="contentHead contentColor">23. Governing Law:</p>
            <p className="terms_content contentColor">
              This Agreement, and our relationship with you and each Member, is
              governed as per the Indian Laws. You and we each submit to the
              non-exclusive jurisdiction of the Indian courts in relation to
              disputes arising in connection with this Agreement.
            </p>
          </div>{" "}
          <div className="contentWrapper">
            <p className="contentHead contentColor">
              24. Keeping this Agreement:
            </p>
            <p className="terms_content contentColor">
              We don’t separately file the individual Agreements entered into by
              Members when they register for the Service. You can access it at
              www.rayy.com. Please make a durable copy of this Agreement by
              printing and/or saving a downloaded copy on your own computer. It
              is offered in English only.
            </p>
          </div>
          <div className="contentWrapper">
            <p className="contentHead contentColor">25. Contact:</p>
            <p className="terms_content contentColor">
              You can reach us on ‘support@rayy.com’.
            </p>
          </div>
          <button
            onClick={scrollToTop}
            id="myBtn"
            className={`scroll_button ${scrollState > 50 && "show"}`}
          >
            <KeyboardArrowUpOutlinedIcon className="scroll_up" />
          </button>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
