import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Page1() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto p-6">
        {/* Título */}
        <h1 className="text-4xl font-bold text-center my-8">Productos</h1>

        {/* Contenedor de productos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Producto 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image src="/product1.jpg" alt="Producto 1" width={300} height={200} className="w-full" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold">Producto 1</h2>
              <p className="text-gray-600 mt-2">
                Este es un excelente producto con muchas características impresionantes.
              </p>
              <p className="text-lg font-bold text-blue-600 mt-4">$99.99</p>
            </div>
          </div>

          {/* Producto 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image src="/product2.jpg" alt="Producto 2" width={300} height={200} className="w-full" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold">Producto 2</h2>
              <p className="text-gray-600 mt-2">
                Un producto increíble con materiales de alta calidad y diseño innovador.
              </p>
              <p className="text-lg font-bold text-blue-600 mt-4">$129.99</p>
            </div>
          </div>

          {/* Producto 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image src="/product3.jpg" alt="Producto 3" width={300} height={200} className="w-full" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold">Producto 3</h2>
              <p className="text-gray-600 mt-2">
                Un producto confiable y duradero que vale la pena tener en casa.
              </p>
              <p className="text-lg font-bold text-blue-600 mt-4">$79.99</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}