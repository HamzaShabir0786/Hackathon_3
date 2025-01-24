import Header from "./components/Header/Header";
export default function notFound() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-[70vh]">
        <div className="w-[20rem] h-[9rem] border-gray-300 bg-blue-950 text-white flex justify-center items-center rounded-md shadow-lg shadow-blue-900">
          <p>
            404 Error <br /> Your Router isn't Availabe...
          </p>
        </div>
      </div>
    </>
  );
}
