import React, { useState } from "react";

export default function ProjectCard({
  title,
  description,
  tags,
  documentType,
  year,
  image,
  link,
  documentLink, // thêm prop cho file PDF
}) {
  const [expanded, setExpanded] = useState(false);
  const [showPDF, setShowPDF] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  // sanitize document link: remove leading /public if present, ensure starts with '/', encode spaces
  const getSafeLink = (link) => {
    if (!link) return "";
    let l = String(link).trim();
    // remove accidental "/public/" prefix (common mistake)
    l = l.replace(/^\/?public\/+/i, "/");
    // ensure absolute-root path for local public files
    if (!/^https?:\/\//i.test(l) && !l.startsWith("/")) l = "/" + l;
    try {
      l = encodeURI(l);
    } catch (e) {
      /* noop */
    }
    return l;
  };
  const safeDocumentLink = getSafeLink(documentLink);

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl 
                 transition-all duration-300 flex flex-col"
    >
      {/* Ảnh đại diện */}
      <div className="relative w-full h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay khi hover */}
        <div
          className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 
                        transition-opacity duration-300 flex items-center justify-center gap-3"
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 
                       rounded-full hover:bg-indigo-500 transition-colors"
          >
            View Project ↗
          </a>

          {documentLink && (
            <button
              onClick={() => {
                // ensure we reset iframe status each time modal opens
                setIframeError(false);
                setIframeLoaded(false);
                setShowPDF(true);
              }}
              className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 
                         rounded-full hover:bg-emerald-500 transition-colors"
            >
              View Document 📄
            </button>
          )}
        </div>
      </div>

      {/* Nội dung */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 hover:text-indigo-600 transition-colors">
              {title}
            </h3>
            <p className="text-xs text-gray-500 font-mono mt-1">
              {documentType} • {year}
            </p>
          </div>
          <span className="text-gray-400 text-lg">📘</span>
        </div>

        {/* Mô tả có thể thu gọn / mở rộng */}
        <div className="mt-3 text-sm text-gray-600 leading-relaxed">
          <p className={expanded ? "" : "line-clamp-3"}>{description}</p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-indigo-600 hover:text-indigo-500 text-sm font-medium focus:outline-none"
          >
            {expanded ? "See less ▲" : "See more ▼"}
          </button>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-indigo-50 text-indigo-600 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* PDF Modal */}
      {showPDF && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-11/12 md:w-4/5 h-[90vh] relative overflow-hidden shadow-xl">
            <button
              onClick={() => setShowPDF(false)}
              className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-400"
            >
              ✖ Close
            </button>

            {/* Controls / fallback */}
            <div className="absolute top-3 left-3 z-10 flex gap-2">
              <a
                href={safeDocumentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-500"
              >
                Open in new tab
              </a>
              {!iframeLoaded && (
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-md text-sm">
                  Loading preview...
                </span>
              )}
            </div>

            {!iframeError ? (
              <iframe
                src={safeDocumentLink}
                title="Project Document"
                className="w-full h-full border-none rounded-b-2xl"
                onLoad={() => setIframeLoaded(true)}
                onError={() => setIframeError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="text-lg font-medium text-gray-800 mb-2">
                    Preview unavailable
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    The document couldn't be embedded (CORS or X-Frame-Options
                    may block embedding). You can still open it in a new tab.
                  </p>
                  <a
                    href={safeDocumentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-500"
                  >
                    Open Document 📄
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
