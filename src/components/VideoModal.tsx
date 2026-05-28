import { useEscapeKey } from '@/hooks/useEscapeKey';

type VideoModalProps = {
  onClose: () => void;
  title: string;
  videoUrl: string;
};

export default function VideoModal({ onClose, title, videoUrl }: VideoModalProps) {
  useEscapeKey(onClose);

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-black rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 bg-gray-900">
          <h3 className="text-white font-semibold text-sm truncate">{title} — Demo</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors ml-4 flex-shrink-0"
            aria-label="Close video"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="aspect-video bg-black">
          <video
            src={videoUrl}
            controls
            autoPlay
            className="w-full h-full"
            controlsList="nodownload"
          >
            Your browser does not support HTML5 video.
          </video>
        </div>
      </div>
    </div>
  );
}
