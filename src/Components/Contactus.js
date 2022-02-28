import "./Contactus.css";
import ownimg from "./cont-own-img.jpg";
import sivaji from "./sivaji.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Contactus() {
  const animation = useAnimation();
  const [ref, inView] = useInView({
      threshold:0,
    triggerOnce: true,
  });

  const variants = {
    x_left: { x: [-1000, 10, 0]},
    x_right: { x: [1000, 10, 0] },
    y_top:{y: [-1000, 10, 0]},
    y_bottom:{x: [1000, 10, 0]}
  }

  useEffect(() => {
    if (inView) {
      animation.start({
        x: [-1000, 10, 0],
        transition: {
          type: "spring",
          when:"afterChildren",
          duration: 1,
          bounce: 0.2,
        },
      });
    } else {
      animation.start({ x: [1000, 100, 0] });
    }
  }, [inView]);

  return (
    <div className="contact-main-div">
      <motion.div
        className="contact-container"
        animate={{ x: [1000, 10, 0] }}
        transition={{ type: "spring", stiffness: 2000, duration: 1.2 }}
      >
        <h1 className="mt-5">Contact us</h1>
        <br />
        <h4>
          <span>Mahima mural arts</span>
          <br />
          <br />
          D.No 16-11-511/c/27
          <br />
          <br />
          Shalivahana nagar,Moosarambagh, Malakpet
          <br />
          <br />
          Hyderabad
          <br />
          <br />
          Telangana 500036
        </h4>

        <motion.img
             animate={{ x: [-1000, 10, 0] }}
        transition={{ type: "spring", stiffness: 500, duration: 1 }}
          src="https://5.imimg.com/data5/OX/GW/IU/SELLER-81538327/img-20191005-091635440-500x500.jpg"
          alt=""
        />
        <br />
      </motion.div>

      <h1 className="mng-heading mt-3">Management</h1>
      <div className="mng-sub-cont mt-3">
        <motion.div className="mng-ind-cont" ref={ref} animate={animation}>
          <img className="mng-img" src={ownimg} alt="CEO" />

          <div>
            <div className="designation">
              <h2>V PARTHA BHUPAL REDDY</h2>
              <h5>FOUNDER & CEO</h5>
            </div>
            <div className="personinfo">
              <p>
                {" "}
                V partha bhupal reddy is the founder and CEO of mahima muralarts
                and the person behind the vision. He has 20 years of experience
                in mural arts,construction works, house designs, wood work and
                sculpturing works.
              </p>
            </div>
            <div className="numbers">
              <a href="tel:+918341058143">
                <p>
                  <i class="fa fa-phone" style={{ color: "black" }}>
                    8341058143
                  </i>
                </p>
              </a>
              <a href="whatsapp://send?&phone=+919885115422">
                <p>
                  <i class="fa fa-whatsapp" style={{ color: "black" }}>
                    {" "}
                    9885115422
                  </i>
                </p>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div className="mng-ind-cont" ref={ref} animate={animation}>
          <img className="mng-img" src={sivaji} alt="managing_director" />
          <div>
            <div className="designation">
              <h2>R SIVAJI CHAKRAVARTHY</h2>
              <h5>MANAGING DIRECTOR</h5>
            </div>
            <div className="personinfo">
              <p>
                R sivaji chakravarthy, is the Managing Director of Mahima mural
                arts and the key person in leading company operations from
                Hyderabad. He is one of the CEO of FFTI sports wear textile
                company.
              </p>
            </div>
            <div className="numbers">
              <a href="tel:+917032014474">
                <p>
                  <i class="fa fa-phone" style={{ color: "black" }}>
                    7032014474
                  </i>
                </p>
              </a>
              <a href="whatsapp://send?&phone=+919666614474">
                <p>
                  <i class="fa fa-whatsapp" style={{ color: "black" }}>
                    9666614474
                  </i>
                </p>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
