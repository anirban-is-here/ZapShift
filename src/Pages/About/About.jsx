import React, { useState } from "react";

const About = () => {
  const sections = {
    story:
      "ZapShift began as a simple idea born out of everyday frustration. The founders kept noticing the same problems repeated across the delivery ecosystem — delayed parcels, lack of transparency, confusing tracking updates, and customer service that often failed to provide real answers. What should have been a smooth experience frequently turned into stress and uncertainty. Instead of accepting this as the norm, they decided to solve it. The early vision for ZapShift was built on the belief that delivery should feel effortless, predictable, and trustworthy for everyone, whether someone is sending a single gift or a business is shipping hundreds of orders each week. The founders spent countless hours studying real delivery challenges, speaking directly with customers, riders, and small business owners to understand where the gaps truly were. They noticed that most people didn’t just want faster delivery; they wanted clarity, reliability, and a platform that genuinely cared about their parcel. With that understanding, they began building ZapShift — starting with strong foundations like real-time tracking, better route planning, rider support, and a smoother customer experience. The team focused on creating a system that blends technology with human efficiency, ensuring that every parcel moves with purpose and every customer stays informed from start to finish. ZapShift’s story is ultimately one of improvement — of seeing a problem and choosing to fix it, step by step, until delivery becomes something people can finally trust without worry.",

    mission:
      "Our mission at ZapShift is to revolutionize the parcel delivery experience across Bangladesh by providing fast, reliable, and transparent services that customers can trust. We aim to bridge the gap between senders and recipients through innovative technology, efficient logistics, and a customer-centric approach. By focusing on real-time tracking, timely deliveries, and exceptional customer support, we strive to make every parcel journey seamless and stress-free. Our commitment extends beyond just delivering packages; we are dedicated to empowering individuals and businesses alike by enhancing connectivity and fostering trust in every interaction. At ZapShift, we envision a future where parcel delivery is not just a service but a dependable partner in people’s lives and businesses. At the heart of our mission lies a commitment to intelligent logistics. We believe the future of delivery depends on smart systems that can analyze patterns, anticipate bottlenecks, and optimize routes in real time. ZapShift is built around this philosophy. We use data, digital tools, and automation wherever possible to streamline operations and minimize the chances of error. Our goal is to ensure that every delivery—no matter how complex or time-sensitive—moves smoothly, efficiently, and predictably through our network. As we grow, we will continue invest heavily in technology that makes deliveries faster, more accurate, and more efficient, while always keeping the user experience at the center of every decision we make.",

    success:
      "ZapShift’s success is a reflection of consistent dedication, innovation, and the trust we have earned from our customers over the years. From the very beginning, we set out to solve real problems in the delivery industry, focusing on reliability, transparency, and efficiency. Every successful delivery, whether it is a single personal package or a large-scale business shipment, contributes to our growing reputation as a dependable logistics partner. Our success is not measured solely in numbers or parcels delivered, but in the confidence and satisfaction of the people who rely on us. Positive customer feedback, repeat clients, and the expansion of our service network across multiple regions are all milestones that demonstrate how effectively we are fulfilling our mission. Behind every achievement is a combination of smart technology, streamlined operations, and a team that goes above and beyond to ensure that deadlines are met and expectations exceeded. Over the years, we have implemented advanced tracking systems, route optimization, and responsive customer support, all of which have helped us reduce delivery times, minimize errors, and enhance overall efficiency. Our success also comes from empowering small businesses and local entrepreneurs, enabling them to reach their customers with the same reliability that larger enterprises enjoy. Each innovation, improvement, and satisfied customer is a testament to our commitment to excellence. ZapShift’s story of success is ongoing — we continue to push boundaries, embrace challenges, and expand our services with the goal of setting new standards for delivery performance, reliability, and trustworthiness across the industry.",

    team: "Behind every successful delivery at ZapShift is a dedicated and passionate team that works tirelessly to ensure every parcel reaches its destination safely and on time. From riders navigating busy streets to warehouse staff meticulously sorting packages, from customer support agents assisting users with queries to technology specialists developing and maintaining our platform, each member plays a crucial role in delivering excellence. Our team’s commitment to professionalism, reliability, and customer satisfaction forms the backbone of our operations. Beyond the daily tasks of handling shipments, our people are constantly innovating and improving processes, finding smarter ways to optimize routes, enhance tracking systems, and provide faster service. We invest heavily in training, tools, and support to empower our team members to perform at their best while fostering a culture of collaboration, accountability, and shared success. Alongside our core team, we also focus on building partnerships with local businesses, vendors, and stakeholders to expand our reach and improve the overall delivery ecosystem. By combining human expertise with smart technology, ZapShift ensures that operations run smoothly while maintaining the personal touch that sets us apart. The “Others” in this section represents all the contributors beyond our immediate team who help us achieve our mission — from logistics partners to community collaborators — each adding value to our service. Together, our team and extended network drive growth, innovation, and customer trust, making ZapShift a reliable, efficient, and customer-focused delivery platform that continues to set new standards in the industry.",
  };

  const [active, setActive] = useState("story");

  return (
    <div className="my-10 bg-neutral rounded-2xl p-20">
      <div className="border-b border-dashed pb-10">
        <h2 className="text-4xl font-bold text-secondary mb-5">About Us</h2>
        <p className="text-md text-primary-content">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal <br /> packages to business shipments — we
          deliver on time, every time.
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-10">
        <div className="flex text-2xl gap-7 cursor-pointer">
          <div
            className={`font-semibold  ${
              active === "story" ? "text-secondary underline" : "text-gray-600"
            }`}
            onClick={() => setActive("story")}
          >
            Story
          </div>

          <div
            className={`font-semibold  ${
              active === "mission"
                ? "text-secondary underline"
                : "text-gray-600"
            }`}
            onClick={() => setActive("mission")}
          >
            Mission
          </div>

          <div
            className={`font-semibold  ${
              active === "success"
                ? "text-secondary underline"
                : "text-gray-600"
            }`}
            onClick={() => setActive("success")}
          >
            Success
          </div>

          <div
            className={`font-semibold  ${
              active === "team" ? "text-secondary underline" : "text-gray-600"
            }`}
            onClick={() => setActive("team")}
          >
            Team & Others
          </div>
        </div>

        {/* Content Box */}
        <div className="mt-10 rounded-xl">
          <p className="text-lg text-primary-content leading-relaxed">
            {sections[active]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
