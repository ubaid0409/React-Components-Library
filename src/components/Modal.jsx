export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        {children}
        <button
          onClick={onClose}
          className="mt-4 ml-3 bg-red-600 hover:bg-red-700 text-white p-2 border rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
}
