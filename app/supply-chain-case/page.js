import FixedWidthContainer from "@/components/fixed-width-container/fixed-width-container";
import Image from "next/image";
import styles from "./supply-chain.module.css";
import PaddedContent from "@/components/padded-content/padded-content";

export default function SupplyChainCase() {
  return (
    <>
      {/* <div className={styles.hero}>
      <div className={styles.background}>
        <Image src="/case_studies/SupplyChainBackground.jpg" layout="fill" objectFit="cover" alt="Background" />
      </div>
      <div className={styles.heading}>
        <h1>Revolutionizing Supply Chain Management with the KeHE Connect Platform</h1>
        <p>As one of the largest organic and natural food distributors in the United States, KeHE's growth was putting significant strain on legacy technology systems. The compounding risk of an aging IT workforce and less market-available technology skills, as well as the increasing need for robust and user friendly systems to keep scale with the business demanded that KeHE make a change.</p>
        <a href="https://madelabs-assets.s3.us-east-2.amazonaws.com/Supply_Chain_Case_Study.pdf" target="_blank" rel="noopener noreferrer">Download PDF</a>
      </div>
    </div> */}

      <div className={styles.heroSection}>
        <div className={styles.heroImage}>
          <Image
            src="/case_studies/SupplyChainBackground.jpg"
            layout="fill"
            objectFit="cover"
            alt="Background"
          />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroContainer}>
            <h2 className={styles.heroHeading}>
              Revolutionizing Supply Chain Management with the KeHE Connect Platform
            </h2>
            <p className={styles.heroParagraph}>
              As one of the largest organic and natural food distributors in the United States,
              KeHE's growth was putting significant strain on legacy technology systems. The
              compounding risk of an aging IT workforce and less market-available technology
              skills, as well as the increasing need for robust and user friendly systems to keep
              scale with the business demanded that KeHE make a change.
            </p>
            <a
              href="https://madelabs-assets.s3.us-east-2.amazonaws.com/Supply_Chain_Case_Study.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
      <FixedWidthContainer>
        <PaddedContent>
          <div className={styles.content}>
            <div className={styles.textSection}>
              <h3>Overview </h3>
              <p>
                As one of the largest organic and natural food distributors in the United States,
                KeHE&apos;s growth was putting significant strain on legacy technology systems. 
                The compounding risk of an aging IT workforce and less market-available technology
                skills, as well as the increasing need for robust and user friendly systems to keep
                scale with the business demanded that KeHE make a change. KeHE sought out experts
                in software engineering and architecture to design a bespoke solution, seeing this
                opportunity as a future competitive advantage in the marketplace.  A forward
                thinking vision on data visibility, stakeholder collaboration, and end to end
                business process automation is what led KeHE to work with MadeLabs staff.
              </p>

              <h3>About KeHE </h3>
              <p>
                KeHE Distributors, headquartered in Naperville, IL, is a leading organic and
                natural food distribution company, boasting an annual revenue of approximately $10
                billion. KeHE Distributors is one of the nation&apos;s top wholesale food
                distributors with 18 distribution centers across North America. KeHE helps natural
                & organic, specialty and fresh brands get onto retail shelves and online for sale
                across thousands of grocery stores. KeHE has grown significantly since COVID both
                organically and through strategic acquisitions.  It is paramount that the
                dedication and innovation of over 6,800 employee-owners is not inhibited by a
                complex technical environment with several legacy and disparate systems. 
              </p>
            </div>

            <div className={styles.outcomes}>
              <div className={styles.metric}>
                <h2>1.5b</h2>
                <p>Added Revenue</p>
              </div>
              <div className={styles.metric}>
                <h2>10-15%</h2>
                <p>Projected increase in efficiency</p>
              </div>
              <div className={styles.metric}>
                <h2>+1,300</h2>
                <p>Newly adopted Users</p>
              </div>
            </div>
          </div>

          <section className={styles.challengeSolution}>
            <div className={styles.challengeSolutionContent}>
              <h3>The Challenge</h3>
              <p>
                KeHE needed to handle rapid growth while maintaining industry leading fill rates
                and without adding significant headcount.  Without changes to the technology
                strategy, KeHE&apos;s growth could have been its downfall.
              </p>
            </div>
            <div className={styles.challengeSolutionContent}>
              <h3>The Solution</h3>
              <p>
                A modernization initiative was established to provide a secure and user-friendly
                platform for all stakeholders, including retailers, suppliers, and internal staff,
                to interact with KeHE's systems. This solution streamlines core processes such as
                procurement, sales, and shipping, while increasing revenue, decreasing costs, and
                improving transparency throughout the supply chain.
              </p>
            </div>
          </section>

          <div className={styles.content}>
            <div className={styles.outcomes2}>
              <div className={styles.metric}>
                <h2>1.5b</h2>
                <p>Added Revenue</p>
              </div>
              <div className={styles.metric}>
                <h2>10-15%</h2>
                <p>Projected increase in efficiency</p>
              </div>
              <div className={styles.metric}>
                <h2>+1,300</h2>
                <p>Newly adopted Users</p>
              </div>
            </div>
            <div className={styles.textSection}>
              <div>
                <p>
                  In collaboration with MadeLabs staff, a modernization initiative was undertaken
                  to provide a secure and user-friendly platform for all stakeholders that interact
                  with KeHE’s systems including retailers, suppliers, and internal staff.  The
                  collective system is called the Connect Platform. This solution comprised
                  purpose-built portals for retailers (Connect Retailer), suppliers (Connect
                  Supplier), and internal staff (Connect Enterprise). Connect Retailer facilitates
                  product discovery, purchasing, and access to invoices, while Connect Supplier
                  streamlines supplier onboarding and provides analytics on brand performance.
                  Connect Enterprise serves as a back-office solution for securely accessing
                  transactional and master data. The entire system is governed by a comprehensive
                  set of APIs, ensuring scalability and seamless integration to their technology
                  ecosystem and participating partners.
                </p>
              </div>
              <div>
                <h3>Conclusion </h3>
                <p>
                  {" "}
                  The collaboration between KeHE and MadeLabs staff exemplifies how innovative
                  technology solutions can revolutionize supply chain management, amplify
                  competitiveness in the industry, and ultimately drive business growth,
                  profitability and value.  If you would like to learn more about how MadeLabs can
                  help your organization, please contact us to set up an appointment.
                </p>
              </div>
            </div>
          </div>
        </PaddedContent>
      </FixedWidthContainer>
    </>
  );
}
