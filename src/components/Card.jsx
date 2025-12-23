export default function Card({ title, price, children, footer }) {
  return (
    <div className="border rounded-lg p-4 shadow bg-white">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-600">{children}</p>
      <p className="font-semibold mt-2">Rs. {price}</p>
      {footer && <div className="mt-3">{footer}</div>}
    </div>
  );
}
