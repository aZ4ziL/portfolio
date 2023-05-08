import Link from "next/link";

export default function Experience() {
  return (
    <div className="pt-[80px]">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold">Pengalaman</h1>
        <p className="text-sm font-extralight text-gray-400">
          Pengalaman organisasi saat menjadi mahasiswa di kampus{" "}
          <Link href="https://metamedia.ac.id" target="_blank" className="text-sky-600 underline">
            Metamedia Padang
          </Link>
        </p>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4">
        <div className="bg-white rounded-md p-5">
          <div className="my-5">
            <h5 className="text-sky-600 uppercase font-extrabold text-xl">
              Komunitas Pemrograman Kafekoding
            </h5>
            <ul className="px-10 my-2">
              <li className="list-disc">Wakil Ketua Komunitas Kafe Koding (2023)</li>
              <li className="list-disc">Mentor Kelas Python (2021 - 2022)</li>
              <li className="list-disc">Mentor Kelas PHP (2023)</li>
              <li className="list-disc">Mentor Kelas Golang (2023)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
