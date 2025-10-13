import React from "react";
import avt1 from "../assets/avt1.jpg";
import avt2 from "../assets/avt2.jpg";
import avt3 from "../assets/avt3.jpg";
import avt4 from "../assets/avt4.jpg";
import avt5 from "../assets/avt5.jpg";
import avt6 from "../assets/avt6.jpg";
import avt7 from "../assets/avt7.jpg";
import avt8 from "../assets/avt8.jpg";
import avt9 from "../assets/avt9.jpg";

export default function PortfolioGallery() {
  const images = [
    { src: avt1, effect: "circle" },
    { src: avt2, effect: "square" },
    { src: avt3, effect: "heart" },
    { src: avt4, effect: "wave" },
    { src: avt5, effect: "gradient" },
    { src: avt6, effect: "shine" },
    { src: avt7, effect: "wave" },
    { src: avt8, effect: "gradient" },
    { src: avt9, effect: "shine" },
  ];

  return (
    <div className="">
      <div className="min-h-screen flex flex-col md:flex-row justify-center items-start p-10 gap-10 transition-colors duration-500">
        {/* CỘT TRÁI: GIỚI THIỆU BẢN THÂN */}
        <aside className="md:w-1/2 bg-transparent">
          <div className="sticky top-24 p-6 bg-white/5 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-700 mb-3">About me</h2>

            <p className="text-base text-gray-700 mb-3">
              I'm a final-year student at FPT University who has completed my
              graduation thesis, with only one course left to finish my degree.
              Currently, I’m working at <strong>Sendo Farm</strong> as a
              <strong>
                {" "}
                Software Implementation & Business Analysis Support Staff
              </strong>
              , where I have gained 2 years of hands-on experience in
              requirement analysis, business process improvement, and client
              support.
            </p>

            <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">
              Business Analyst (BA)
            </h3>
            <p className="text-base text-gray-700">
              I’m passionate about business analysis and solution optimization.
              My goal is to bridge business needs and technical solutions —
              identifying problems, refining workflows, and proposing
              improvements that bring measurable value to organizations. I’m
              currently pursuing a professional path toward becoming a
              <strong> Solution Expert</strong> with innovative, result-oriented
              thinking.
            </p>

            <ul className="mt-4 text-base text-gray-700 space-y-1 list-disc list-inside">
              <li>Requirement elicitation & documentation</li>
              <li>Business process analysis & optimization</li>
              <li>Stakeholder communication & UAT coordination</li>
              <li>Solution-oriented and continuous improvement mindset</li>
            </ul>

            <p className="text-base text-gray-700 mt-4">
              <strong>Mid-term goal:</strong> Graduate and pursue a Master’s in
              Technology Management. <br />
              <strong>Long-term goal:</strong> Become a professional BA and
              Solution Expert recognized for creativity and impactful
              innovations.
            </p>
          </div>
        </aside>

        {/* CỘT PHẢI: GALLERY ẢNH (GIỮ NGUYÊN) */}
        <div className="gallery-grid w-full md:w-1/2 max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item, i) => (
            <div
              key={i}
              className="gallery-item relative overflow-hidden rounded-2xl shadow-lg transition-all duration-700 ease-out"
            >
              {/* Square wrapper to ensure height == width */}
              <div
                className="relative w-full"
                style={{ paddingBottom: "100%" }}
              >
                <img
                  src={item.src}
                  alt={`Portfolio ${i}`}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>

              <div
                className={`overlay absolute inset-0 pointer-events-none opacity-0 transition-all duration-700 ease-out radial-glow`}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div>
        {/* FEATURED ARTICLE - placed separately below the gallery */}
        <div className="w-full max-w-6xl mx-auto mt-8 px-4">
          <h3 className="text-xl font-semibold mb-4">Featured article</h3>
          <div className="bg-white border rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 w-full h-48 md:h-auto">
              <img
                src={avt3}
                alt="Article thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <h4 className="text-lg font-bold">
                [SENDO] Thỏa sức vận dụng kiến thức được học tập tại trường khi
                OJT tại Sen Đỏ
              </h4>
              <p className="text-gray-700 mt-3 text-base">
                Bài viết trên trang trường Đại học FPT giới thiệu trải nghiệm
                OJT tại Sen Đỏ, nơi tôi tham gia thực hiện dự án và áp dụng kiến
                thức học được tại trường vào môi trường thực tế.
              </p>
              <div className="mt-4">
                <a
                  href="https://qhdn-hcmuni.fpt.edu.vn/2024/11/08/thoa-suc-van-dung-kien-thuc-duoc-hoc-tap-tai-truong-khi-ojt-tai-sen-do/?fbclid=IwY2xjawNZwqtleHRuA2FlbQIxMQABHgNS2N-iyeRRNNXeIbo1aqJSkjN4UEhfqdMPK60H7YKKzX1yUCwCqQf6Mq1G_aem_EVs2jbBttikUoqZl6up25Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
                >
                  Read article
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* simplified overlay effect (gentle radial glow) */
const effectClasses = {};
