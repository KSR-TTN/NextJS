"use client";

interface PopupProps {
  onClose: () => void;
}

export default function Popup({ onClose }: PopupProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-amber-300">
          Hello from the Pop-up!
        </h2>
        <p className=" text-gray-700">This is a dynamically imported pop-up.</p>
        <button
          className="mt-3 px-4 py-2 bg-red-500 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
