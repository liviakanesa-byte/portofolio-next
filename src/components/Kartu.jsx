export default function Kartu({ judul, children }) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white 
p-6 shadow-sm">
      <h2 className="mb-3 text-2xl font-bold 
text-utama dark:text-sky-200 dark:text-sky-200">{judul}</h2>
      {children}

      <Kartu judul="Hobi">
        <ul className="list-disc pl-5"></ul>
        <ol className="list-decimal pl-5"></ol>
        {hobi.map((item) => (<li key={item}>{item}</li>))}
      </Kartu>
    </section>
  );
}
